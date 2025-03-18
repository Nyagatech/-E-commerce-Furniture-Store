
import { defineStore } from 'pinia';

export const useMyCartStore = defineStore('myCartStore', {
  state: () => ({
    cart: [],
  }),
  actions: {
    initializeCart() {
      
        const storedCart = JSON.parse(localStorage.getItem('myCart')) || [];
        this.cart = storedCart;
    
    },
    addToCart(item) {
      const existingItem = this.cart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cart.push({ ...item, quantity: 1 });
      }
      
        localStorage.setItem('myCart', JSON.stringify(this.cart));
      
    },
    removeFromCart(itemId) {
      this.cart = this.cart.filter((item) => item.id !== itemId);
      
        localStorage.setItem('myCart', JSON.stringify(this.cart));
      
    },
    updateQuantity(itemId, quantity) {
      const itemToUpdate = this.cart.find((item) => item.id === itemId);
      if (itemToUpdate && quantity > 0) {
        itemToUpdate.quantity = quantity;
        
          localStorage.setItem('myCart', JSON.stringify(this.cart));
        
      } else if (quantity <= 0) {
        this.removeFromCart(itemId);
      }
    },
    clearCart() {
      this.cart = [];
      
        localStorage.removeItem('myCart');
      
    },
  },
  getters: {
    cartTotal: (state) => {
      return state.cart.reduce((total, item) => {
        const price = item.price || 0;
        const quantity = item.quantity || 1;
        return total + price * quantity;
      }, 0);
    },
    cartLength: (state) => {
      return state.cart.reduce((total, item) => {
        const quantity = item.quantity || 1;
        return total + quantity;
      }, 0);
    },
  },
});