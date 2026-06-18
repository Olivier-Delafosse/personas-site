<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(`blog-${route.path}`, () =>
  queryContent(route.path).findOne(),
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

// Hide posts dated in the future (drafts of the editorial calendar
// that shouldn't appear as published before their date).
if (post.value.date) {
  const postMs = new Date(post.value.date as string | number | Date).getTime()
  if (postMs > Date.now()) {
    throw createError({ statusCode: 404, statusMessage: 'Post not yet published', fatal: true })
  }
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
  ogTitle: post.value.title,
  ogDescription: post.value.description,
})
</script>

<template>
  <article v-if="post" class="max-w-3xl mx-auto px-6 py-12 md:py-16">
    <NuxtLink to="/blog" class="inline-flex items-center gap-1.5 text-sm no-underline text-ink-500 hover:text-ink">
      <Icon name="arrow" class="h-4 w-4 rotate-180" />
      All essays
    </NuxtLink>

    <header class="mt-6 mb-10 pb-8 border-b border-ink/8">
      <div class="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-wider text-ink-400">
        <Icon name="book" class="h-3.5 w-3.5" />
        <time>{{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</time>
        <span class="text-ink-200">·</span>
        <span>Essay</span>
      </div>
      <h1 class="font-serif text-4xl md:text-5xl text-ink leading-tight mb-4">
        {{ post.title }}
      </h1>
      <p v-if="post.description" class="text-lg text-ink-500 leading-relaxed">
        {{ post.description }}
      </p>
    </header>

    <div class="prose-editorial">
      <ContentRenderer :value="post" />
    </div>
  </article>
</template>
