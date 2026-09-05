<template>
  <div class="card p-3 border rounded bg-light">
    <!-- Slot allows any content to be inserted into the box -->
    <slot></slot>
  </div>
</template>

<script setup>
</script>

<style scoped>
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.03);
}
</style>