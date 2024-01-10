<template>
  <div class="my-5 border-y-2">
    <span class="text-sm mt-10">Color:</span>
    <span class="text-sm mt-10">{{ selectedColorName }}</span>
    <div>
      <span
        v-for="item in productColorVariants"
        :key="item.id"
        :class="{ 'border': selectedColor === item.color, 'border-black border-2': selectedColor === item.color }"
        class="ml-1 mt-2 text-sm font-bold mr-1 rounded-2xl w-6 h-6 bg-black inline-flex cursor-pointer hover:border hover:border-black"
        v-bind:style="{ backgroundColor: item.hexCode }"
        @click="onColorClick(item)"
      >
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted, defineEmits } from 'vue';

interface ColorVariant {
  id: number;
  color: string;
  hexCode: string;
}

const props = defineProps({
  productColorVariants: {
    type: Array as () => ColorVariant[],
    required: true,
  },
});

const selectedColor = ref(null);
const selectedColorName = ref('');

const emits = defineEmits(['color-click']);

const onColorClick = (item) => {
  selectedColor.value = item.color;
  selectedColorName.value = item.color;
  console.log('Clicked color:', item);
  emits('color-click', item); 
};

onMounted(() => {
  if (props.productColorVariants.length > 0) {
    selectedColorName.value = props.productColorVariants[0].color;
  }
});

</script>
