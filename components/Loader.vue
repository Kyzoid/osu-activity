<template>
  <div class="ring-loader">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="postcss" scoped>


.ring-loader {
  @apply rounded-full;
  border: 0.2rem solid white;
  border-left-color: transparent;
  width: 1rem;
  height: 1rem;
  animation: rotate 1s infinite linear;
}

@keyframes rotate {
  0% {
    animation-timing-function: cubic-bezier(0.3333,0.3333,0.6667,0.6667);
    transform: rotate(0);
  }
  100% {
      transform: rotate(360deg);
  }
}
</style>