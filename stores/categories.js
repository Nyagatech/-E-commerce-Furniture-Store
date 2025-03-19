import { defineStore } from 'pinia';

export const useCategoriesStore = defineStore('categories', {
    state: () => ({
        categories: [
            { name: 'All Furniture' },
            { name: 'Living Room' },
            { name: 'Kitchen' },
            { name: 'Bedroom' },
            { name: 'Dining Room' },
            { name: 'Office' },
            { name: 'Outdoor' },
        ],
        selectedCategory: 'All Furniture',
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
                const response = await fetch('/api/products');
                if (!response.ok) {
                    // Handle HTTP errors (e.g., 404, 500)
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json(); // Parse the JSON response
                this.products = data;
            } catch (error) {
                // Handle network errors or other exceptions
                this.error = error.message;
                console.error('Error fetching products:', error); // Log the error
            } finally {
                this.loading = false;
            }
        },
    },
    getters: {
        getSelectedCategory: (state) => state.selectedCategory,
        getAllCategories: (state) => state.categories,
        filteredProducts: (state) => {
            if (state.selectedCategory === 'All Furniture') {
                return state.products;
            }
            return state.products.filter(
                (product) => product.category === state.selectedCategory
            );
        },
    },
});