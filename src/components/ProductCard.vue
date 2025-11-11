<script setup lang="ts">
import type { IImage } from "../interfaces/IImage";

defineEmits<{ (e: "productSelected"): void }>();
defineProps<{
  name: string;
  image: IImage;
  price: string;
  currency: string;
  type: string;
  drive: string;
  details: string;
}>();
</script>

<template>
  <div class="card bg-white p-3 h-100">
    <div class="card-body d-flex justify-content-center align-items-center">
      <img :src="image.path" class="img-fluid" :alt="image.alt" />
    </div>
    <div class="row gy-2 row-cols-2">
      <div class="col-8 d-flex flex-column">
        <h3 class="card-title fw-bold fs-4 fs-sm-5">{{ name }}</h3>
        <p class="card-title fw-bold fs-4 fs-sm-5">{{ `od ${price}${currency}` }}</p>
        <p class="card-text text-body-tertiary">{{ `${details} • ${type} • ${drive}` }}</p>
      </div>
      <div class="col-4 d-flex justify-content-end align-items-end">
        <button
          class="btn btn-primary rounded-pill px-3 py-1"
          @click="$emit('productSelected')"
          :aria-label="`Sprawdź szczegóły ${name}`"
        >
          Sprawdź
        </button>
      </div>
    </div>
  </div>
</template>
