<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-index', () =>
  queryContent('/blog').sort({ date: -1 }).find(),
)

useSeoMeta({
  title: 'Blog',
  description: 'Notes from editava on editorial AI persona design, knowledge grounding, and the things that go wrong when you try to keep an AI coherent over time.',
})
</script>

<template>
  <section class="max-w-3xl mx-auto px-6 py-16">
    <h1 class="font-serif text-4xl text-ink mb-4">Blog</h1>
    <p class="text-ink-soft mb-12">
      Notes on persona design, knowledge grounding, and what we learn building this.
      Bi-monthly.
    </p>

    <ul v-if="posts?.length" class="space-y-8">
      <li
        v-for="post in posts"
        :key="post._path"
        class="border-b border-ink/10 pb-8 last:border-b-0"
      >
        <NuxtLink :to="post._path" class="no-underline block group">
          <p class="text-sm text-ink-muted mb-1">
            {{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
          </p>
          <h2 class="font-serif text-2xl text-ink group-hover:underline">{{ post.title }}</h2>
          <p v-if="post.description" class="text-ink-soft mt-2">{{ post.description }}</p>
        </NuxtLink>
      </li>
    </ul>

    <p v-else class="text-ink-muted italic">
      No posts yet. First one drops shortly.
    </p>
  </section>
</template>
