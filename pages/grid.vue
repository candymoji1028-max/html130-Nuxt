<template>
  <div class="container mt-4">

    <!-- Header component with named slot-->
    <Header>
      <template #title>Boba & Moji Adventure Map</template>
    </Header>

    <p class="fs-5">This adventure map outlines the locations I plan to expand into future episodes.</p>

    <!-- Grid System -->
    <!-- Using Bootstrap's responsive grid to display each box -->
    <!-- Loop through gridBoxes and pass content into GridBox via slot -->
    <div class="row g-4 mt-4">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
        v-for="(box, index) in gridBoxes"
        :key="index"
      >
        <!-- GridBox component -->
        <GridBox>
          <!-- Display the icon, title -->
          <span class="fs-1">{{ box.icon }}</span>
          <p class="fw-bold mt-2">{{ box.title }}</p>
          <p class="small">{{ box.description }}</p>
        </GridBox>
      </div>
    </div>

  </div>
</template>

<script setup>
const gridBoxes = [
  {
    icon: '🏠',
    title: 'Home Base',
    description: 'Where Boba and Moji begin every adventure.'
  },
  {
    icon: '🦋',
    title: 'Garden Path',
    description: 'Butterflies flutter around as they explore.'
  },
  {
    icon: '🐟',
    title: 'Riverbank',
    description: 'A peaceful place to watch fish swim.'
  },
  {
    icon: '🐰',
    title: 'Meadow Friends',
    description: 'Bunnies hop over to greet them.'
  },
  {
    icon: '🌳',
    title: 'Forest Trail',
    description: 'Tall trees and quiet paths.'
  },
  {
    icon: '🌈',
    title: 'Adventure Spot',
    description: 'A new surprise every day.'
  }
]
</script>

<style scoped>
.grid-box {
  border-radius: 8px;
}
</style>