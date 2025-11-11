<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from "vue";
import Collapse from "bootstrap/js/dist/collapse";

defineProps<{ id: string; question: string; answer: string }>();
const collapseRef = useTemplateRef("collapseRef");
const collapseInstance = ref<Collapse | null>(null);
const isOpen = ref<boolean>(false);

onMounted(() => {
  if (collapseRef.value) {
    collapseInstance.value = new Collapse(collapseRef.value, { toggle: false });
  }
});

function onClick() {
  if (isOpen.value) {
    collapseInstance.value?.hide();
    isOpen.value = false;
  } else {
    collapseInstance.value?.show();
    isOpen.value = true;
  }
}
</script>

<template>
  <div class="accordion-item rounded border mb-3">
    <h3 class="accordion-header" :id="`${id}Header`">
      <button
        type="button"
        class="accordion-button rounded fw-semibold shadow-none"
        :class="{ collapsed: !isOpen }"
        :aria-expanded="isOpen"
        :aria-controls="id"
        @click="onClick"
      >
        {{ question }}
      </button>
    </h3>
    <div ref="collapseRef" :id="id" class="accordion-collapse collapse rounded" :aria-labelledby="`${id}Header`">
      <div class="accordion-body pt-0">
        {{ answer }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion-button:focus-visible {
  outline: 2px solid var(--bs-primary);
}
</style>
