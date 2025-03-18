<template>
  <div class="mt-4">
    <h2 class="text-center font-bold text-3xl">Your Wishlist</h2>
    <div v-if="wishlistItems.length === 0" class="text-center mt-4">
      <p>Your wishlist is empty.</p>
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <div v-for="item in wishlistItems" :key="item.id" class="border rounded-lg p-4 mb-4">
        <div class="card bg-base-100 shadow-sm">
          <figure>
            <img :src="item.imageUrl" :alt="item.name" class="" />
          </figure>
          <div class="card-body">
            <h2 class="card-title text-lg">{{ item.name }}</h2>
            <p>${{ item.price }}</p>
            <div class="card-actions justify-end">
              <button class="btn btn-sm btn-primary" @click="addToCart(item)">Add to Cart</button>
              <button class="btn btn-sm" @click="removeFromWishlist(item.id)">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWishlistStore } from '~/stores/wishlist';
import { useMyCartStore } from '~/stores/cart';

const wishlistStore = useWishlistStore();
const cartStore = useMyCartStore();
const wishlistItems = wishlistStore.wishlistItems;

function removeFromWishlist(itemId) {
  wishlistStore.removeFromWishlist(itemId);
}

function addToCart(item) {
  cartStore.addToCart(item);
}
</script>