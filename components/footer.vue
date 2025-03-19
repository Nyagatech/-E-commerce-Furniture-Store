<template>
  <div>
    <footer class="footer sm:footer-horizontal text-base-content p-10">
      <aside>
        <Logo />
      </aside>
      <nav>
        <h6 class="footer-title text-lg font-bold">Company</h6>
        <router-link to="/about" class="link link-hover hover:text-gray-300">About</router-link>
        <router-link to="/products" class="link link-hover hover:text-gray-300">Products</router-link>
        <router-link to="/contact" class="link link-hover hover:text-gray-300">Contact</router-link>
        <a href="#" class="link link-hover hover:text-gray-300">Press kit</a>
      </nav>
      <nav>
        <h6 class="footer-title text-lg font-bold">Legal</h6>
        <a href="#" class="link link-hover hover:text-gray-300">Terms of use</a>
        <a href="#" class="link link-hover hover:text-gray-300">Privacy policy</a>
        <a href="#" class="link link-hover hover:text-gray-300">Cookie policy</a>
      </nav>
    </footer>
  </div>
</template>

 