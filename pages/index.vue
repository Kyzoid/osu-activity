<template>
  <div class="min-h-full relative">
    <Header />
    <div class="body container mx-auto w-full px-2 md:px-0 lg:w-4/5 xl:w-3/5 pb-14">
      <div class="shadow">
        <div class="title">
          <div class="flex items-center">
            <img src="/icons/home.svg" width="30" />
            <span class="ml-4">home</span>
          </div>
        </div>
        <div class="events">
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
               country {{ event.rankDifference > 1 ? 'ranks' : 'rank' }} (#{{event.lastRank}} → #{{ event.newRank }})
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
                country {{ event.rankDifference > 1 ? 'ranks' : 'rank' }} (#{{event.lastRank}} → #{{ event.newRank }})
              </p>
              <span class="play-timestamp">{{
                $dayjs(event.createdAt).fromNow()
              }}</span>
            </div>

            <div
              v-if="event.type === 'pp_new' || event.type === 'pp_improve'"
              class="event"
            >
              <div class="flex items-center">
                <p>
                  <a :href="`https://osu.ppy.sh/users/${event.userId}`">{{
                    event.username
                  }}</a>
                  achieved a
                  <span class="pp-value">{{ event.pp }}</span
                  ><span class="pp">pp</span>
                  with
                  <span class="accuracy"
                    >{{ (event.accuracy * 100).toFixed(2) }}%</span
                  >
                  on
                  <a
                    :href="`https://osu.ppy.sh/beatmapsets/${event.beatmapsetId}#mania/${event.beatmapId}`"
                    >{{ event.beatmapTitle }} [{{ event.beatmapDifficulty }}]</a
                  >
                </p>
                <div
                  :class="`grid grid-cols-${
                    event.mods.length ? event.mods.length : '1'
                  } gap-1 ml-2`"
                >
                  <img
                    v-for="name in event.mods"
                    :key="name"
                    :src="`/icons/mods/${name}.png`"
                    width="30.94"
                  />
                </div>
              </div>
              <span class="play-timestamp">{{
                $dayjs(event.createdAt).fromNow()
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { QueryDocumentSnapshot } from '@firebase/firestore'
import Vue from 'vue'
import { EventHistory } from '~/types'

export default Vue.extend({
  data() {
    return {
      loading: true,
      eventsHistory: [] as EventHistory[],
    }
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
          rankDifference
        };
      })
    },
  },
  async created() {
    this.eventsHistory = await this.getEventsHistory()
    this.loading = false
  },
  methods: {
    async getEventsHistory(): Promise<EventHistory[]> {
      const events: EventHistory[] = []
      const eventsSnap = await this.$fire.firestore
        .collection('events')
        .orderBy('createdAt', 'desc')
        .limit(10)
        .get()

      if (!eventsSnap.empty) {
        eventsSnap.forEach((doc: QueryDocumentSnapshot) => {
          const event = doc.data() as EventHistory
          events.push(event)
        })
      }

      return events
    },
  },
})
</script>

<style lang="postcss">
.event {
  @apply flex items-center justify-between px-4 py-1.5 text-sm rounded-lg;
  background-color: hsl(var(--hsl-b4));
}

.accuracy {
  color: #fc2;
}

.difficulty {
  color: #ea0;
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
  @apply px-10 py-5 bg-no-repeat bg-contain bg-bottom grid grid-cols-1 gap-0.5;
  background-color: hsl(var(--hsl-b5));
  background-image: url(/icons/page-extra-footer.png);
}

.title {
  @apply px-10 py-3;
  background-color: hsl(var(--hsl-d4));
}
</style>