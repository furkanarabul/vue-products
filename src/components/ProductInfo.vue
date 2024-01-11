<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  productName: {
    type: String,
    required: true
  },
  productPrice: {
    type: Number,
    required: true
  }
})
</script>

<template>
    <div class="flex flex-col w-full">
        <span class="text-sm font-extrabold	">Brand New</span>
        <span class="mt-4 font-medium">{{ productName }}</span>
        <div class="flex justify-between items-end">
            <span class="mt-5 font-bold">{{ productPrice }} EUR</span>
            <span>
                <img height="75px" width="75px" src="https://upload.wikimedia.org/wikipedia/commons/a/a4/S.Oliver_Logo_2010.svg" />
            </span>
        </div>
    </div>
</template>
