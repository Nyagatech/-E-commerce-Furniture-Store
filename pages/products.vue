<template>
  <div class="text-center py-10">
    <h2 class="text-3xl text-[#5f2121] font-bold mb-8">
      Choose The Category <br />That You Want
    </h2>

    <div class="flex flex-wrap justify-center gap-4">
      <button
        v-for="c in categoriesStore.getAllCategories"
        :key="c.name"
        class="hover:text-gray-500 p-2 rounded-md"
        :class="{
          'text-[#5f2121] font-bold': categoriesStore.selectedCategory === c.name,
          'text-gray-300': categoriesStore.selectedCategory !== c.name,
        }"
        @click="categoriesStore.setSelectedCategory(c.name)"
      >
        {{ c.name }}
      </button>
    </div>
    <div class="mt-8">
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        <div v-if="categoriesStore.filteredProducts.length === 0" class="text-center">
          <p class="text-center text-gray-500 font-bold">
            No products found in this category.
          </p>
        </div>

        <div
          v-else
          v-for="product in categoriesStore.filteredProducts"
          :key="product.id"
          class="relative"
        >
          <router-link :to="`/product/${product.id}`">
            <img
              :src="product.imageUrl"
              :alt="product.name"
              class="w-full h-64 object-cover rounded-md"
            />
            <div class="absolute top-4 left-4 text-white text-start">
              <h3 class="text-xl font-semibold">{{ product.name }}</h3>
              <p class="text-sm">{{ product.description }}</p>
            </div>
            <div class="absolute top-4 right-4">
              <button class="btn btn-circle btn-sm">
                <Heart />
              </button>
            </div>
            <div class="absolute bottom-4 left-4 text-white">
              <p class="text-lg font-semibold">${{ product.price }}</p>
            </div>
          </router-link>
          <div class="absolute bottom-4 right-4">
            <button
              class="btn btn-sm bg-[#5f2121] text-white hover:bg-[#722929]"
              @click="addToCart(product)"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Heart } from 'lucide-vue-next';
import { useCategoriesStore } from '~/stores/categories';
import { useMyCartStore } from '~/stores/cart';

//initiliazing the stores
const categoriesStore = useCategoriesStore();
const cartStore = useMyCartStore();

function addToCart(product) {
  cartStore.addToCart(product);
}
</script>

<style></style>