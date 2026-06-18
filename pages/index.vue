<script setup lang="ts">
const { personas } = usePersonas()
useSeoMeta({
  title: 'Editorial AI personas with verified sources',
  description: 'editava is a small collection of editorial AI personas — patient teachers, sharp critics, structural analysts, cycle-aware observers — grounded on a verified knowledge base of AI, tech, and crypto news.',
})

const rails = [
  {
    icon: 'shield' as const,
    title: 'Immutable traits',
    body: 'A persona\'s voice and values are fixed. The model cannot drift past them, even after hundreds of turns.',
  },
  {
    icon: 'anchor' as const,
    title: 'Hard boundaries',
    body: 'No price predictions. No medical advice. No invented benchmarks. The persona declines, with a redirect.',
  },
  {
    icon: 'eye' as const,
    title: 'Verified KB grounding',
    body: 'Every factual claim runs through CoreProse Editorial Intelligence — sources, dates, and citations.',
  },
]

const stats = [
  { value: '4', label: 'personas' },
  { value: '6', label: 'essays' },
  { value: '1', label: 'verified KB' },
  { value: '37+', label: 'compatible agents' },
]
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 grid-dots opacity-40 pointer-events-none" aria-hidden="true" />
      <div class="relative max-w-5xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 mb-6">
            <span class="pill-accent">
              <Icon name="spark" class="h-3 w-3" />
              v1.0 · Editorial AI Studio
            </span>
            <span class="pill">
              <span class="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-soft" />
              Live KB
            </span>
          </div>

          <h1 class="font-serif text-4xl md:text-6xl leading-[1.05] text-ink mb-6">
            Editorial AI personas<br />
            <span class="gradient-text">with verified sources.</span>
          </h1>

          <p class="text-lg md:text-xl leading-relaxed text-ink-700 mb-4 max-w-2xl">
            A small collection of editorial AI personas — patient teachers, sharp
            critics, structural analysts, cycle-aware observers. Each one keeps
            its voice and grounds every claim in a verified knowledge base.
          </p>

          <p class="text-sm leading-relaxed text-ink-500 mb-8 max-w-2xl">
            Built on
            <a href="https://github.com/acnlabs/OpenPersona" class="font-medium">OpenPersona</a>.
            Powered by
            <a href="https://www.coreprose.com" class="font-medium">CoreProse Editorial Intelligence</a>.
            Compatible with OpenClaw, ClawHub, Claude Code, Cursor, and 37+ agents.
          </p>

          <div class="flex flex-wrap items-center gap-3">
            <a href="#personas" class="btn-primary">
              Browse personas
              <Icon name="arrow" class="h-4 w-4" />
            </a>
            <NuxtLink to="/blog" class="btn-ghost">
              <Icon name="book" class="h-4 w-4" />
              Read the essays
            </NuxtLink>
          </div>

          <div class="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            <div v-for="s in stats" :key="s.label">
              <div class="font-serif text-3xl text-ink">{{ s.value }}</div>
              <div class="text-xs uppercase tracking-wider text-ink-400 mt-0.5">
                {{ s.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PERSONAS GRID -->
    <section id="personas" class="max-w-5xl mx-auto px-6 pb-20">
      <div class="flex items-baseline justify-between mb-8">
        <h2 class="font-serif text-3xl text-ink">Meet the personas</h2>
        <span class="text-xs uppercase tracking-wider text-ink-400 font-mono">
          {{ personas.length }} packs · MIT
        </span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <PersonaCard v-for="p in personas" :key="p.slug" :persona="p" />
      </div>
    </section>

    <!-- WHY -->
    <section class="bg-white border-y border-ink/8">
      <div class="max-w-5xl mx-auto px-6 py-20">
        <div class="max-w-3xl mb-12">
          <span class="pill mb-4">
            <Icon name="bolt" class="h-3 w-3" />
            Design philosophy
          </span>
          <h2 class="font-serif text-3xl md:text-4xl text-ink mt-3 mb-4">
            Why grounded personas matter
          </h2>
          <p class="text-ink-500 leading-relaxed">
            Most AI personas drift. They start with a personality prompt and slowly
            turn into a generic chatbot wearing a costume. The interesting work in
            2026 isn't making them more impressive — it's keeping them coherent
            over hundreds of interactions, faithful to a knowledge base, and honest
            about the limits of what they know.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div
            v-for="rail in rails"
            :key="rail.title"
            class="surface p-6 hover:shadow-lift transition-shadow"
          >
            <div class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent mb-4">
              <Icon :name="rail.icon" class="h-5 w-5" />
            </div>
            <h3 class="font-serif text-xl text-ink mb-2">{{ rail.title }}</h3>
            <p class="text-sm leading-relaxed text-ink-500">{{ rail.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- KB CALLOUT -->
    <section class="max-w-5xl mx-auto px-6 py-20">
      <div class="surface relative overflow-hidden p-8 md:p-10">
        <div class="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-accent/8 blur-3xl pointer-events-none" />
        <div class="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div class="md:col-span-2">
            <div class="inline-flex items-center gap-2 mb-3">
              <Icon name="feed" class="h-4 w-4 text-accent" />
              <span class="text-xs uppercase tracking-wider text-accent font-medium">
                The shared backend
              </span>
            </div>
            <h3 class="font-serif text-2xl md:text-3xl text-ink mb-3">
              One verified KB. Four voices.
            </h3>
            <p class="text-ink-500 leading-relaxed mb-4">
              Every persona shares a single source-of-truth — the CoreProse
              Editorial Intelligence KB. Papers, products, incidents, market events,
              all dated and cited. The persona builds the read; the KB keeps it honest.
            </p>
            <NuxtLink to="/blog/2026-06-why-we-built-editava" class="text-sm font-medium inline-flex items-center gap-1">
              Why we built editava
              <Icon name="arrow" class="h-4 w-4" />
            </NuxtLink>
          </div>
          <div class="font-mono text-xs bg-ink rounded-lg p-4 text-bone overflow-x-auto">
            <div class="flex gap-1.5 mb-3">
              <span class="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span class="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
              <span class="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
            </div>
            <span class="text-ink-300">GET</span> /api/public/kb-feed<br />
            <span class="text-ink-300">?</span>niche=ai-engineering<br />
            <span class="text-ink-300">&amp;</span>q=mistral release
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
