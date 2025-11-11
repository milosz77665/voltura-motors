<script setup lang="ts">
import FilterPanel from "./FilterPanel.vue";
import ProductsGrid from "./ProductsGrid.vue";
import productsData from "../data/productsData.json";
import type { IFilters } from "../interfaces/IFilters";
import type { IProduct } from "../interfaces/IProduct";
import { ref } from "vue";

const products = ref<IProduct[]>(productsData);

function onFilter(filters: IFilters) {
  products.value = productsData.filter((product) => {
    let result = true;
    const productPrice = Number(product.price.replace(" ", ""));
    if (filters.type && filters.type !== "Dowolny") {
      result = result && product.type === filters.type;
    }

    if (filters.drive && filters.drive !== "Dowolny") {
      result = result && product.drive === filters.drive;
    }

    if (filters.minPrice) {
      result = result && productPrice >= filters.minPrice;
    }

    if (filters.maxPrice) {
      result = result && productPrice <= filters.maxPrice;
    }

    return result;
  });
}
</script>

<template>
  <section class="d-flex justify-content-start flex-column gap-4">
    <h2 class="fw-bold m-0">Gama naszych samochodów</h2>
    <FilterPanel @filter="onFilter" />
    <ProductsGrid :products="products" aria-live="polite" />
  </section>
</template>
