<script setup lang="ts">
import { defineProps } from 'vue';
defineProps<{
  show: boolean
}>()

</script>

<template>
  <!-- Render inside our `<div id="modals"></div>` in index.html -->
  <Teleport to="#modals">
    <!-- Show / hide the modal -->
    <div v-if="show">
      <!-- The backdrop -->
      <div class="fixed inset-0 bg-gray-900 opacity-40"></div>

      <!-- Where the actual content goes -->
      <div class="fixed inset-0 flex items-center justify-center">
        <div class="bg-white text-black shadow-lg w-4/5 h-4/5 overflow-scroll px-4">
          <slot name="header"></slot>
          <slot name="content"></slot>
          <footer class="flex items-center justify-between sticky bg-white h-18 bottom-0 mt-3 z-10">

            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    </div>
  </Teleport>
</template>

