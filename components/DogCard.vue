<template>
  <div class="dog-card p-3 border rounded shadow-sm">
    <!-- Dog Image -->
    <img :src="image" :alt="breed" class="img-fluid rounded mb-2" />

    <!-- Breed Name -->
    <h5 class="fw-bold">{{ breed }}</h5>

    <!-- Basic Info -->
    <p class="text-muted small">Origin: {{ origin }}</p>

    <!-- Toggle Button -->
    <button class="btn btn-primary btn-sm mt-2" @click="toggleInfo">
      {{ showInfo ? 'Hide Details' : 'Show Details' }}
    </button>

    <!-- Extra Info Section -->
    <div v-if="showInfo" class="mt-2">
      <p class="small">Temperament: {{ temperament }}</p>
      <p class="small">Life Span: {{ lifespan }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  image: { type: String, required: true },
  breed: { type: String, required: true },
  origin: { type: String, required: true },
  temperament: { type: String, required: true },
  lifespan: { type: String, required: true }
})

const showInfo = ref(false)

function toggleInfo() {
  showInfo.value = !showInfo.value
}
</script>

<style scoped>
.dog-card {
  transition: transform 0.3s ease;
}
.dog-card:hover {
  transform: scale(1.03);
}
</style>
