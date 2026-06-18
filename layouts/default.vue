<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="border-b border-ink/8 bg-bone/80 backdrop-blur sticky top-0 z-10">
      <div class="max-w-5xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <NuxtLink to="/" class="group flex items-center gap-2.5 no-underline">
          <span class="inline-flex h-7 w-7 items-center justify-center rounded-md bg-ink text-bone font-serif text-base leading-none">
            e
          </span>
          <span class="font-serif text-xl text-ink leading-none">editava</span>
          <span class="hidden sm:inline-flex items-center rounded-full border border-ink/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-ink-400">
            v1.0
          </span>
        </NuxtLink>
        <nav class="text-sm flex items-center gap-1 sm:gap-2">
          <NuxtLink
            to="/"
            class="no-underline px-3 py-1.5 rounded-md text-ink-700 hover:bg-white hover:text-ink"
          >
            Personas
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="no-underline px-3 py-1.5 rounded-md text-ink-700 hover:bg-white hover:text-ink"
          >
            Blog
          </NuxtLink>
          <a
            href="https://github.com/Olivier-Delafosse/editava-personas"
            class="no-underline inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-ink-500 hover:bg-white hover:text-ink"
            aria-label="GitHub"
          >
            <Icon name="github" class="h-4 w-4" />
            <span class="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://www.coreprose.com"
            class="no-underline inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-ink-400 hover:text-ink-700"
          >
            CoreProse
            <Icon name="external" class="h-3 w-3" />
          </a>
        </nav>
      </div>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="border-t border-ink/8 mt-20 py-12 bg-white">
      <div class="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div class="md:col-span-2">
          <div class="flex items-center gap-2.5 mb-3">
            <span class="inline-flex h-7 w-7 items-center justify-center rounded-md bg-ink text-bone font-serif text-base leading-none">
              e
            </span>
            <p class="font-serif text-xl text-ink">editava</p>
          </div>
          <p class="text-sm text-ink-500 max-w-sm leading-relaxed mb-4">
            An editorial AI personas studio. Patient teachers, sharp critics,
            structural analysts, cycle-aware observers, all grounded on a verified
            knowledge base.
          </p>
          <div class="flex items-center gap-3">
            <a
              href="https://github.com/Olivier-Delafosse/editava-personas"
              class="inline-flex h-9 w-9 items-center justify-center rounded-md border border-ink/10 text-ink-500 hover:text-ink hover:bg-bone no-underline"
              aria-label="GitHub"
            >
              <Icon name="github" class="h-4 w-4" />
            </a>
            <a
              href="https://www.coreprose.com"
              class="inline-flex items-center gap-1.5 rounded-md border border-ink/10 px-3 h-9 text-xs text-ink-500 hover:text-ink hover:bg-bone no-underline"
            >
              <Icon name="feed" class="h-3.5 w-3.5" />
              Powered by CoreProse
            </a>
          </div>
        </div>

        <div>
          <p class="font-medium mb-3 text-ink text-sm">Personas</p>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/personas/ada" class="no-underline text-ink-500 hover:text-ink inline-flex items-center gap-1.5">🧰 Ada</NuxtLink></li>
            <li><NuxtLink to="/personas/marek" class="no-underline text-ink-500 hover:text-ink inline-flex items-center gap-1.5">🔍 Marek</NuxtLink></li>
            <li><NuxtLink to="/personas/jules" class="no-underline text-ink-500 hover:text-ink inline-flex items-center gap-1.5">📚 Jules</NuxtLink></li>
            <li><NuxtLink to="/personas/sven" class="no-underline text-ink-500 hover:text-ink inline-flex items-center gap-1.5">🪙 Sven</NuxtLink></li>
          </ul>
        </div>

        <div>
          <p class="font-medium mb-3 text-ink text-sm">Repos</p>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="https://github.com/Olivier-Delafosse/editava-personas" class="no-underline text-ink-500 hover:text-ink inline-flex items-center gap-1.5">
                editava-personas
                <Icon name="external" class="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Shad107/ed-pulse-personas" class="no-underline text-ink-500 hover:text-ink inline-flex items-center gap-1.5">
                ed-pulse-personas
                <Icon name="external" class="h-3 w-3" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Olivier-Delafosse/personas-site" class="no-underline text-ink-500 hover:text-ink inline-flex items-center gap-1.5">
                personas-site
                <Icon name="external" class="h-3 w-3" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="max-w-5xl mx-auto px-6 mt-10 pt-6 border-t border-ink/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-ink-400">
        <p>© {{ year }} editava · MIT licensed</p>
        <p class="font-mono">AI-disclosed · EU AI Act 2026 art. 50</p>
      </div>
    </footer>
  </div>
</template>
