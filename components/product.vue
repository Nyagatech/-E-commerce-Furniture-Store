<template>
  <div>
    <div class="carousel carousel-center rounded-md m-4 gap-8 ">
      <div v-for="item in carouselItems" :key="item.id" class="carousel-item relative">
        <img :src="item.imageUrl" :alt="item.name" class="w-full" />
        <div class="absolute top-4 left-4 text-white text-start">
          <h3 class="text-xl font-semibold">{{ item.name }}</h3>
          <p class="text-sm">{{ item.description }}</p>
        </div>
        <div class="absolute top-4 right-4">
            <button class="btn btn-circle btn-sm">
                <Heart />
            </button>
        </div>
        <div class="absolute bottom-4 left-4 text-white">
          <p class="text-lg font-semibold">${{ item.price }}</p>
        </div>
        <div class="absolute bottom-4 right-4">
          <button class="btn btn-sm bg-[#5f2121] text-white hover:bg-[#722929]">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Search, Heart, ShoppingBag } from 'lucide-vue-next';
const carouselItems = [
  {
    id: 1,
    imageUrl: 'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp',
    name: 'Delicious Pizza',
    description: 'A classic pizza with fresh toppings.',
    price: 12.99,
  },
  {
    id: 2,
    imageUrl: 'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
    name: 'Tasty Burger',
    description: 'A juicy burger with all the fixings.',
    price: 9.99,
  },
  {
    id: 3,
    imageUrl: 'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
    name: 'Fresh Salad',
    description: 'A healthy salad with mixed greens.',
    price: 7.99,
  },
  {
    id: 4,
    imageUrl: 'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp',
    name: 'Spaghetti',
    description: 'Delicious Spaghetti with meat sauce.',
    price: 11.99,
  },
  {
    id: 5,
    imageUrl: 'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp',
    name: 'Sushi',
    description: 'Fresh and delicious sushi rolls.',
    price: 15.99,
  },
  {
    id: 6,
    imageUrl: 'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp',
    name: 'Steak',
    description: 'Perfectly cooked steak with sides.',
    price: 19.99,
  },
  {
    id: 7,
    imageUrl: 'https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp',
    name: 'Ice Cream',
    description: 'Refreshing ice cream with toppings.',
    price: 5.99,
  },
];
</script>

<style></style>