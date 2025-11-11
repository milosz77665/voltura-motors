<script setup lang="ts">
const model = defineModel<string | null>();
defineProps<{ id: string; label: string; options: string[] }>();
</script>

<template>
  <div class="d-flex justify-content-center align-items-center gap-3">
    <label :for="id" class="col-form-label text-muted">{{ label }}</label>
    <select :id="id" v-model="model" class="form-select bg-white">
      <option v-for="option of options" :key="option" :value="option">{{ option }}</option>
    </select>
  </div>
</template>
