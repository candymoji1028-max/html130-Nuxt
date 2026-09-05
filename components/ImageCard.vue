<template>
  <div
    class="p-3 text-center"
    :class="{ 'border border-primary': hasBorder }"
    @click="toggleBorder"
  >
    <!-- Bootstrap class 'img-fluid' keep the image responsive -->
    <img :src="src" :alt="alt" class="img-fluid mb-2" />
    <h5>{{ title }}</h5>
  </div>
</template>


//props with src, alt, title and validation
<script setup>
import useToggleBorder from '@/composables/useToggleBorder'

const props = defineProps({
    src: { type: String, required: true },
    alt: { type: String, required: true },
    title: { type: String, required: true }
  })

const { hasBorder, toggleBorder } = useToggleBorder()
</script>

