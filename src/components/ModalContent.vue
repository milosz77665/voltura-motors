<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { IProduct } from "../interfaces/IProduct";
import SinglePillChooser from "./SinglePillChooser.vue";
import ColorChooser from "./ColorChooser.vue";
import MultiplePillChooser from "./MultiplePillChooser.vue";
import ImageGallery from "./ImageGallery.vue";

const props = defineProps<{ product: IProduct }>();
const availableVariants = ["Podstawowa", "Sport", "Performance"];
const availableColors = {
  "#1F2937": "Ciemnoszary",
  "#F3F4F6": "Jasnoszary",
  "#28483B": "Ciemnozielony",
};
const availableExtras = ["Koła zimowe", "Akcesoria"];
const initialConfig = {
  variant: "Podstawowa",
  color: "",
  extra: { "Koła zimowe": false, "Akcesoria": false },
};
const configuration = ref<{
  variant: string;
  color: string;
  extra: { [key: string]: boolean };
  model?: string;
  price?: string;
  currency?: string;
}>(structuredClone(initialConfig));

onMounted(() => {
  loadConfig();
});

function saveConfig() {
  localStorage.setItem(
    `${props.product.id}productConfiguration`,
    JSON.stringify({
      model: props.product.name,
      price: props.product.price,
      currency: props.product.currency,
      ...configuration.value,
    })
  );
}

function loadConfig() {
  const data = localStorage.getItem(`${props.product.id}productConfiguration`);

  if (data) {
    const config = JSON.parse(data);

    configuration.value.variant = config.variant;
    configuration.value.color = config.color;
    configuration.value.extra = config.extra;
  }
}
</script>

<template>
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title fw-bold" id="productModalLabel">{{ `${product.name} —  Szczegóły modelu` }}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Zamknij"></button>
    </div>

    <div class="modal-body row row-cols-1 gy-3 row-cols-xl-2">
      <ImageGallery class="col-12 col-xl-7" :galleryImagePaths="product.galleryImagePaths" />
      <div class="col-12 col-xl-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-1 gx-2 gy-2 gy-xl-3 mx-0">
          <div class="col">
            <div class="card">
              <div class="card-body d-flex flex-column gap-2">
                <fieldset class="d-flex flex-column gap-1">
                  <legend class="small text-body-tertiary">Wersja</legend>
                  <SinglePillChooser v-model="configuration.variant" :availableOptions="availableVariants" />
                </fieldset>
                <fieldset class="d-flex flex-column gap-1">
                  <legend class="small text-body-tertiary">Kolor</legend>
                  <ColorChooser v-model="configuration.color" :available-colors="availableColors" />
                </fieldset>
                <fieldset class="d-flex flex-column gap-1">
                  <legend class="small text-body-tertiary">Dodatki</legend>
                  <MultiplePillChooser v-model="configuration.extra" :available-options="availableExtras" />
                </fieldset>
                <div class="d-flex flex-column">
                  <p class="small text-body-tertiary">Cena</p>
                  <p class="fw-bold fs-4">{{ `${product.price} zł` }}</p>
                </div>
                <button class="btn btn-secondary" @click="saveConfig">Znajdź punkt sprzedaży</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body mb-4">
                <h5 class="card-title border-bottom fw-bold fs-6 mb-3">Kluczowe cechy</h5>
                <div
                  v-for="feature of product.keyFeatures"
                  :key="feature.name"
                  class="d-flex flex-md-column flex-lg-row justify-content-between"
                >
                  <p class="text-body-tertiary">{{ feature.name }}</p>
                  <p>{{ feature.value }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal-footer p-4">
      <button type="button" class="btn btn-light border fw-light px-4" data-bs-dismiss="modal">Anuluj</button>
      <button type="button" class="btn btn-primary" @click="saveConfig">Znajdź dealera</button>
    </div>
  </div>
</template>
