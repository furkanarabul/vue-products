<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { defineProps } from "vue";

const modules = [Pagination, Navigation];

const props = defineProps({
  selectedColorImages: {
    type: Array as () => string[],
    required: true,
  },
});
</script>

<template>
  <div class="col-span-8 md:col-span-12">
    <swiper
      :modules="modules"
      :loop="true"
      :navigation="true"
      :pagination="{ clickable: true }"
      :breakpoints="{
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 2 },
        1920: { slidesPerView: 3 },
        2560: { slidesPerView: 4 },
      }"
    >
      <swiper-slide v-for="imageUrl in selectedColorImages" :key="imageUrl">
        <img :src="imageUrl" loading="lazy" />
        <div class="swiper-lazy-preloader"></div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style>
.swiper-button-next,
.swiper-container-rtl .swiper-button-prev,
.swiper-button-prev, 
.swiper-container-rtl .swiper-button-next{
    color: black;
    opacity: 0.5;
}
</style>
