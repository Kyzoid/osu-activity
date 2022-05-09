<template>
  <div class="min-h-full relative">
    <Header />
    <div
      class="body container mx-auto w-full px-2 md:px-0 lg:w-4/5 xl:w-3/5 pb-14"
    >
      <div class="shadow">
        <div class="title">
          <div class="flex items-center">
            <img src="/icons/home.svg" width="30" />
            <div class="ml-4 flex flex-col">
              <span>Latest best performances</span>
              <span class="text-xs">latest best performance from the top 50 mania French players</span>
            </div>
          </div>
        </div>
        <div class="events relative">
          <div v-if="newScoresCount"
            :class="[loadingNewScores ? '' : 'cursor-pointer']"
            class="absolute flex items-center justify-center top-1 left-1/2 transform -translate-x-1/2 rounded-full w-28 h-6 bg-blue-400 shadow"
            @click="refreshEventsHistory"
          >
            <Loader v-if="loadingNewScores" color="white" />
            <span v-else class="text-sm text-white">{{ newScoresCount }} new scores</span>
          </div>
          <div class="w-full grid grid-cols-1 gap-3">
            <div v-for="(event, index) in computedEventsHistory" :key="index">
              <div v-if="event.type === 'gain_rank'" class="event">
                <p>
                  <a
                    class="link"
                    :href="`https://osu.ppy.sh/users/${event.userId}`"
                    >{{ event.username }}</a
                  >
                  gained
                  <span class="text-green-400">{{ event.rankDifference }}</span>
                  country {{ event.rankDifference && (event.rankDifference > 1) ? 'ranks' : 'rank' }} (#{{
                    event.lastRank
                  }}
                  → #{{ event.newRank }})
                </p>
                <span class="play-timestamp">{{
                  $dayjs(event.createdAt).fromNow()
                }}</span>
              </div>

              <div v-if="event.type === 'lose_rank'" class="event">
                <p>
                  <a
                    class="link"
                    :href="`https://osu.ppy.sh/users/${event.userId}`"
                    >{{ event.username }}</a
                  >
                  lost
                  <span class="text-red-400">{{ event.rankDifference }}</span>
                  country {{ event.rankDifference && (event.rankDifference > 1) ? 'ranks' : 'rank' }} (#{{
                    event.lastRank
                  }}
                  → #{{ event.newRank }})
                </p>
                <span class="play-timestamp">{{
                  $dayjs(event.createdAt).fromNow()
                }}</span>
              </div>

              <div
                v-if="event.type === 'PP_NEW'"
                class="flex flex-col text-sm"
              >
                <div class="flex items-center mb-1">
                  <a class="flex items-center mr-1.5" :href="`https://osu.ppy.sh/users/${event.userId}`">
                    <img :src="event.avatarURL" class="mr-1 w-5 h-5 rounded-full" />
                    <span>{{ event.username }}</span>
                  </a>
                  <span>achieved:</span>
                </div>
                <PlayDetail :play="event" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { QueryDocumentSnapshot } from '@firebase/firestore';
import Vue from 'vue';
import PlayDetail from '../../../components/PlayDetail.vue';
import { EventHistory, Job } from '~/types';

export default Vue.extend({
  components: { PlayDetail },
  data() {
    return {
      loading: true,
      newScoresCount: 0,
      loadingNewScores: false,
      eventsHistory: [] as EventHistory[],
      jobs: [] as Job[]
    };
  },
  computed: {
    computedEventsHistory(): EventHistory[] {
      return this.eventsHistory.map((event) => {
        let rankDifference = 0;

        if (event.lastRank && event.newRank) {
          if (event.type === 'gain_rank') {
            rankDifference = event.lastRank - event.newRank;
          }

          if (event.type === 'lose_rank') {
            rankDifference = event.newRank - event.lastRank;
          }
        }

        return {
          ...event,
          rankDifference,
        };
      });
    },
  },
  async created() {
    await this.signInUser();
    this.eventsHistory = await this.getEventsHistory();
    this.loading = false;
    
    const jobsRef = this.$fire.database.ref('jobs');

    const snapshot = await jobsRef.get();
    const rawJobs = snapshot.val() as { [key: string]: Job };
    this.jobs = Object.values(rawJobs);

    jobsRef.on('child_added', (snapshot: any) => {
      const job = snapshot.val() as Job;
      const jobFound = this.jobs.findIndex((j) => j.createdAt === job.createdAt);
      if (jobFound === -1) {
        this.jobs.push(job);
        this.newScoresCount += job.count;
      }
    });
  },
  methods: {
    async signInUser() {
      try {
        await this.$fire.auth.signInAnonymously();
      } catch (e) {
        alert(e)
      }
    },
    async refreshEventsHistory() {
      this.loadingNewScores = true;
      this.eventsHistory = await this.getEventsHistory();
      this.loadingNewScores = false;
      this.newScoresCount = 0;
    },
    async getEventsHistory(): Promise<EventHistory[]> {
      const events: EventHistory[] = [];
      const eventsSnap = await this.$fire.firestore
        .collection('events')
        .orderBy('createdAt', 'desc')
        .limit(50)
        .get();

      if (!eventsSnap.empty) {
        eventsSnap.forEach((doc: QueryDocumentSnapshot) => {
          const event = doc.data() as EventHistory;
          events.push(event);
        });
      }

      return events;
    },
  },
});
</script>

<style lang="postcss">
.event {
  @apply flex items-center justify-between px-4 py-1.5 text-sm rounded-lg;
  background-color: hsl(var(--hsl-b3));
}

.event:hover {
  background-color: hsl(var(--hsl-b2));
}

.play-timestamp {
  color: hsl(var(--hsl-f1));
}

.pp-value {
  color: hsl(var(--hsl-h1));
}

.pp {
  color: hsl(var(--hsl-l3));
}

.events {
  @apply flex items-end px-10 py-5 bg-no-repeat bg-contain bg-bottom;
  min-height: 10rem;
  background-color: hsl(var(--hsl-b5));
  background-image: url(/icons/page-extra-footer.png);
}

.title {
  @apply px-10 py-3;
  background-color: hsl(var(--hsl-d4));
}
</style>