import { defineStore } from 'pinia';

export const useCategoriesStore = defineStore('categories', {
  state: () => ({
    // categories: [], 
    categories: [
      { name: 'All Furniture' },
      { name: 'Living Room' },
      { name: 'Kitchen' },
      { name: 'Bedroom' },
      { name: 'Dining Room' },
      { name: 'Office' },
      { name: 'Outdoor' },
    ],
    // selectedCategory: 'All Furniture',
    selectedCategory: 'All Furniture',
    // products: [],
    products: [
      {
        id: 1,
        imageUrl: 'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp',
        name: 'Delicious Pizza',
        description: 'A classic pizza with fresh toppings.',
        price: 12.99,
        category: 'Kitchen',
      },
      {
        id: 2,
        imageUrl: 'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
        name: 'Tasty Burger',
        description: 'A juicy burger with all the fixings.',
        price: 9.99,
        category: 'Living Room',
      },
      {
        id: 3,
        imageUrl: 'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
        name: 'Fresh Salad',
        description: 'A healthy salad with mixed greens.',
        price: 7.99,
        category: 'Kitchen',
      },
      {
        id: 4,
        imageUrl: 'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp',
        name: 'Spaghetti',
        description: 'Delicious Spaghetti with meat sauce.',
        price: 11.99,
        category: 'Dining Room',
      },
      {
        id: 5,
        imageUrl: 'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp',
        name: 'Sushi',
        description: 'Fresh and delicious sushi rolls.',
        price: 15.99,
        category: 'Dining Room',
      },
      {
        id: 6,
        imageUrl: 'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp',
        name: 'Steak',
        description: 'Perfectly cooked steak with sides.',
        price: 19.99,
        category: 'Outdoor',
      },
      {
        id: 7,
        imageUrl: 'https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp',
        name: 'Ice Cream',
        description: 'Refreshing ice cream with toppings.',
        price: 5.99,
        category: 'Kitchen',
      },
    ],
  }),
  actions: {
    // This action sets the selected category to the given category
    setSelectedCategory(category) {
      this.selectedCategory = category;
    },
  },
  //this getter returns the selected category
  getters: {
    getSelectedCategory: (state) => state.selectedCategory,
    getAllCategories: (state) => state.categories,
    // This getter returns the filtered products based on the selected category
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
