<script setup lang="ts">
interface Props {
  eyebrow: string
  title: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  description: '',
})
</script>

<template>
  <div class="mx-auto max-w-3xl text-center">
    <p class="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-400">
      {{ props.eyebrow }}
    </p>
    <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
      {{ props.title }}
    </h2>
    <p v-if="props.description" class="mt-4 text-base leading-7 text-slate-300">
      {{ props.description }}
    </p>
  </div>
</template>
