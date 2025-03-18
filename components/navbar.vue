<template>
  <div class="navbar bg-base-200 rounded-full px-4 shadow-sm sticky top-0 z-2 container mx-auto">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li v-for="l in links" :key="l.name">
            <router-link
              :to="l.path"
              :class="{ 'font-semibold text-primary': $route.path === l.path }"
            >
              {{ l.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <Logo class="p-2" />
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li v-for="l in links" :key="l.name">
          <router-link
            :to="l.path"
            :class="{ 'font-semibold text-primary': $route.path === l.path }"
          >
            {{ l.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="navbar-end space-x-4 p-2">
      <Search class="w-6 h-6" />

      <ShoppingBag class="w-6 h-6" @click="openModal" />
      <span v-if="cartLength > 0" class="badge badge-sm badge-primary">{{ cartLength }}</span>
      <dialog id="my_modal_2" class="modal">
        <div class="modal-box">
          <h3 class="text-lg font-bold">Shopping Cart</h3>
          <div v-if="cartItems && cartItems.length === 0">
            <p class="py-4">Your cart is empty.</p>
          </div>
          <div v-else>
            <div v-for="item in cartItems" :key="item.id" class="flex items-center py-2">
              <img :src="item.imageUrl" :alt="item.name" class="w-16 h-16 object-cover rounded-md mr-4" />
              <div>
                <p class="font-semibold">{{ item.name }}</p>
                <p>${{ item.price }}</p>
              </div>
            </div>
          </div>
        </div>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <router-link to="/wishlist">
        <Heart class="w-6 h-6" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { Search, Heart, ShoppingBag } from 'lucide-vue-next';
import { useMyCartStore } from '~/stores/cart';

const cartStore = useMyCartStore();
const cartItems = computed(() => cartStore.cart || []);
const cartLength = computed(() => cartStore.cartLength);

onMounted(() => {
  if (!cartItems.value) {
    cartStore.initializeCart();
  }
});

function openModal() {
  const modal = document.getElementById('my_modal_2');
  if (modal) {
    modal.showModal();
  }
}

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
];
</script>
