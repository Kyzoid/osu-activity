<template>
  <div class="show-more flex items-center mt-1">
    <img class="opacity-50 mt-0.5" width="14" src="/icons/expand-more.svg" />
    <span class="select-none mx-1" title="c un faux bouton dsl">Voir plus</span>
    <img class="opacity-50 mt-0.5" width="14" src="/icons/expand-more.svg" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="postcss" scoped>
.show-more {
  @apply rounded-full px-4 py-1 shadow text-xs cursor-pointer uppercase relative;
  background-color: hsl(var(--hsl-b2));
}

.show-more:hover {
  background-color: hsl(var(--hsl-b1));
}
</style>