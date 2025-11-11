<script setup lang="ts">
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Products from "./components/Products.vue";
import TestDriveCTA from "./components/TestDriveCTA.vue";
import FAQ from "./components/FAQ.vue";
</script>

<template>
  <Header />
  <main v-fix-orphans class="container mt-4 d-flex flex-column gap-5">
    <Hero />
    <Products />
    <TestDriveCTA />
    <FAQ />
  </main>
</template>
