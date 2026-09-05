<template>
  <header class="bg-dark text-white p-3 mb-4">
    <!-- Named slot 'title'allows pages to pass custom header text -->
    <h2>
      <slot name="title">Default Page Title</slot>
    </h2>
  </header>
</template>

<script setup>
</script>
