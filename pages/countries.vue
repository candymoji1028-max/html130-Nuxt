//fetch country data
<template>
  <div class="container mt-4">

    <Header>
      <template #title>Explore the World</template>
    </Header>

    <p class="fs-5">
      These are some countries Boba & Moji dream of visiting in future adventures.
    </p>

    <!-- Loading message -->
    <div v-if="loading" class="mt-4">
      <p class="fw-bold">Loading countries...</p>
    </div>

    <!-- Countries Grid-->
    <div v-else class="row g-4 mt-4">
      <div
        class="col-12 col-sm-6 col-md-4 col-lg-3"
        v-for="country in countries"
        :key="country.name"
      >
        <GridBox>
          <div class="p-3 border">
            <img :src="country.flags.png" class="img-fluid mb-2" />
            <h5>{{ country.name }}</h5>
            <p>Region: {{ country.region }}</p>
            <p>Capital: {{ country.capital }}</p>

            <!-- Toggle Button -->
            <button
              class="btn btn-primary btn-sm mt-s"
              @click="country.show = !country.show"
            >
            {{ country.show ? 'Hide Details' : 'Show Details' }}
            </button>

            <!--Extra Info -->
            <div v-if="country.show" class="mt-2">
              <p class="small">Population: {{ country.population.toLocaleString() }}</p>
              <p class="small">Area: {{ country.area.toLocaleString() }}   km²</p>
            </div>
          </div>
        </GridBox>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const countries = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch("https://countries.dev/region/europe")
    const data = await res.json()

    countries.value = data.slice(0, 20)
  } catch (error) {
    console.error("Error fetching countries:", error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
img {
  border-radius: 6px;
}
</style>