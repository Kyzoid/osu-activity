<template>
  <div class="play-detail leading-3">
    <div v-if="play" class="flex items-center pl-5 py-1">
      <img :src="`/icons/grades/${play.rank}.svg`" width="40" />
      <div class="ml-2 flex flex-col">
        <a
          class="play-link"
          :href="`https://osu.ppy.sh/beatmapsets/${play.beatmapsetId}#mania/${play.beatmapId}`"
          target="_blank"
        >
          <span class="text-sm">{{ play.beatmapTitle }}</span>
          <span class="text-xs">par {{ play.artist }}</span>
        </a>
        <div class="flex text-xs">
          <span class="mr-2 difficulty">{{ play.beatmapDifficulty }}</span>
          <span class="play-time">{{ $dayjs(play.createdAt).fromNow() }}</span>
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <div class="flex items-center">
        <img
          v-for="name in play.mods"
          :key="name"
          class="ml-1"
          :src="`/icons/mods/${name}.png`"
          width="30.94"
        />
      </div>
      <span class="accuracy font-semibold mx-4 text-sm">{{ (play.accuracy * 100).toFixed(2) }}%</span>
      <div class="play-detail--pp">
        {{ Math.round(play.pp) }}<span class="text-xs" style="color: hsl(var(--hsl-l3));">pp</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Play } from '~/types';

export default Vue.extend({
  props: {
    play: {
      type: Object as Vue.PropType<Play>,
      default: null,
    },
  },
});
</script>

<style lang="postcss" scoped>
.play-detail {
  @apply rounded-lg flex justify-between;
  background-color: hsl(var(--hsl-b2));
}

.play-detail:hover {
  background-color: hsl(var(--hsl-b1));
}

.play-detail:hover .play-detail--pp {
  background-color: hsl(var(--hsl-b2));
}

.play-detail:hover .play-detail--pp:before {
  background-color: hsl(var(--hsl-b1));
}

.play-detail--pp {
  @apply text-base relative font-semibold flex items-center justify-center h-full w-28 rounded-r-lg;
  color: hsl(var(--hsl-h1));
  background-color: hsl(var(--hsl-b3));
}

.play-detail--pp:before {
  content: "";
  z-index: 10;
  width: 10px;
  height: 100%;
  position: absolute;
  left: -1px;
  top: 0;
  background-color: hsl(var(--hsl-b2));
  -webkit-clip-path: polygon(0 0,100% 50%,0 100%);
  clip-path: polygon(0 0,100% 50%,0 100%);
}


.play-link {
  @apply text-white hover:underline hover:text-white;
}

.accuracy {
  color: #fc2;
}

.difficulty {
  color: #ea0;
}

.play-time {
  color: hsl(var(--hsl-f1));
}
</style>