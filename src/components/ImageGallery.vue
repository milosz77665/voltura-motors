<script setup lang="ts">
import { ref } from "vue";
import type { IImage } from "../interfaces/IImage";

const props = defineProps<{ galleryImagePaths: IImage[] }>();
const mainImage = ref<IImage | null>(props.galleryImagePaths[0] ? props.galleryImagePaths[0] : null);
const miniImages = ref<IImage[]>(filterMiniImages(mainImage.value ? mainImage.value.path : ""));

function changeMainImage(image: IImage) {
  mainImage.value = image;
  miniImages.value = filterMiniImages(mainImage.value.path);
}

function filterMiniImages(mainPath: string) {
  return props.galleryImagePaths.filter((image) => image.path !== mainPath);
}
</script>

<template>
  <div class="d-flex flex-column justify-content-start align-content-center gap-4">
    <img :src="mainImage?.path" class="img-fluid" :alt="mainImage?.alt" />
    <div class="row">
      <div v-for="image of miniImages" :key="image.path" class="col">
        <button
          class="btn btn-link p-0 border-0 w-100"
          :class="{ 'active-thumbnail': image.path === mainImage?.path }"
          @click="changeMainImage(image)"
          :aria-label="`Pokaż zdjęcie: ${image.alt}`"
          :aria-current="image.path === mainImage?.path ? 'true' : 'false'"
        >
          <img :src="image.path" class="img-fluid" :alt="image.alt" />
        </button>
      </div>
    </div>
  </div>
</template>
