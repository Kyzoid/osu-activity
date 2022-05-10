<template>
  <footer>
    <div class="container mx-auto lg:w-3/5 px-2 lg:px-0 flex items-center justify-between">
      <p>This website is not affiliated with <a href="https://osu.ppy.sh/" target="_blank">osu.ppy.sh</a>.</p>
      <a href="https://github.com/Kyzoid/osu-activity">Code source</a>
    </div>
  </footer>
</template>

<style lang="postcss" scoped>
footer {
  @apply flex items-center justify-center text-xs h-10 absolute bottom-0 w-full;
  background-color: hsl(var(--hsl-b5));
  color: hsl(var(--hsl-f1));
}
</style>