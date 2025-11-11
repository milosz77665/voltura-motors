<script setup lang="ts">
import ProductCard from "./ProductCard.vue";
import type { IProduct } from "../interfaces/IProduct";
import ProductModal from "./ProductModal.vue";
import { ref } from "vue";

const props = defineProps<{ products: IProduct[] }>();
const chosenProduct = ref<IProduct | null>(null);

function onProductSelected(productId: number) {
  const product = props.products.find((product) => product.id === productId);
  if (product) {
    chosenProduct.value = product;
  }
}
</script>

<template>
  <div class="row row-cols-1 gy-3 gx-sm-2 row-cols-sm-2 row-cols-lg-3 g-xl-5">
    <div class="col" v-for="product of products" :key="product.id">
      <ProductCard
        :name="product.name"
        :image="product.image"
        :price="product.price"
        :currency="product.currency"
        :type="product.type"
        :drive="product.drive"
        :details="product.details"
        @product-selected="onProductSelected(product.id)"
      />
    </div>
    <Teleport to="body">
      <Transition>
        <ProductModal :product="chosenProduct" @close="chosenProduct = null" />
      </Transition>
    </Teleport>
  </div>
</template>
