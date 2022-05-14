<template>
  <div v-if="plays.length" class="flex flex-col items-center justify-center w-full">
    <div v-for="play of plays" :key="play.beatmapId" class="w-full">
      <PlayDetail class="my-0.5" :play="mockPlay" />
    </div>
    <ShowMoreButton />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Play } from '~/types';

export default Vue.extend({
  props: {
    plays: {
      type: [] as Vue.PropType<Play[]>,
      default: [],
    },
  },
  data() {
    return {
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
  }
});
</script>

<style lang="postcss" scoped>
</style>