<template>
  <div>
    <div class="carousel carousel-center rounded-md m-4 gap-8">
      <div v-if="categoriesStore.filteredProducts.length === 0">
        <p>No products found in this category.</p>
      </div>
      <div
        v-else
        v-for="item in categoriesStore.filteredProducts"
        :key="item.id"
        class="carousel-item relative"
      >
        <img :src="item.imageUrl" :alt="item.name" class="w-full rounded-md" />
        <div class="absolute top-4 left-4 text-white text-start">
          <h3 class="text-xl font-semibold">{{ item.name }}</h3>
          <p class="text-sm">{{ item.description }}</p>
        </div>
        <div class="absolute top-4 right-4">
          <button class="btn btn-circle btn-sm">
            <Heart />
          </button>
        </div>
        <div class="absolute bottom-4 left-4 text-white">
          <p class="text-lg font-semibold">${{ item.price }}</p>
        </div>
        <div class="absolute bottom-4 right-4">
          <button class="btn btn-sm bg-[#5f2121] text-white hover:bg-[#722929]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Heart } from 'lucide-vue-next';
import { useCategoriesStore } from '~/stores/categories';

const categoriesStore = useCategoriesStore();
</script>

<style></style>
