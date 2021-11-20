<template>
  <footer>
    <p>This website is not affiliated with <a href="https://osu.ppy.sh/" target="_blank">osu.ppy.sh</a>.</p>
  </footer>
</template>

<style lang="postcss" scoped>
footer {
  @apply flex items-center justify-center text-xs h-8 absolute bottom-0 w-full;
  background-color: hsl(var(--hsl-b5));
  color: hsl(var(--hsl-f1));
}
</style>