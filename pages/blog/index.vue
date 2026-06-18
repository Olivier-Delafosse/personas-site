<script setup lang="ts">
const nowMs = Date.now()
const { data: posts } = await useAsyncData('blog-index', async () => {
  const all = await queryContent('/blog').sort({ date: -1 }).find()
  return all.filter((p) => {
    if (!p.date) return true
    const postMs = new Date(p.date as string | number | Date).getTime()
    return postMs <= nowMs
  })
})

useSeoMeta({
  title: 'Blog',
  description: 'Notes from editava on editorial AI persona design, knowledge grounding, and the things that go wrong when you try to keep an AI coherent over time.',
})
</script>

<template>
  <section class="max-w-3xl mx-auto px-6 py-16">
    <div class="mb-12">
      <span class="pill-accent mb-4">
        <Icon name="book" class="h-3 w-3" />
        Essays
      </span>
      <h1 class="font-serif text-5xl text-ink mt-3 mb-3">Field notes</h1>
      <p class="text-ink-500 leading-relaxed max-w-2xl">
        On persona design, knowledge grounding, and what we learn building this.
        Bi-monthly.
      </p>
    </div>

    <ul v-if="posts?.length" class="space-y-2">
      <li
        v-for="post in posts"
        :key="post._path"
      >
        <NuxtLink
          :to="post._path"
          class="block group rounded-xl border border-ink/8 bg-white p-6 hover:shadow-soft hover:border-ink/15 transition no-underline"
        >
          <div class="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-ink-400">
            <time>{{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) }}</time>
            <span class="text-ink-200">·</span>
            <span>Essay</span>
          </div>
          <h2 class="font-serif text-2xl text-ink group-hover:text-accent transition-colors mb-2">
            {{ post.title }}
          </h2>
          <p v-if="post.description" class="text-ink-500 leading-relaxed mb-3">
            {{ post.description }}
          </p>
          <span class="text-sm font-medium text-accent inline-flex items-center gap-1">
            Read essay
            <Icon name="arrow" class="h-3.5 w-3.5 transform transition-transform group-hover:translate-x-0.5" />
          </span>
        </NuxtLink>
      </li>
    </ul>

    <div v-else class="surface p-8 text-center text-ink-400 italic">
      No posts yet. First one drops shortly.
    </div>
  </section>
</template>
