<script setup lang="ts">
import { ref } from 'vue'
import ModalView from '../components/shared/ModalView.vue'
import ProductInfo from './ProductInfo.vue'
import ProductInfoTabs from './ProductInfoTabs.vue'
import ProductColorVariants from './ProductColorVariants.vue'
const showModal = ref(false)
import {Swiper, SwiperSlide} from 'swiper/vue'
import { Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
import { defineProps } from 'vue'
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
const productName = ref(props.product.name)
const productPrice = ref(props.product.price)
const productColorVariants = ref(props.product.variants)
const productDetails = ref(props.product.details)
const productNumbers = ref(props.product.productNumbers)

console.log(productColorVariants)

const photosArray = ref([
    {
      id: 1,
      src: 'https://media.soliver.com/i/soliver/2134575.53W0_front?bg=rgb(239,239,239)&qlt=default&fmt=auto&w=596',
    },
    {
      id: 2,
      src: 'https://media.soliver.com/i/soliver/2134575.53W0_outfit?bg=rgb(239,239,239)&qlt=default&fmt=auto&w=596'
    },
    {
      id: 3,
      src: 'https://media.soliver.com/i/soliver/2134575.53W0_back?bg=rgb(239,239,239)&qlt=default&fmt=auto&w=596'
    },
    {
      id: 4,
      src: 'https://media.soliver.com/i/soliver/2134575.53W0_flat?bg=rgb(239,239,239)&qlt=default&fmt=auto&w=596'
    },
    {
      id: 5,
      src: 'https://media.soliver.com/i/soliver/2134575.53W0_d1?bg=rgb(239,239,239)&qlt=default&fmt=auto&w=596'
    }
])
const modules = [Pagination]

</script>

<template>
  <button
    type="button"
    class="my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full"
    @click="showModal = true"
  >
    Product Details
  </button>
  <ModalView :show="showModal">
    <template v-slot:header>
      <div class="sticky justify-end flex bg-white w-full top-0 my-2.5 z-10">
        <button
        type="button"
        class="self-end"
        @click="showModal = false"
      >
      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
      </svg>
      </button>
      </div>
    </template>
    <template v-slot:content>
      <div class="grid grid-cols-12">
        <div class="col-span-8 md:col-span-12">
        <swiper
          :modules="modules"
          :loop="true"
          :pagination="{clickable: true}"
          :breakpoints="{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          2560: {
            slidesPerView: 4,
          }
          }"
          >
          <swiper-slide v-for="photo in photosArray" :key="photo.id">
            <img :src="photo.src" loading="lazy" />
            <div class="swiper-lazy-preloader"></div>
          </swiper-slide>
          </swiper>
        </div>
        <div class="min-h-96 col-span-4 md:col-span-12 p-5 flex flex-col">
          <ProductInfo :productName="productName" :productPrice="productPrice" />
          <ProductColorVariants :productColorVariants="productColorVariants" />
        </div>
      </div>
      <div class="grid">
        <ProductInfoTabs :productDetails="productDetails" :productNumbers="productNumbers" />
      </div>
    </template>
    <template v-slot:footer>
        <span>{{ productName }}</span>
        <button type="button" class="flex items-center justfiy-between my-1 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-bold text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Add to Cart
          <span class="ml-12">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
          </span>
        </button>
    </template>
  </ModalView>
</template>

