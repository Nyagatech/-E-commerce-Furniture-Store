<template>
  <div>

    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          class="max-w-lg rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold text-[#5f2121]">Homey Collection 2025</h1>
          <p class="py-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
            Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies
            sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,
            semper congue, euismod non, mi.
          </p>
          <div class="flex space-x-4">
            <router-link to="/product">
              <button class="btn rounded-full border border-gray-50">
                Start shopping
              </button>
            </router-link>
            <router-link to="/about">
              <button class="btn bg-[#5f2121] hover:bg-[#722929] text-white">
                Learn More
              </button>
            </router-link>
            </div>
        </div>
      </div>
    </div>

    <div class="text-center py-10">
      <h2 class="text-3xl text-[#5f2121] font-bold mb-8">
        Choose The Category <br />
        That You Want
      </h2>
      <div class="text-center py-10">
        <div class="flex flex-wrap justify-center gap-4">
          <button v-for="c in categoriesStore.getAllCategories" :key="c.name" class="hover:text-gray-500 p-2 rounded-md"
            :class="{
              'text-[#5f2121] font-bold': categoriesStore.selectedCategory === c.name,
              'text-gray-300': categoriesStore.selectedCategory !== c.name,
            }" @click="categoriesStore.setSelectedCategory(c.name)">
            {{ c.name }}
          </button>
        </div>
        <div class="mt-8">
          <ProductsCard />
        </div>
        <div>
          <Product />
        </div>
        <div>
          <div class="hero min-h-screen"
            style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);">
            <div class="hero-overlay"></div>
            <div class="hero-content text-neutral-content text-center">
              <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">GeT Discount Up To 50% On Your First Order</h1>
                <p class="mb-5 text-justify">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                  quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                <button class="btn bg-[#5f2121] hover:bg-[#722929] rounded-full text-white">Explore Now</button>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Product from '~/components/product.vue';
import { useCategoriesStore } from '~/stores/categories';

const categoriesStore = useCategoriesStore();
</script>

<style></style>
