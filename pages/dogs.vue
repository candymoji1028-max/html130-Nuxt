<template>
  <div class="container mt-4">

    <Header>
      <template #title>Moji's Dog Friends</template>
    </Header>

    <p class="fs-5">
      These are some dog friends Moji discovered from around the world!
    </p>

    <div v-if="loading" class="mt-4">
      <p class="fw-bold">Loading dogs...</p>
    </div>

    <!-- List of dogs once API data is loaded -->
    <div v-else class="row g-4 mt-4">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3"
        v-for="dog in dogs"
        :key="dog.id"
      >
        <!-- Passing API data into DogCard component -->
        <DogCard
          :image="dog.image.url"
          :breed="dog.name"
          :origin="dog.origin || 'Unknown Origin'"
          :temperament="dog.temperament || 'Unknown Temperament'"
          :lifespan="dog.life_span || 'Unknown'"
        />
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const dogs = ref([])
const loading = ref(true)

/* Fetch dog breed data from TheDogAPI when page loads */
onMounted(async () => {
  try {
    const res = await fetch("https://api.thedogapi.com/v1/breeds", {
      headers: {
        "x-api-key": "live_RtK6vugK4yJ6ugNySgqSaq3GZacanzzkIheqCi16Ws1q4w6TR81mFEDAAA7yPRIw"
      }
    })
    /* Convert response to JSON */
    const data = await res.json()

    /* List 12 dogs */
    dogs.value = data.slice(0, 12)
  } catch (error) {
    console.error("Error fetching dogs:", error)
  } finally {
    /* Hide loading message */
    loading.value = false
  }
})
</script>
