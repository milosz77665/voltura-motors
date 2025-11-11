<script setup lang="ts">
const chosenOptions = defineModel<{ [option: string]: boolean }>();
defineProps<{ availableOptions: string[] }>();

function onClick(option: string) {
  if (chosenOptions.value) {
    chosenOptions.value[option] = !chosenOptions.value[option];
  }
}
</script>

<template>
  <div class="nav nav-pills row gy-2">
    <div v-for="option of availableOptions" :key="option" class="nav-item col">
      <button
        role="checkbox"
        class="nav-link small text-center border w-100"
        :class="{ active: chosenOptions?.[option], 'text-black': !chosenOptions?.[option] }"
        @click="onClick(option)"
        :aria-checked="chosenOptions?.[option] || false"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>
