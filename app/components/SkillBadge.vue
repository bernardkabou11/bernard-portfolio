<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span class="inline-flex items-center rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1.5 text-sm font-medium text-sky-200 backdrop-blur-sm transition duration-200 hover:border-sky-400/50 hover:bg-sky-500/15">
    {{ label }}
  </span>
</template>
