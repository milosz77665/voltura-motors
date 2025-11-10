<script setup lang="ts">
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
</script>

<template>
  <Header />
  <main v-fix-orphans class="container mt-4 d-flex flex-column gap-5">
    <Hero />
  </main>
</template>
