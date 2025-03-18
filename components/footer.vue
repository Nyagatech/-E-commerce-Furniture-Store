<template>
  <div>
    <footer className="footer sm:footer-horizontal text-base-content p-10">
  <aside>
   <Logo/>
  </aside>
  <nav>
    <h6 className="footer-title">Company</h6>
     <router-link to="/about " class="link link-hover">About</router-link>
    <router-link to="/products" class="link link-hover">products</router-link>
    <router-link to="/contact" class="link link-hover">Contact</router-link>
    <a href="#" class="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a href="" class="link link-hover">Terms of use</a>
    <a href="" class="link link-hover">Privacy policy</a>
    <a href="" class="link link-hover">Cookie policy</a>
  </nav>
</footer>
  </div>
</template>

<script setup>
import Logo from './logo.vue';


</script>

<style>

</style>