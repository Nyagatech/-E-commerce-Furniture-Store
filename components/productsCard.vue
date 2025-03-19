<template>
  <div class="carousel carousel-center rounded-md m-4 gap-8">
    <div v-if="categoriesStore.loading">
      <p>Loading...</p>
    </div>
    <div v-else-if="categoriesStore.error">
      <p>Error: {{ categoriesStore.error }}</p>
    </div>
    <div v-else-if="categoriesStore.filteredProducts.length === 0">
      <p>No products found in this category.</p>
    </div>
    <div
      v-else
      v-for="item in categoriesStore.filteredProducts"
      :key="item.id"
      class="carousel-item relative"
    >
      <router-link :to="`/product/${item.id}`">
        <img :src="item.image_path" :alt="item.name" class="w-full rounded-md" />
        <div class="absolute top-4 left-4 text-white text-start">
          <h3 class="text-xl font-semibold">{{ item.name }}</h3>
          <p class="text-sm">{{ item.description }}</p>
        </div>
        <div class="absolute top-4 right-4">
          <button
            class="btn btn-circle btn-sm"
            @click="toggleWishlist(item, $event)"
            aria-label="Add to wishlist"
          >
            <Heart :class="{ 'text-red-500': isInWishlist(item) }" />
          </button>
        </div>
        <div class="absolute bottom-4 left-4 text-white">
          <p class="text-lg font-semibold">${{ item.discount_price || item.price }}</p>
        </div>
      </router-link>
      <div class="absolute bottom-4 right-4">
        <button
          class="btn btn-sm bg-[#5f2121] text-white hover:bg-[#722929]"
          @click="addToCart(item)"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Heart } from 'lucide-vue-next';
import { useCategoriesStore } from '~/stores/categories';
import { useMyCartStore } from '~/stores/cart';
import { useWishlistStore } from '~/stores/wishlist';
import { onMounted } from 'vue';

// Initialize stores
const categoriesStore = useCategoriesStore();
const cartStore = useMyCartStore();
const wishlistStore = useWishlistStore();

// Check if a product is in the wishlist
function isInWishlist(product) {
  return wishlistStore.wishlistItems.some((item) => item.id === product.id);
}

// Toggle wishlist item
function toggleWishlist(product, event) {
  event.preventDefault(); // Prevent navigation
  if (isInWishlist(product)) {
    wishlistStore.removeFromWishlist(product.id);
  } else {
    wishlistStore.addToWishlist(product);
  }
}

// Add to cart
function addToCart(item) {
  cartStore.addToCart(item);
}

// Fetch products on component mount
onMounted(() => {
  categoriesStore.fetchProducts();
});
</script>

<style></style>