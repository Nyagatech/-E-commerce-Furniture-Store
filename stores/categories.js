import { defineStore } from 'pinia';
import axios from 'axios';

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    categories: [
      { name: 'All Products' },
      { name: 'sofa' },
      { name: 'chair' },
      { name: 'stool' },
      { name: 'table' },
      { name: 'desk' },
      { name: 'kitchen' },
      { name: 'vanitory' },
      { name: 'matress' },
      { name: 'mirror' },
      { name: 'wardrobe' },
      { name: 'lamp' },
      { name: 'tv table' },
      { name: 'garden' },
    ],
    selectedCategory: 'All Products',
    products: [],
    loading: false,
    error: null,
  }),
  actions: {
    setSelectedCategory(category) {
      this.selectedCategory = category;
      this.fetchProducts();
    },
    async fetchProducts() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get('https://furniture-api.fly.dev/v1/products');
        this.products = response.data.data;
      } catch (error) {
        this.error = error.message;
        console.error('Error fetching products:', error);
      } finally {
        this.loading = false;
      }
    },
  },
  getters: {
    getSelectedCategory: (state) => state.selectedCategory,
    getAllCategories: (state) => state.categories,
    filteredProducts: (state) => {
      if (state.selectedCategory === 'All Products') {
        return state.products;
      }
      return state.products.filter(
        (product) => product.category === state.selectedCategory
      );
    },
  },
});