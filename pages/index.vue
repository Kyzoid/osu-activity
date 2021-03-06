<template>
  <AppLayout
    icon-src="/icons/rankings.svg"
    title="Classement par premières places françaises"
    description="nombre de premières places sur le classement français"
  >
    <div class="users px-10 py-5">
      <div class="table-wrapper">
        <table class="w-full text-xs">
          <thead>
            <tr>
              <th></th>
              <th class="w-52 md:w-1/3 lg:w-1/2"></th>
              <th class="px-2">Rang FR</th>
              <th class="px-2">Précision</th>
              <!-- <th>Play Count</th> -->
              <!-- <th>Performance</th> -->
              <th class="px-2 text-white">Premières <br>places</th>
              <th class="px-2">Premières <br>places 4K</th>
              <th class="px-2">Premières <br>places 7K</th>
              <th class="px-2">Premières <br>places XK</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="user.id" :class="[user.isActive ? '' : 'opacity-50']">
              <td class="px-3 text-center rounded-l text-white">#{{ index + 1 }}</td>
              <td title="France" class="w-52 md:w-full username flex items-center justify-start">
                <div class="flag-filter mr-2"></div>
                <NuxtLink :to="`/users/${user.id}`" class="hover:underline">{{ user.username }}</NuxtLink>
              </td>
              <td class="text-center">
                {{ user.countryRank ? `#${user.countryRank}` : '-' }}
              </td>
              <td class="text-center">
                {{ user.accuracy.toFixed(2) }}%
              </td>
              <!-- <td class="text-center">
                {{ user.playCount }}
              </td> -->
              <!-- <td class="text-center">
                {{ user.pp ? Math.round(user.pp) : '-' }}
              </td> -->
              <td class="text-center text-white">
                {{ user.cfpCount ? user.cfpCount : '0' }}
              </td>
              <td class="text-center">
                {{ user.cfpCountByKeys ? user.cfpCountByKeys['4K'] : '0' }}
              </td>
              <td class="text-center">
                {{ user.cfpCountByKeys ? user.cfpCountByKeys['7K'] : '0' }}
              </td>
              <td class="text-center rounded-r">
                {{ user.cfpCountByKeys ? user.cfpCountByKeys['XK'] : '0' }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
    }
  },
  async mounted() {
    this.users = await this.getUsers();
    this.$store.dispatch('loading', false);
  },
  methods: {
    async getUsers(): Promise<User[]> {
      const users: User[] = [];
      const usersSnap = await this.$fire.firestore.collection('users').orderBy('cfpCount', 'desc').limit(50).get();
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

.flag-filter {
  position: relative;
  height: 20px;
  width: calc(20px*1.3333);
  background-image: url('/icons/flag_fr.svg');
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;

  &:after {
    content: "";
    position: absolute;
    filter: contrast(0) brightness(2);
    opacity: .25;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: white;
    border-radius: 3px;
  }
}

.stat-up {
  @apply text-green-400;
}

.stat-down {
  @apply text-red-400;
}

.users {
  @apply bg-no-repeat bg-contain bg-bottom;
  background-color: hsl(var(--hsl-b5));
  background-image: url('/icons/page-extra-footer.png');

  & > .table-wrapper > table > thead > tr > th {
    @apply font-normal;
  }

  & > .table-wrapper > table > tbody > tr {
    @apply px-3 rounded-sm;
    background-color: hsl(var(--hsl-b4));
  }

  & > .table-wrapper > table > tbody > tr:hover {
    background-color: hsl(var(--hsl-b3));
  }

  & > .table-wrapper > table > tbody > tr > td {
    @apply py-1.5;
  }

  & > .table-wrapper > table {
    border-collapse: separate;
    border-spacing: 0px 3px;
    color: hsl(var(--hsl-f1));
  }
}

@media (max-width: 810px) {
  .users > .table-wrapper {
    overflow-x: scroll;
  }
}

tr > td.username > a {
  color: hsl(var(--hsl-l2));
}

tr > td.username > a:hover {
  @apply underline;
  color: hsl(var(--hsl-l1));
}

</style>
