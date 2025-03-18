<template>
  <div>
    <div class="sticky top-0 z-50">
      <Navbar />
    </div>
    <section id="hero">
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            class="max-w-lg rounded-lg shadow-2xl"
          />
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

              <button class="btn bg-[#5f2121] hover:bg-[#722929] text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="text-center py-10">
        <h2 class="text-3xl text-[#5f2121] font-bold mb-8">
          Choose The Category <br />
          That You Want
        </h2>
        <div
          class="flex flex-wrap bg-base-300 w-full sm:w-4/5 md:w-3/4 lg:w-1/3 rounded-full justify-center gap-4 py-4 mx-auto"
        >
          <button
            v-for="c in categories"
            :key="c.name"
           class=":hover:text-gray-500 "
           :class="c.name === 'All Furniture' ? 'text-[#5f2121] font-bold' : 'text-gray-300'"
          >
            {{ c.name }}
          </button>
        </div>
        <div class="">
          <Product />
        </div>

        
      </div>

    </section>
  </div>
</template>

<script setup>
const categories = [
  {
    name: 'All Furniture',
  },
  {
    name: 'Living Room',
  },
  {
    name: 'Kitchen',
  },
  {
    name:'Bedroom'
  }
];
</script>

<style></style>