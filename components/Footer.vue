<template>
  <footer>
    <span>Unofficial osu! related website made by <a href="https://osu.ppy.sh/users/4089441" target="_blank" class="author">Kyzoid</a></span>
  </footer>
</template>

<style lang="postcss" scoped>
footer {
  @apply flex items-center justify-center text-xs h-8 absolute bottom-0 w-full;
  background-color: hsl(var(--hsl-b5));
  color: hsl(var(--hsl-f1));
}

.author {
  @apply hover:underline;
  color: hsl(var(--hsl-l2));
}
</style>