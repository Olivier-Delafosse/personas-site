<script setup lang="ts">
import { isPersonaSlug } from '~/types/persona'

const route = useRoute()
const slugParam = route.params.slug
const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam

if (!slug || !isPersonaSlug(slug)) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Persona not found',
    fatal: true,
  })
}

const { getBySlugStrict } = usePersonas()
const persona = getBySlugStrict(slug)

useSeoMeta({
  title: `${persona.name} — ${persona.role}`,
  description: persona.tagline,
  ogTitle: `${persona.name} — ${persona.role}`,
  ogDescription: persona.tagline,
  ogImage: `https://personas.coreprose.com/avatars/${persona.slug}.png`,
})
</script>

<template>
  <article class="max-w-3xl mx-auto px-6 py-16">
    <NuxtLink to="/" class="text-sm no-underline text-ink-muted hover:underline">
      ← All personas
    </NuxtLink>

    <header class="mt-8 mb-10 flex flex-col md:flex-row gap-8 md:items-end">
      <img
        :src="`/avatars/${persona.slug}.png`"
        :alt="`${persona.name} avatar`"
        class="w-40 h-40 md:w-48 md:h-48 rounded-lg object-cover border border-ink/10"
      />
      <div>
        <div class="flex items-baseline gap-3 mb-2">
          <h1 class="font-serif text-4xl text-ink">{{ persona.name }}</h1>
          <span class="text-3xl">{{ persona.emoji }}</span>
        </div>
        <p class="text-ink-muted mb-2">{{ persona.role }} · {{ persona.niche }}</p>
        <p class="text-lg leading-relaxed text-ink-soft">{{ persona.tagline }}</p>
      </div>
    </header>

    <section class="prose-editorial mb-12">
      <h2>Background</h2>
      <p>{{ persona.bio }}</p>
    </section>

    <section class="mb-12">
      <h2 class="font-serif text-2xl text-ink mb-4">Voice signature</h2>
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <li
          v-for="trait in persona.voice"
          :key="trait"
          class="border border-ink/10 rounded-md px-4 py-3 bg-white text-ink-soft"
        >
          <span class="font-medium text-ink">{{ trait }}</span>
        </li>
      </ul>
    </section>

    <section class="mb-12">
      <h2 class="font-serif text-2xl text-ink mb-4">Install</h2>
      <p class="text-ink-soft mb-3">
        {{ persona.name }} is an OpenPersona-compatible pack. Install from
        ClawHub with:
      </p>
      <pre class="bg-ink text-cream rounded-md p-4 text-sm overflow-x-auto"><code>{{ persona.clawhubInstall }}</code></pre>
      <p class="text-sm text-ink-muted mt-3">
        Source: <a :href="persona.repo">{{ persona.repo }}</a>
      </p>
    </section>

    <section class="prose-editorial">
      <h2>Disclosure</h2>
      <p>
        {{ persona.name }} is an AI-generated editorial persona, disclosed as such
        per AI Act 2026 article 50. The persona does not impersonate any specific
        real person. The avatar is an AI-generated illustration.
      </p>
      <p>
        The persona's `editorial-feed` skill connects to a verified knowledge base
        — for {{ persona.publisher === 'editava' ? 'editava personas, that backend is' : 'this persona, the backend is' }}
        <a href="https://www.coreprose.com">CoreProse Editorial Intelligence</a>.
        Without that grounding, persona answers would be ungrounded generation.
      </p>
    </section>
  </article>
</template>
