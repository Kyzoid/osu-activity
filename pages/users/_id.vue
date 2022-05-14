<template>
  <AppLayout
    icon-src="/icons/home.svg"
    title="informations du joueur"
  >
    <div class="user">
      <div class="profile-bg" :style="`background-image: url('${'https://assets.ppy.sh/user-profile-covers/4089441/57ade8cea7b216d6392d1fc0c8c1984a0d2c46874834ac4bfaaf8d9fc261932a.jpeg'}')`"></div>
      
      <div class="user-info-wrapper shadow">
        <div class="user-info flex items-end px-6 lg:px-12 xl:px-16">
          <div class="avatar shadow" :style="`background-image: url('${'https://a.ppy.sh/4089441?1638276425.jpeg'}');`"></div>
          <div class="ml-5 flex flex-col mb-3">
            <span class="text-2xl">{{ user.username }}</span>
            <div class="flex items-center">
              <div class="flag-filter mr-1"></div>
              <span class="text-sm">France</span>
            </div>
          </div>
        </div>
      </div>

      <div class="user-profile-pages p-3 flex flex-col items-start">
        <div class="page flex flex-col items-start">
          <h2 class="page-h2 mb-6 font-bold">Classements</h2>

          <h3 class="page-h3 font-bold py-2">Premières places françaises (4K) <span class="count-badge ml-2">{{ user.countryFirstPlacesCount ? user.countryFirstPlacesCount['4K'] : '0' }}</span></h3>
          <PlayDetailsList :plays="computedUserFirstPlaces['4K']" />

          <h3 class="page-h3 font-bold py-2">Premières places françaises (7K) <span class="count-badge ml-2">{{ user.countryFirstPlacesCount ? user.countryFirstPlacesCount['7K'] : '0' }}</span></h3>
          <PlayDetailsList :plays="computedUserFirstPlaces['7K']" />

          <h3 class="page-h3 font-bold py-2">Premières places françaises (XK) <span class="count-badge ml-2">{{ user.countryFirstPlacesCount ? user.countryFirstPlacesCount['XK'] : '0' }}</span></h3>
          <PlayDetailsList :plays="computedUserFirstPlaces['XK']" />
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script lang="ts">
import Vue from 'vue';
import { User, Play } from '../../types';
import { UserCountryFirstPlace } from '~/types/User';

export default Vue.extend({
  data() {
    return {
      user: {} as User,
      loading: true,
      mockPlay: {
        accuracy: 0.9623,
        artist: 'Basshunter',
        beatmapDifficulty: '[7K] Insane',
        beatmapId: 123213,
        beatmapTitle: 'Boten Anna',
        beatmapsetId: 23133,
        createdAt: '2022-05-12',
        mods: [],
        pp: 123,
        userId: 1,
        username: 'Kyzoid',
        rank: 'S'
      } as Play,
    }
  },
  computed: {
    computedUserFirstPlaces(): { '4K': UserCountryFirstPlace[], '7K': UserCountryFirstPlace[], 'XK': UserCountryFirstPlace[] } {
      return {
        '4K': this.user.countryFirstPlaces ? this.user.countryFirstPlaces.filter((cfp) => cfp.keys === '4K') : [],
        '7K': this.user.countryFirstPlaces ? this.user.countryFirstPlaces.filter((cfp) => cfp.keys === '7K') : [],
        'XK': this.user.countryFirstPlaces ? this.user.countryFirstPlaces.filter((cfp) => cfp.keys !== '4K' && cfp.keys !== '7K') : [],
      }
    }
  },
  async created() {
    this.user = await this.getUser();
    this.loading = false;
  },
  methods: {
    async getUser(): Promise<User> {
      const userDoc = await this.$fire.firestore.collection('users').doc(this.$route.params.id).get();

      if (!userDoc.exists) {
        throw new Error(`User ${this.$route.params.id} not found.`);
      }

      return userDoc.data() as User;
    }
  }
})
</script>

<style lang="postcss" scoped>
.user {
  background-color: hsl(var(--hsl-b5));
}

.profile-bg {
  @apply bg-cover;
  background-position: 50%;
  height: 250px;
}

/* user-info-wrapper ------------------------------------ */
.user-info-wrapper {
  background-color: hsl(var(--hsl-b4));
  height: calc(120px - 2.5rem);
}

.avatar {
  @apply bg-contain bg-no-repeat;
  height: 120px;
  width: 120px;
  border-radius: 40px;
  background-position: 50%;
  background-color: #333;
}

.user-info {
  transform: translateY(-3rem);
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

/* user-profile-pages ------------------------------------ */
.user-profile-pages {
  background-color: hsl(var(--hsl-b5));
}

.user-profile-pages > .page {
  @apply w-full shadow py-4 px-6 rounded;
  background-color: hsl(var(--hsl-b4));
}

.page-h2 {
  @apply text-base;
  border-bottom: 2px solid hsl(var(--hsl-h1));
  color: hsl(var(--hsl-c1));
}

.page-h3 {
  @apply text-sm relative;
}

.page-h3:before {
  content: "";
  height: 0.65em;
  margin-top: 0.45rem;
  margin-left: -0.5rem;
  width: 3px;
  border-radius: 10000px;
  position: absolute;
  background-color: hsl(var(--hsl-h1));
}

.count-badge {
  @apply rounded-full font-bold;
  color: hsl(var(--hsl-f1));
  background-color: hsl(var(--hsl-b6));
  padding: 5px 10px;
  font-size: .8em;
  padding-top: 0px;
  padding-bottom: 1px;
}
</style>
