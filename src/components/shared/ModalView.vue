<script setup lang="ts">
import { defineProps, watch } from "vue";
const props = defineProps<{
  show: boolean;
}>();
watch(
  () => props.show,
  (newVal) => {
    if (newVal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
);
</script>

<template>
  <Teleport to="#modals">
    <div v-if="show">
      <div class="fixed inset-0 bg-gray-900 opacity-40"></div>
      <div class="fixed inset-0 flex items-center justify-center">
        <div class="bg-white text-black shadow-lg w-4/5 h-4/5 overflow-scroll grid">
          <slot name="header"></slot>
          <slot name="content"></slot>
          <footer
            class="flex items-center justify-between sticky h-18 bottom-0 mt-3 z-10"
          >
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<style>
footer {
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1), 0 -2px 10px rgba(0, 0, 0, 0.15);
  background: white;
}
</style>
