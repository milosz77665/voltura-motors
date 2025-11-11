<script setup lang="ts">
import type { IProduct } from "../interfaces/IProduct";
import ModalContent from "./ModalContent.vue";
import { onMounted, ref, useTemplateRef, watch } from "vue";
import Modal from "bootstrap/js/dist/modal";

const emit = defineEmits<{ (e: "close"): void }>();
const props = defineProps<{ product: IProduct | null }>();
const modalRef = useTemplateRef("modalRef");
const modalInstance = ref<Modal | null>(null);

onMounted(() => {
  if (modalRef.value) {
    modalInstance.value = new Modal(modalRef.value);

    modalRef.value.addEventListener("hidden.bs.modal", () => {
      emit("close");
    });
  }
});

watch(
  () => props.product,
  (newProduct) => {
    if (newProduct) {
      modalInstance.value?.show();
    } else {
      modalInstance.value?.hide();
    }
  }
);
</script>

<template>
  <div
    ref="modalRef"
    class="modal fade"
    id="productModal"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <ModalContent v-if="product" :product="product" />
    </div>
  </div>
</template>
