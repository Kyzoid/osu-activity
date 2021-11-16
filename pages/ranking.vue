<template>
  <div class="min-h-full relative">
    <Header />
    <div class="body container mx-auto w-3/5 pb-14">
      <div class="shadow">
        <div class="rankings">
          <div class="flex items-center">
            <img src="/icons/rankings.svg" width="30" />
            <span class="ml-4">rankings</span>
          </div>
        </div>
        <div class="users">
          <table class="w-full text-sm">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Accuracy</th>
                <th>Play Count</th>
                <th class="text-white">Performance</th>
              </tr>
            </thead>
            <tbody v-if="!loading">
              <tr v-for="(user, index) in users" :key="user.id">
                <td class="text-center rounded-l text-white">#{{ index + 1 }}</td>
                <td class="username flex items-center justify-start">
                  <img src="/icons/flag_fr.svg" width="26.66" class="mr-2" />
                  <a target="_blank" :href="`https://osu.ppy.sh/u/${user.id}`">{{ user.username }}</a>
                </td>
                <td class="text-center">{{ (user.accuracy*100).toFixed(2) }}%</td>
                <td class="text-center">{{ user.playCount }}</td>
                <td class="text-center rounded-r text-white">{{ user.pp }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { QueryDocumentSnapshot } from 'firebase/firestore';
import { User } from '../types';
import { userConverter } from '../firestore/converters';

export default Vue.extend({
  data() {
    return {
      users: [] as User[],
      loading: true,
    }
  },
  async created() {
    this.users = await this.getUsers();
    this.loading = false;
  },
  methods: {
    async getUsers(): Promise<User[]> {
      const users: User[] = [];
      const usersSnap = await this.$fire.firestore.collection('users').withConverter(userConverter).get();

      if (!usersSnap.empty) {
        usersSnap.forEach((doc: QueryDocumentSnapshot) => {
          const user = doc.data() as User;
          users.push(user);
        });
      }

      return users;
    }
  }
})
</script>

<style lang="postcss">
.rankings {
  @apply px-10 py-3;
  background-color: hsl(var(--hsl-d4));
}

.users {
  @apply px-10 py-5 bg-no-repeat bg-contain bg-bottom;
  background-color: hsl(var(--hsl-b5));
  background-image: url(/icons/page-extra-footer.png);
}

.users > table {
  border-spacing: 0px 3px;
  color: hsl(var(--hsl-f1));
}

.users > table > thead > tr > th {
  @apply font-normal;
}

.users > table > tbody > tr {
  @apply px-3 rounded-sm;
  background-color: hsl(var(--hsl-b4));
}

.users > table > tbody > tr:hover {
  background-color: hsl(var(--hsl-b3));
}

tr > td.username > a {
  color: hsl(var(--hsl-l2));
}

tr > td.username > a:hover {
  @apply underline;
  color: hsl(var(--hsl-l1));
}

.users > table > tbody > tr > td {
  @apply py-0.5;
}
</style>
