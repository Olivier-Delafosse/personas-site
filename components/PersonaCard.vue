<script setup lang="ts">
import type { Persona } from '~/types/persona'

defineProps<{ persona: Persona }>()
</script>

<template>
  <NuxtLink
    :to="`/personas/${persona.slug}`"
    class="block border border-ink/10 rounded-lg p-6 bg-white hover:shadow-md transition-shadow no-underline"
  >
    <div class="flex gap-5 items-start">
      <img
        :src="`/avatars/${persona.slug}.png`"
        :alt="`${persona.name} avatar`"
        class="w-20 h-20 rounded-lg object-cover flex-shrink-0 border border-ink/10"
      />
      <div class="flex-1 min-w-0">
        <div class="flex items-baseline gap-2 mb-1">
          <h3 class="font-serif text-2xl text-ink">{{ persona.name }}</h3>
          <span class="text-xl">{{ persona.emoji }}</span>
        </div>
        <p class="text-sm text-ink-muted mb-2">{{ persona.role }}</p>
        <p class="text-sm leading-relaxed text-ink-soft">{{ persona.tagline }}</p>
      </div>
    </div>
  </NuxtLink>
</template>
