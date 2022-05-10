<template>
  <header>
    <div class="flex items-center container mx-auto w-3/5 h-full">
      <NuxtLink to="/" class="logo-container">
        <div class="logo logo-bg"></div>
        <div class="logo logo-white"></div>
      </NuxtLink>
      <div class="text-sm ml-4">
        <NuxtLink to="/" class="p-2 hover:underline">home</NuxtLink>
        <!-- <NuxtLink to="/rankings/mania/performance" class="p-2 hover:underline">ranking</NuxtLink>
        <NuxtLink to="/rankings/mania/latest-performances" class="p-2 hover:underline">latest performances</NuxtLink> -->
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {},
  data() {
    return {};
  },
  computed: {
  },
  async created() {
    await this.signInUser();
  },
  methods: {
    async signInUser() {
      try {
        await this.$fire.auth.signInAnonymously();
      } catch (e) {
        console.log(e)
      }
    },
  },
});
</script>

<style lang="postcss" scoped>
header {
  @apply h-12 mb-6 flex items-center;
  background-color: hsl(var(--hsl-h2));
}

.logo-container {
  @apply relative h-10 w-10;
}

.logo-container:hover .logo-bg,
.logo-container:hover .logo-white {
  @apply opacity-100 transition duration-100 transform scale-110;
}

.logo {
  @apply absolute left-0 top-0 h-full w-full bg-contain bg-no-repeat transition duration-100;
}

.logo-white {
  background-image: url("/icons/osu-logo-white.svg");
}

.logo-bg {
  @apply opacity-0;
  background-image: url("/icons/osu-logo-triangles.svg");
}
</style>