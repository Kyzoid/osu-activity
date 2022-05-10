<template>
  <div class="min-h-full relative">
    <Header />
    <div class="body container mx-auto lg:w-3/5 pb-14">
      <div class="shadow">
        <div class="rankings">
          <div class="flex items-center">
            <img src="/icons/rankings.svg" width="30" />
            <div class="ml-4 flex flex-col">
              <span>Classement par premières places françaises</span>
              <span class="text-xs">nombre de premières places sur le classement français</span>
            </div>
          </div>
        </div>
        <div class="users">
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
              <tbody v-if="!loading">
                <tr v-for="(user, index) in users" :key="user.id" :class="[user.isActive ? '' : 'opacity-50']">
                  <td class="px-3 text-center rounded-l text-white">#{{ index + 1 }}</td>
                  <td title="France" class="w-52 md:w-full username flex items-center justify-start">
                    <div class="flag-filter mr-2">
                      <!-- <img src="/icons/flag_fr.svg" width="26.66" /> -->
                    </div>
                    <a class="width-full" target="_blank" :href="`https://osu.ppy.sh/u/${user.id}`">{{ user.username }}</a>
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
                    {{ user.countryFirstPlacesTotal ? user.countryFirstPlacesTotal : '0' }}
                  </td>
                  <td class="text-center">
                    {{ user.countryFirstPlacesCount ? user.countryFirstPlacesCount['4K'] : '0' }}
                  </td>
                  <td class="text-center">
                    {{ user.countryFirstPlacesCount ? user.countryFirstPlacesCount['7K'] : '0' }}
                  </td>
                  <td class="text-center rounded-r">
                    {{ user.countryFirstPlacesCount ? user.countryFirstPlacesCount['XK'] : '0' }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
      const usersSnap = await this.$fire.firestore.collection('users').orderBy('countryFirstPlacesTotal', 'desc').limit(50).get();

      if (!usersSnap.empty) {
        usersSnap.forEach((doc: QueryDocumentSnapshot) => {
          const user = doc.data() as User;
          users.push(user);
        });
      }

      users.sort((userA, userB) => {
        const cfpA = userA.countryFirstPlaces?.length || 0;
        const cfpB = userB.countryFirstPlaces?.length || 0;
        return cfpB - cfpA;
      });

      return users.filter(u => u.countryFirstPlaces?.length ? 1 : 0);
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

.rankings {
  @apply px-10 py-3;
  background-color: hsl(var(--hsl-d4));
}

.users {
  @apply px-10 py-5 bg-no-repeat bg-contain bg-bottom;
  background-color: hsl(var(--hsl-b5));
  background-image: url(/icons/page-extra-footer.png);
}

.users > .table-wrapper > table {
  border-collapse: separate;
  border-spacing: 0px 3px;
  color: hsl(var(--hsl-f1));
}

@media (max-width: 810px) {
  .users > .table-wrapper {
    overflow-x: scroll;
  }
}

.users > .table-wrapper > table > thead > tr > th {
  @apply font-normal;
}

.users > .table-wrapper > table > tbody > tr {
  @apply px-3 rounded-sm;
  background-color: hsl(var(--hsl-b4));
}

.users > .table-wrapper > table > tbody > tr:hover {
  background-color: hsl(var(--hsl-b3));
}

tr > td.username > a {
  color: hsl(var(--hsl-l2));
}

tr > td.username > a:hover {
  @apply underline;
  color: hsl(var(--hsl-l1));
}

.users > .table-wrapper > table > tbody > tr > td {
  @apply py-1.5;
}
</style>
