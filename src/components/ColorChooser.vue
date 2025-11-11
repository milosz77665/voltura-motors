<script setup lang="ts">
const chosenColor = defineModel<string>();
defineProps<{ availableColors: { [key: string]: string } }>();

function onClick(option: string | number) {
  if (typeof option === "string") {
    chosenColor.value = option;
  }
}
</script>

<template>
  <div class="d-flex justify-content-start align-items-center gap-2" role="radiogroup">
    <button
      v-for="(colorLabel, color) in availableColors"
      :key="color"
      role="radio"
      class="color-swatch border rounded"
      :class="{ 'active': chosenColor === color }"
      :style="{ backgroundColor: color as string }"
      @click="onClick(color)"
      :aria-checked="chosenColor === color"
      :aria-label="colorLabel"
    ></button>
  </div>
</template>

<style scoped>
.color-swatch {
  width: 32px;
  height: 32px;
  transition: box-shadow 0.15s ease-in-out;
}

.color-swatch.active {
  box-shadow: 0 0 0 0.15rem var(--bs-primary);
}
</style>
