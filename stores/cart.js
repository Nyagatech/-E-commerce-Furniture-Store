 // stores/cart.js
import { defineStore } from 'pinia';

export const useMyCartStore = defineStore({
  id: 'myCartStore',
  state: () => ({
    cart: [],
  }),
  actions: {
    initializeCart() {
      // Simulate fetching cart data from local storage or an API
      const storedCart = JSON.parse(localStorage.getItem('myCart')) || [];
      this.cart = storedCart;
    },
    addToCart(item) {
      this.cart.push(item);
      localStorage.setItem('myCart', JSON.stringify(this.cart)); 
    },
    removeFromCart(itemId) {
      this.cart = this.cart.filter((item) => item.id !== itemId);
      localStorage.setItem('myCart', JSON.stringify(this.cart)); 
    },
  },
});