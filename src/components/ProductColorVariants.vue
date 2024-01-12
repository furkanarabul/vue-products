<script setup lang="ts">
import { defineProps, ref, onMounted, defineEmits } from "vue";
import { ColorVariant } from "../types";

const props = defineProps({
  productColorVariants: {
    type: Array as () => ColorVariant[],
    required: true,
  },
});
const selectedColor = ref<ColorVariant | null>(null);
const selectedColorName = ref("");
const selectedSize = ref<{ name: string; inStock: boolean } | null>(null);

const emits = defineEmits(["color-click"]);

const onColorClick = (item: ColorVariant) => {
  selectedColor.value = item;
  selectedColorName.value = item.color;
  selectedSize.value = null;
  emits("color-click", item);
};

const onSizeClick = (size: { name: string; inStock: boolean }) => {
  if (size.inStock) {
    selectedSize.value = size;
  }
};

onMounted(() => {
  if (props.productColorVariants.length > 0) {
    const firstColor = props.productColorVariants[0];
    selectedColorName.value = firstColor.color;
    selectedColor.value = { ...firstColor, sizes: firstColor.sizes || [] };
  }
});
</script>

<template>
  <div class="my-5">
    <div class="border-y-2 py-5">
      <span class="text-sm mt-10">Color:</span>
      <span class="text-sm mt-10">{{ selectedColorName }}</span>
      <div>
        <span
          v-for="item in productColorVariants"
          :key="item.id"
          :class="{
            'outline outline-offset-2 outline-1 outline-black':
              selectedColor && selectedColor.color === item.color,
          }"
          class="ml-1 mt-2 text-sm font-bold mr-1 rounded-2xl w-6 h-6 bg-black inline-flex cursor-pointer"
          v-bind:style="{ backgroundColor: item.hexCode }"
          @click="onColorClick(item)"
        >
        </span>
      </div>
    </div>
    <div v-if="selectedColor?.sizes">
      <div>
        <p class="text-sm mt-2">
          <span class="" v-if="selectedSize">
            Size: <b>{{ selectedSize.name }}</b></span
          >
          <span v-else>Select your size</span>
        </p>
      </div>
      <div></div>
      <ul class="flex flex-wrap mt-3">
        <li class="flex mr-2 mt-2" v-for="size in selectedColor.sizes" :key="size.name">
          <span
            @click="onSizeClick(size)"
            class="h-7 w-14 rounded-3xl bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-xs font-medium cursor-pointer"
            v-bind:class="{
              'bg-slate-50 text-slate-200 cursor-not-allowed hover:bg-slate-50': !size.inStock,
              'outline outline-offset-2 outline-1 outline-black': selectedSize === size,
            }"
          >
            {{ size.name }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>
