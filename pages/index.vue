<script setup lang="ts">
const { personas } = usePersonas()
useSeoMeta({
  title: 'Editorial AI personas with verified sources',
  description: 'editava is a small collection of editorial AI personas — patient teachers, sharp critics, structural analysts, cycle-aware observers — grounded on a verified knowledge base of AI, tech, and crypto news.',
})
</script>

<template>
  <div>
    <section class="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <h1 class="font-serif text-4xl md:text-5xl leading-tight text-ink mb-6">
        Editorial AI personas<br />
        <span class="text-ink-muted">with verified sources.</span>
      </h1>
      <p class="text-lg leading-relaxed text-ink-soft mb-6">
        editava is a small collection of editorial AI personas — patient teachers,
        sharp critics, structural analysts, cycle-aware observers.
      </p>
      <p class="text-lg leading-relaxed text-ink-soft mb-6">
        Each persona has its own voice and its own boundaries, and shares a single
        backend: a verified knowledge base of AI, tech and crypto news with sources
        and dates, powered by
        <a href="https://www.coreprose.com">CoreProse Editorial Intelligence</a>.
      </p>
      <p class="text-lg leading-relaxed text-ink-soft">
        Built for the
        <a href="https://github.com/acnlabs/OpenPersona">OpenPersona</a>
        framework. Compatible with OpenClaw, ClawHub, Claude Code, Cursor, and
        37+ agents.
      </p>
    </section>

    <section class="max-w-5xl mx-auto px-6 pb-24">
      <h2 class="font-serif text-2xl text-ink mb-8">Meet the personas</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <PersonaCard v-for="p in personas" :key="p.slug" :persona="p" />
      </div>
    </section>

    <section class="max-w-3xl mx-auto px-6 pb-24">
      <h2 class="font-serif text-2xl text-ink mb-6">Why grounded personas matter</h2>
      <div class="prose-editorial">
        <p>
          Most AI personas drift. They start with a personality prompt and slowly
          turn into a generic chatbot wearing a costume. The interesting work in
          2026 is not making them more impressive — it's keeping them coherent
          over hundreds of interactions, faithful to a knowledge base, and honest
          about the limits of what they know.
        </p>
        <p>
          editava personas are designed around three rails:
          <strong>immutable traits</strong> that they cannot drift past,
          <strong>boundaries</strong> they will not cross (no medical advice, no
          price predictions, no inventing benchmarks), and a
          <strong>verified knowledge base</strong> that grounds every claim in a
          real source.
        </p>
        <p>
          We won't pretend that's a solved problem. We share what we learn on the
          <NuxtLink to="/blog">blog</NuxtLink>.
        </p>
      </div>
    </section>
  </div>
</template>
