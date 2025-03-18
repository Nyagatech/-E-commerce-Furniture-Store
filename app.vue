<template>
  <div>
  <h1 class="text-center font-bold">hello world</h1>
  <ShoppingBag class=" w-5 h-5" />
  <button class="btn">Default</button>
  

<button class="btn btn-neutral">Neutral</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-accent">Accent</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-error">Error</button>
  </div>
</template>
<script setup>
import { ShoppingBag } from 'lucide-vue-next';
</script>
