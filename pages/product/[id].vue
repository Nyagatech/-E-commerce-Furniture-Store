<template>
  <div>
    <div v-if="product" class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row">
        <img
          :src="product.image_path"
          :alt="product.name"
          lazy="loading"
          class="max-w-full h-[500px] rounded-lg shadow-2xl"
        />
        <div class="pl-8">
          <h1 class="text-5xl font-bold">{{ product.name }}</h1>
          <p class="py-6 text-lg text-gray-400">
            {{ product.description }}
          </p>
          <div class="flex justify-evenly items-center">
            <button
              class="flex items-center gap-2 rounded-lg bg-[#5f2121] px-4 py-2 text-sm text-white hover:bg-[#7a2a2a]"
              @click="addToCart(product)"
            >
              <ShoppingBag /> Add to Cart
            </button>
            <p class="font-bold text-lg">${{ product.discount_price || product.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center py-10">
      <p>Product not found.</p>
    </div>
    <div>
      <h3 class="text-3xl font-bold text-center py-10">Other Products</h3>
      <ProductsCard />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCategoriesStore } from '~/stores/categories';
import { useMyCartStore } from '~/stores/cart';
import { ShoppingBag } from 'lucide-vue-next';

// Initializing the stores
const categoriesStore = useCategoriesStore();
const cartStore = useMyCartStore();
const product = ref(null);
const route = useRoute();

// Using on mounted to get the product data
onMounted(() => {
  const productId = route.params.id; // No need to parse as integer
  const foundProduct = categoriesStore.products.find((p) => p.id === productId);

  if (foundProduct) {
    product.value = foundProduct;
  } else {
    console.error(`Product with ID ${productId} not found.`);
  }
});

// Add to cart function to add the product to the cart
function addToCart(productToAdd) {
  cartStore.addToCart(productToAdd);
}
</script>

<style></style>