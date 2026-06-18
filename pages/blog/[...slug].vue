<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(`blog-${route.path}`, () =>
  queryContent(route.path).findOne(),
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
  ogTitle: post.value.title,
  ogDescription: post.value.description,
})
</script>

<template>
  <article v-if="post" class="max-w-3xl mx-auto px-6 py-16">
    <NuxtLink to="/blog" class="text-sm no-underline text-ink-muted hover:underline">
      ← All posts
    </NuxtLink>

    <header class="mt-8 mb-8">
      <p class="text-sm text-ink-muted mb-2">
        {{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
      </p>
      <h1 class="font-serif text-4xl text-ink leading-tight">{{ post.title }}</h1>
      <p v-if="post.description" class="text-lg text-ink-soft mt-4">{{ post.description }}</p>
    </header>

    <div class="prose-editorial">
      <ContentRenderer :value="post" />
    </div>
  </article>
</template>
