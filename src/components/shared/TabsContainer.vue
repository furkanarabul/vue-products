<script setup lang="ts">
import { ref, provide, Ref } from "vue";

interface Tab {
  hash: string;
  title: string;
}

interface TabsContainerContext {
  addTab: (tab: Tab) => void;
  activeTabHash: Ref<string>;
}

const activeTabHash = ref<string>("");
const tabs = ref<Tab[]>([]);

provide("tabsContainerContext", {
  addTab: (tab: Tab) => {
    const count = tabs.value.push(tab);

    if (count === 1) {
      activeTabHash.value = tab.hash;
    }
  },
  activeTabHash,
} as TabsContainerContext);
</script>

<template>
  <div class="mt-10 bg-gray-100 min-h-64">
    <ul class="flex flex-nowrap justify-between sm:flex-wrap">
      <li
        class="w-full font-extrabold text-center py-4 text-sm cursor-pointer hover:bg-gray-200 transition duration-300 ease-in-out text-gray-700"
        :class="{
          'border-b-4 border-gray-700 transition duration-300 ease-in-out sm:bg-gray-200':
            tab.hash === activeTabHash,
        }"
        v-for="tab in tabs"
        :key="tab.title"
        @click="activeTabHash = tab.hash"
      >
        {{ tab.title }}
      </li>
    </ul>
    <slot />
  </div>
</template>
