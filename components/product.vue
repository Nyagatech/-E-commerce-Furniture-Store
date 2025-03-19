<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="hero-content flex-col lg:flex-row-reverse lg:items-stretch max-w-6xl w-full">
      <div class="w-full lg:w-1/2">
        <img
          src="https://cdn.pixabay.com/photo/2016/04/18/13/53/room-1336497_960_720.jpg"
          alt="sofa"
          class="w-full h-full object-cover rounded-lg shadow-2xl"
        />
      </div>

      <div class="w-full lg:w-1/2 p-8 bg-white shadow-md rounded-lg">
        <div class="text-center lg:text-left">
          <h1 class="text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
            Benefits you Get When Using Our Service
          </h1>
          <p class="mb-6 text-gray-600 text-start">
            Discover a world of quality furniture and decor. We're dedicated to providing you with
            stylish and comfortable pieces that transform your home.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            class="p-4 shadow-lg rounded-lg bg-base-300 hover:border hover:border-blue-500 transition duration-300"
            v-for="s in Services"
            :key="s.title"
          >
            <div class="flex items-center mb-2">
              <component :is="s.icon" class="w-6 h-6 mr-2 text-blue-500" />
              <h3 class="font-semibold">{{ s.title }}</h3>
            </div>
            <p class="text-sm">{{ s.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Telescope, CircleUser, CarFront, ShieldCheck } from 'lucide-vue-next';

const Services = [
  {
    title: 'Wide Selection',
    description: 'Explore our diverse range of furniture and decor items.',
    icon: Telescope,
  },
  {
    title: 'Quality Craftsmanship',
    description: 'We prioritize quality and durability in every piece.',
    icon: ShieldCheck,
  },
  {
    title: 'Expert Support',
    description: 'Our team is here to assist you with any questions.',
    icon: CircleUser,
  },
  {
    title: 'Fast Delivery',
    description: 'Enjoy quick and reliable delivery services.',
    icon: CarFront,
  },
];
</script>

<style>
/* Additional custom styles can be added here if needed */
</style>
