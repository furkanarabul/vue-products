<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Pagination];

import { defineProps } from 'vue';
const props = defineProps({
  selectedColorImages: {
    type: Array,
    required: true,
  },
});
console.log(props.selectedColorImages);
</script>

<template>
  <div class="col-span-8 md:col-span-12">
    <swiper
      :modules="modules"
      :loop="true"
      :pagination="{ clickable: true }"
      :breakpoints="{
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 2 },
        1920: { slidesPerView: 3 },
        2560: { slidesPerView: 4 }
      }"
    >
      <swiper-slide v-for="photo in selectedColorImages" :key="photo.id">
        <img :src="photo" loading="lazy" />
        <div class="swiper-lazy-preloader"></div>
      </swiper-slide>
    </swiper>
  </div>
</template>

