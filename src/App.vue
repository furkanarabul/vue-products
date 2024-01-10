<script setup lang="ts">
import ProductDetailModal from './components/ProductDetailModal.vue';
import { ref, onMounted, computed } from 'vue';

interface Variant {
  id: number;
  color: string;
  hexCode: string;
  images: string[];
  sizes: {
    name: string;
    stock: number
  }
  details: {
    text: string;
    title: string;
  }
}

interface Product {
  id: number;
  name: string;
  price: number;
  variants: Variant[];
}

const products = ref<Product[]>([]);

onMounted(async () => {
  try {
    const response = await fetch('products.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch product data`);
    }
    const data = await response.json();
    products.value = data;
  } catch (error) {
    alert(`Error fetching product data: ${error}`);
  }
});
const isFetched = computed(() => {
  return products.value.length > 0;
});
</script>

<template>
  <div class="h-screen flex items-center justify-center container mx-auto">
    <div v-if="!isFetched">
      Loading...
    </div>
    <div v-else v-for="product in products" :key="product.id" class="max-w-sm rounded overflow-hidden shadow-lg p-4 mx-4">
      <img :src="product.variants[0].images[0]" />
      <p class="text-gray-800 text-2xl my-1">{{ product.name }}</p>
      <div class="flex">
        <span class="font-bold mr-1">{{ product.price }}</span>
      </div>
      <ProductDetailModal :product="product" />
    </div>
  </div>
</template>

<style src="./assets/tailwind.css"></style>
