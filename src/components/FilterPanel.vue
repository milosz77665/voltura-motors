<script setup lang="ts">
import type { IFilters } from "../interfaces/IFilters";
import Range from "./Range.vue";
import Select from "./Select.vue";
import { ref } from "vue";

const availableTypes = ["Dowolny", "SUV", "CUV", "Sedan"];
const availableDrives = ["Dowolny", "Elektryczny", "Hybrydowy"];
const emit = defineEmits<{ (e: "filter", filters: IFilters): void }>();
const filters = ref<IFilters>({ type: "Dowolny", drive: "Dowolny", minPrice: null, maxPrice: null });

function filter() {
  emit("filter", filters.value);
}
</script>

<template>
  <form
    @submit.prevent="filter"
    aria-label="Panel do filtrowania samochodów Voltura"
    class="row row-cols-1 bg-white rounded-2 border py-3 px-4 mx-0 gy-3 row-cols-sm-2 row-cols-lg-4"
  >
    <Select class="col mt-0 col-lg-3" v-model="filters.type" id="typeSelect" label="Typ" :options="availableTypes" />
    <Select
      class="col mt-sm-0 col-lg-3"
      v-model="filters.drive"
      id="driveSelect"
      label="Napęd"
      :options="availableDrives"
    />
    <Range
      class="col col-sm-10 col-lg-4 mt-lg-0 col-xxl-3"
      label="Cena"
      min-value-aria-label="Minimalna cena"
      max-value-aria-label="Maksymalna cena"
      v-model:min-value="filters.minPrice"
      v-model:max-value="filters.maxPrice"
    />
    <div
      class="col d-flex justify-content-start align-items-start col-sm-2 justify-content-md-end align-items-md-end col-lg-2 mt-lg-0 col-xxl"
    >
      <button type="submit" class="btn btn-secondary px-md-4 px-xl-5">Filtruj</button>
    </div>
  </form>
</template>
