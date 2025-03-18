<template>
  <div>
    <div class="text-center py-10">
      <h2 class="text-3xl text-[#5f2121] font-bold mb-8">
        Choose The Category <br />
        That You Want
      </h2>
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
      </div>
  </div>
</template>

<script setup>
import 
</script>

<style>

</style>