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
const accent = usePersonaAccent(slug)

const heroBgStyle = computed(() => ({
  background: `linear-gradient(135deg, ${accent.bg} 0%, transparent 60%)`,
}))
const ringStyle = computed(() => ({
  boxShadow: `0 0 0 2px ${accent.ring}`,
}))
const stripStyle = computed(() => ({
  background: `linear-gradient(90deg, ${accent.hex} 0%, ${accent.hex}00 100%)`,
}))
const traitStyle = computed(() => ({
  borderColor: accent.border,
  background: accent.bg,
  color: accent.text,
}))

useSeoMeta({
  title: `${persona.name}, ${persona.role}`,
  description: persona.tagline,
  ogTitle: `${persona.name}, ${persona.role}`,
  ogDescription: persona.tagline,
  ogImage: `https://personas.coreprose.com/avatars/${persona.slug}.png`,
})
</script>

<template>
  <article class="max-w-3xl mx-auto px-6 py-12 md:py-16">
    <NuxtLink to="/" class="inline-flex items-center gap-1.5 text-sm no-underline text-ink-500 hover:text-ink">
      <Icon name="arrow" class="h-4 w-4 rotate-180" />
      All personas
    </NuxtLink>

    <header
      class="mt-6 relative overflow-hidden rounded-2xl border border-ink/8 bg-white p-6 md:p-8"
      :style="heroBgStyle"
    >
      <div class="absolute inset-x-0 top-0 h-1" :style="stripStyle" />
      <div class="flex flex-col md:flex-row gap-6 md:gap-8 md:items-center">
        <div class="relative flex-shrink-0">
          <img
            :src="`/avatars/${persona.slug}.png`"
            :alt="`${persona.name} avatar`"
            class="w-36 h-36 md:w-44 md:h-44 rounded-2xl object-cover border border-ink/10"
            :style="ringStyle"
          />
          <span
            class="absolute -bottom-2 -right-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white border border-ink/10 text-xl shadow-soft"
            aria-hidden="true"
          >
            {{ persona.emoji }}
          </span>
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex flex-wrap items-center gap-2 mb-3">
            <span class="pill">
              <span class="h-1.5 w-1.5 rounded-full" :style="{ background: accent.hex }" />
              {{ persona.publisher }}
            </span>
            <span class="pill">{{ persona.niche }}</span>
          </div>
          <h1 class="font-serif text-4xl md:text-5xl text-ink leading-tight mb-2">
            {{ persona.name }}
          </h1>
          <p class="text-ink-700 mb-3">{{ persona.role }}</p>
          <p class="text-lg leading-relaxed text-ink-500">{{ persona.tagline }}</p>
        </div>
      </div>
    </header>

    <section class="prose-editorial my-12">
      <h2>Background</h2>
      <p>{{ persona.bio }}</p>
    </section>

    <section class="mb-12">
      <h2 class="font-serif text-2xl text-ink mb-4 flex items-center gap-2">
        <Icon name="spark" class="h-5 w-5 text-accent" />
        Voice signature
      </h2>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <li
          v-for="trait in persona.voice"
          :key="trait"
          class="rounded-lg border px-4 py-3 text-sm font-medium"
          :style="traitStyle"
        >
          {{ trait }}
        </li>
      </ul>
    </section>

    <section class="mb-12">
      <h2 class="font-serif text-2xl text-ink mb-4 flex items-center gap-2">
        <Icon name="bolt" class="h-5 w-5 text-accent" />
        Install
      </h2>
      <p class="text-ink-500 mb-3">
        {{ persona.name }} is an OpenPersona-compatible pack. Install from ClawHub:
      </p>
      <div class="rounded-xl bg-ink overflow-hidden border border-ink/20">
        <div class="flex items-center gap-1.5 px-4 py-3 border-b border-white/8">
          <span class="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span class="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span class="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span class="ml-3 text-[11px] uppercase tracking-wider font-mono text-ink-300">
            shell
          </span>
        </div>
        <pre class="text-bone font-mono text-sm p-4 overflow-x-auto"><code>$ {{ persona.clawhubInstall }}</code></pre>
      </div>
      <p class="text-sm text-ink-400 mt-3 inline-flex items-center gap-1.5">
        <Icon name="github" class="h-3.5 w-3.5" />
        <a :href="persona.repo" class="no-underline hover:underline">{{ persona.repo }}</a>
      </p>
    </section>

    <section class="rounded-xl border border-ink/8 bg-white p-6 text-sm leading-relaxed text-ink-500">
      <h2 class="font-serif text-lg text-ink mb-2 flex items-center gap-2">
        <Icon name="shield" class="h-4 w-4 text-ink-400" />
        Disclosure
      </h2>
      <p class="mb-3">
        {{ persona.name }} is an AI-generated editorial persona, disclosed as such
        per AI Act 2026 article 50. The persona does not impersonate any specific
        real person. The avatar is an AI-generated illustration.
      </p>
      <p>
        The persona's <code class="bg-bone px-1.5 py-0.5 rounded text-xs">editorial-feed</code>
        skill connects to a verified knowledge base ,
        {{ persona.publisher === 'editava' ? 'for editava personas, that backend is' : 'for this persona, the backend is' }}
        <a href="https://www.coreprose.com">CoreProse Editorial Intelligence</a>.
        Without that grounding, persona answers would be ungrounded generation.
      </p>
    </section>
  </article>
</template>
