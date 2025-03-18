<template>
  <div>
    <div v-if="product" class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row">
        <img
          :src="product.imageUrl"
          :alt="product.name"
          class="max-w-2xl rounded-lg shadow-2xl"
        />
        <div class="pl-8">
          <h1 class="text-5xl font-bold">{{ product.name }}</h1>
          <p class="py-6 text-lg text-gray-400">
            {{ product.description }}
          </p>
          <div class="flex justify-evenly items-center">
            <button class="flex items-center gap-2 rounded-lg bg-[#5f2121] px-4 py-2 text-sm text-white hover:bg-[#7a2a2a]">
              <ShoppingBag /> Add to Cart
            </button>
            <p class="font-bold text-lg">${{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center py-10">
        <p>Product not found.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCategoriesStore } from '~/stores/categories';
import {ShoppingBag} from 'lucide-vue-next';

const route = useRoute();
const categoriesStore = useCategoriesStore();
const product = ref(null);

onMounted(() => {
  // Fetch the product with the ID from the URL.
  const productId = parseInt(route.params.id, 10);
  // Find the product with the ID in the products array.
  const foundProduct = categoriesStore.products.find(p => p.id === productId);
//this fetches the product with the ID from the URL and assigns it to the product ref.
  if (foundProduct) {
    product.value = foundProduct;
  } else {
    console.error(`Product with ID ${productId} not found.`);
  }
});
</script>

<style></style>