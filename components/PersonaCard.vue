<script setup lang="ts">
import type { Persona } from '~/types/persona'

const props = defineProps<{ persona: Persona }>()
const accent = usePersonaAccent(props.persona.slug)

const stripStyle = computed(() => ({
  background: `linear-gradient(90deg, ${accent.hex} 0%, ${accent.hex}00 100%)`,
}))
const ringStyle = computed(() => ({
  boxShadow: `0 0 0 2px ${accent.ring}`,
}))
const dotStyle = computed(() => ({
  background: accent.hex,
}))
const tagStyle = computed(() => ({
  borderColor: accent.border,
  background: accent.bg,
  color: accent.text,
}))
</script>

<template>
  <NuxtLink
    :to="`/personas/${persona.slug}`"
    class="group relative block overflow-hidden rounded-xl border border-ink/8 bg-white shadow-soft hover:shadow-lift transition-all no-underline"
  >
    <div class="h-1 w-full" :style="stripStyle" />

    <div class="p-6">
      <div class="flex items-start gap-4">
        <div class="relative flex-shrink-0">
          <img
            :src="`/avatars/${persona.slug}.png`"
            :alt="`${persona.name} avatar`"
            class="w-20 h-20 rounded-xl object-cover border border-ink/10"
            :style="ringStyle"
          />
          <span
            class="absolute -bottom-1 -right-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white border border-ink/10 text-base shadow-soft"
            aria-hidden="true"
          >
            {{ persona.emoji }}
          </span>
        </div>

        <div class="flex-1 min-w-0">
          <div class="flex items-baseline justify-between gap-2 mb-0.5">
            <h3 class="font-serif text-2xl text-ink leading-tight">{{ persona.name }}</h3>
            <span
              class="text-[10px] uppercase tracking-wider font-mono text-ink-400"
            >
              {{ persona.publisher }}
            </span>
          </div>
          <p class="text-sm font-medium text-ink-700 mb-2 flex items-center gap-1.5">
            <span class="inline-block h-1.5 w-1.5 rounded-full" :style="dotStyle" />
            {{ persona.role }}
          </p>
          <p class="text-sm leading-relaxed text-ink-500">{{ persona.tagline }}</p>
        </div>
      </div>

      <div class="mt-5 flex flex-wrap gap-1.5">
        <span
          v-for="trait in persona.voice.slice(0, 3)"
          :key="trait"
          class="inline-flex items-center rounded-full border px-2 py-0.5 text-[11px]"
          :style="tagStyle"
        >
          {{ trait }}
        </span>
      </div>

      <div class="mt-5 flex items-center justify-between text-xs text-ink-400">
        <span>View persona</span>
        <Icon
          name="arrow"
          class="h-4 w-4 transform transition-transform group-hover:translate-x-0.5"
        />
      </div>
    </div>
  </NuxtLink>
</template>
