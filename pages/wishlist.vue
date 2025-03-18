 <template>
  <div class="mt-4">
    <h2 class="text-center font-bold text-3xl">Your Wishlist</h2>
    <div v-if="wishlistItems.length === 0" class="text-center mt-4">
      <p>Your wishlist is empty.</p>
    </div>
    <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      <div v-for="item in wishlistItems" :key="item.id" class="border rounded-lg p-4">
        <img :src="item.imageUrl" :alt="item.name" class="w-full h-48 object-cover rounded-lg" />
        <div class="mt-2">
          <p class="font-semibold">{{ item.name }}</p>
          <p>${{ item.price }}</p>
        </div>
        <button @click="removeFromWishlist(item.id)" class="mt-2 text-red-500 hover:text-red-700">
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWishlistStore } from '~/stores/wishlist';

const wishlistStore = useWishlistStore();
const wishlistItems = wishlistStore.wishlistItems;

function removeFromWishlist(itemId) {
  wishlistStore.removeFromWishlist(itemId);
}
</script>

<style>

</style>
