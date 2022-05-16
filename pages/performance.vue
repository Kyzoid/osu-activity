<template>
  <AppLayout
    icon-src="/icons/rankings.svg"
    title="classement"
    description="liste des joueurs observés"
  >
    <div class="performance">
      <table class="w-full text-xs">
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
          <tr v-for="(user, index) in users" :key="user.id" :class="[user.isActive ? '' : 'opacity-50']">
            <td class="text-center rounded-l text-white">#{{ index + 1 }}</td>
            <td class="username flex items-center justify-start">
              <img src="/icons/flag_fr.svg" width="26.66" class="mr-2" />
              <a target="_blank" :href="`https://osu.ppy.sh/u/${user.id}`">{{ user.username }}</a>
            </td>
            <td class="text-center">
              {{ user.accuracy.toFixed(2) }}%
              <!-- <span class="stat-down">(-0.03%)</span> -->
            </td>
            <td class="text-center">
              {{ user.playCount }}
              <!-- <span class="stat-up">(+121)</span> -->
            </td>
            <td class="text-center rounded-r text-white">
              {{ Math.round(user.pp) }}
              <!-- <span class="stat-up">(+14.22)</span> -->
            </td>
          </tr>
        </tbody>
      </table>
      <!-- <small class="text-xs">Note: numbers in parenthesis indicate the gain/loss in one month</small> -->
    </div>
  </AppLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import { QueryDocumentSnapshot } from 'firebase/firestore';
import { User } from '../types';

export default Vue.extend({
  data() {
    return {
      users: [] as User[],
      loading: true,
    }
  },
  async mounted() {
    this.users = await this.getUsers();
    this.loading = false;
  },
  methods: {
    async getUsers(): Promise<User[]> {
      const users: User[] = [];
      const usersSnap = await this.$fire.firestore.collection('users').orderBy('countryRank', 'asc').limit(50).get();

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

<style lang="postcss" scoped>
small {
  color: hsl(var(--hsl-f1));
}

.stat-up {
  @apply text-green-400;
}

.stat-down {
  @apply text-red-400;
}

.rankings {
  @apply px-10 py-3;
  background-color: hsl(var(--hsl-d4));
}

.performance {
  @apply px-10 py-5 bg-no-repeat bg-contain bg-bottom;
  background-color: hsl(var(--hsl-b5));
  background-image: url(/icons/page-extra-footer.png);
}

.performance > table {
  border-collapse: separate;
  border-spacing: 0px 3px;
  color: hsl(var(--hsl-f1));
}

.performance > table > thead > tr > th {
  @apply font-normal;
}

.performance > table > tbody > tr {
  @apply px-3 rounded-sm;
  background-color: hsl(var(--hsl-b4));
}

.performance > table > tbody > tr:hover {
  background-color: hsl(var(--hsl-b3));
}

tr > td.username > a {
  color: hsl(var(--hsl-l2));
}

tr > td.username > a:hover {
  @apply underline;
  color: hsl(var(--hsl-l1));
}

.performance > table > tbody > tr > td {
  @apply py-0.5;
}
</style>
