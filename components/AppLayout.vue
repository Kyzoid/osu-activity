<template>
  <div class="min-h-full relative">
    <Header />
    <main class="body container mx-auto lg:w-3/5 mt-6 pb-6">
      <div class="shadow">
        <div class="title">
          <div class="flex items-center">
            <img :src="iconSrc" width="30" />
            <div class="ml-4 flex flex-col">
              <span>{{ title }}</span>
              <span class="text-xs">{{ description }}</span>
            </div>
          </div>
        </div>

        <div v-if="loading" class="loader flex flex-col justify-center items-center">
          <LoaderTaiko />
          <span>Chargement...</span>
        </div>

        <slot v-else />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    iconSrc: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  computed: {
    loading(): boolean {
      return this.$store.state.loading;
    }
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
})
</script>

<style lang="postcss" scoped>
main {
  transform: translateY(3rem);

  &.body a, footer a {
  color: hsl(var(--hsl-l2));
  transition: color 80ms linear;
}

  &.body a:hover, footer a:hover {
    color: hsl(var(--hsl-l1));
    transition: color 80ms linear;
    text-decoration: underline;
  }
}

.title {
  @apply px-10 py-3;
  background-color: hsl(var(--hsl-d4));
}

.loader {
  @apply bg-no-repeat bg-contain bg-bottom;
  min-height: 80vh;
  background-color: hsl(var(--hsl-b5));
  background-image: url('/icons/page-extra-footer.png');

  & span {
    margin-top: -1.05rem;
  }
}
</style>