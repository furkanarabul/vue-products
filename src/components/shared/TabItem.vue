<script setup lang="ts">
import { defineProps, inject, ref, onBeforeMount, watch, Ref } from "vue";

interface TabsContainerContext {
  addTab: (tab: Tab) => void;
  activeTabHash: Ref<string>;
}

interface Tab {
  title: string;
  hash: string;
}

const tabsContainerContext = inject("tabsContainerContext") as TabsContainerContext;

const props = defineProps(["title"]);

const hash = ref("");
const isActive = ref(false);

onBeforeMount(() => {
  if (tabsContainerContext) {
    hash.value = `#${props.title.toLowerCase().replace(/ /g, "-")}`;

    tabsContainerContext.addTab({
      title: props.title,
      hash: hash.value,
    });
  }
});

watch(tabsContainerContext?.activeTabHash, () => {
  isActive.value = tabsContainerContext?.activeTabHash.value === hash.value;
});
</script>

<template>
  <div class="p-8" v-show="isActive">
    <slot />
  </div>
</template>
