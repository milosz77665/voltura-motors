<script setup lang="ts">
import { ref, watch } from "vue";

const minValue = defineModel<number | null>("minValue");
const maxValue = defineModel<number | null>("maxValue");
defineProps<{ label: string; minValueAriaLabel: string; maxValueAriaLabel: string }>();
const formattedMinValue = ref<string>(minValue.value ? minValue.value.toString() : "");
const formattedMaxValue = ref<string>(maxValue.value ? maxValue.value.toString() : "");

function formatValue(value: string) {
  return splitThousands(removeNonDigits(value));
}

function removeNonDigits(value: string) {
  return value.replace(/\D/g, "");
}

function splitThousands(value: string) {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

watch(formattedMinValue, (newValue) => {
  formattedMinValue.value = newValue ? formatValue(newValue) : "";
  minValue.value = newValue ? Number(removeNonDigits(newValue)) : null;
});

watch(formattedMaxValue, (newValue) => {
  formattedMaxValue.value = newValue ? formatValue(newValue) : "";
  maxValue.value = newValue ? Number(removeNonDigits(newValue)) : null;
});
</script>

<template>
  <fieldset class="d-flex justify-content-center align-items-center gap-2">
    <legend class="col-form-label text-muted w-auto">{{ label }}</legend>
    <input
      :aria-label="minValueAriaLabel"
      v-model="formattedMinValue"
      type="text"
      maxlength="9"
      inputmode="numeric"
      class="form-control bg-white"
    />
    <span aria-hidden="true">-</span>
    <input
      :aria-label="maxValueAriaLabel"
      v-model="formattedMaxValue"
      type="text"
      maxlength="9"
      inputmode="numeric"
      class="form-control bg-white"
    />
  </fieldset>
</template>
