<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="border-b border-ink/10 bg-cream/80 backdrop-blur sticky top-0 z-10">
      <div class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <NuxtLink to="/" class="font-serif text-2xl no-underline text-ink">
          editava
        </NuxtLink>
        <nav class="text-sm space-x-6">
          <NuxtLink to="/" class="no-underline hover:underline">Personas</NuxtLink>
          <NuxtLink to="/blog" class="no-underline hover:underline">Blog</NuxtLink>
          <a href="https://www.coreprose.com" class="no-underline hover:underline text-ink-muted">
            CoreProse ↗
          </a>
        </nav>
      </div>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="border-t border-ink/10 mt-20 py-10 text-sm text-ink-muted">
      <div class="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p class="font-serif text-lg text-ink mb-2">editava</p>
          <p>An editorial AI personas studio.</p>
          <p class="mt-2">Powered by <a href="https://www.coreprose.com">CoreProse Editorial Intelligence</a>.</p>
        </div>
        <div>
          <p class="font-medium mb-2 text-ink">Personas</p>
          <ul class="space-y-1">
            <li><NuxtLink to="/personas/ada">Ada — AI engineering</NuxtLink></li>
            <li><NuxtLink to="/personas/marek">Marek — AI critical reading</NuxtLink></li>
            <li><NuxtLink to="/personas/jules">Jules — Tech industry</NuxtLink></li>
            <li><NuxtLink to="/personas/sven">Sven — Crypto cycles</NuxtLink></li>
          </ul>
        </div>
        <div>
          <p class="font-medium mb-2 text-ink">Repos</p>
          <ul class="space-y-1">
            <li><a href="https://github.com/Olivier-Delafosse/editava-personas">editava-personas ↗</a></li>
            <li><a href="https://github.com/Shad107/ed-pulse-personas">ed-pulse-personas ↗</a></li>
            <li><a href="https://github.com/Olivier-Delafosse/personas-site">personas-site ↗</a></li>
          </ul>
        </div>
      </div>
      <p class="max-w-5xl mx-auto px-6 mt-8 text-xs">© {{ year }} editava · MIT licensed</p>
    </footer>
  </div>
</template>
