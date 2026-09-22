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
    <p class="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-sky-400 sm:text-sm sm:tracking-[0.22em]">
      {{ props.eyebrow }}
    </p>
    <h2 class="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
      {{ props.title }}
    </h2>
    <p v-if="props.description" class="mt-4 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
      {{ props.description }}
    </p>
  </div>
</template>
