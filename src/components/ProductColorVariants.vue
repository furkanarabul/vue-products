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
          'outline outline-offset-1 outline-black':
            selectedColor && selectedColor.color === item.color,
        }"
        class="ml-1 mt-2 text-sm font-bold mr-1 rounded-2xl w-6 h-6 bg-black inline-flex cursor-pointer"
        v-bind:style="{ backgroundColor: item.hexCode }"
        @click="onColorClick(item)"
      >
      </span>
      </div>
    </div>
    <div v-if="selectedColor && selectedColor.sizes">
      <h3 class="text-lg font-bold mt-4">Available Sizes:</h3>
      <ul class="flex">
        <li class="flex mr-2" v-for="size in selectedColor.sizes" :key="size.name">
          <span
            class="h-7 w-14 rounded-3xl bg-gray-200 hover:bg-gray-300 flex items-center justify-center text-xs font-medium cursor-pointer"
            v-bind:class="{ 'bg-slate-50 text-slate-200 cursor-not-allowed hover:bg-slate-50': size.inStock }">
              {{ size.name }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted, defineEmits } from "vue";

interface ColorVariant {
  id: number;
  color: string;
  hexCode: string;
  sizes?: { name: string; inStock: boolean }[];
}

const props = defineProps({
  productColorVariants: {
    type: Array as () => ColorVariant[],
    required: true,
  },
});

const selectedColor = ref<ColorVariant | null>(null); // Specify the type for selectedColor
const selectedColorName = ref("");

const emits = defineEmits(["color-click"]);

const onColorClick = (item: ColorVariant) => {
  selectedColor.value = item; // Assign the entire item, including sizes
  selectedColorName.value = item.color;
  console.log("Clicked color:", item);
  emits("color-click", item);
};

onMounted(() => {
  if (props.productColorVariants.length > 0) {
    const firstColor = props.productColorVariants[0];
    selectedColorName.value = firstColor.color;
    selectedColor.value = { ...firstColor, sizes: firstColor.sizes || [] };
    console.log(selectedColor.value);
  }
});
</script>