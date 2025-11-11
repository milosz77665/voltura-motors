<script setup lang="ts">
const chosenOption = defineModel<string>();
defineProps<{ availableOptions: string[] }>();

function onClick(option: string) {
  chosenOption.value = option;
}
</script>

<template>
  <div class="nav nav-pills row gy-2" role="radiogroup">
    <div v-for="option of availableOptions" class="nav-item col">
      <button
        role="radio"
        class="nav-link small text-center border w-100"
        :class="{ active: option === chosenOption, 'text-black': option !== chosenOption }"
        @click="onClick(option)"
        :aria-checked="option === chosenOption"
      >
        {{ option }}
      </button>
    </div>
  </div>
</template>
