import { defineStore } from 'pinia';

const WISHLIST_KEY = 'myWishlist';

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    wishlistItems: [],
  }),
  actions: {
    initializeWishlist() {
      try {
        const storedWishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
        this.wishlistItems = storedWishlist;
      } catch (error) {
        console.error('Error initializing wishlist:', error);
      }
    },
    addToWishlist(product) {
      if (!this.wishlistItems.some(item => item.id === product.id)) {
        this.wishlistItems.push(product);
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(this.wishlistItems));
      }
    },
    removeFromWishlist(productId) {
      this.wishlistItems = this.wishlistItems.filter(item => item.id !== productId);
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(this.wishlistItems));
    },
  },
});
