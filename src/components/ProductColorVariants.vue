<template>
    <div class="mt-10 border-y-2">
        <span class="text-sm mt-10">Color:</span>
        <span class="ml-1 text-sm font-bold">Blue</span>
    </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  productColorVariants: {
    type: Object,
    required: true
  }
})
</script>