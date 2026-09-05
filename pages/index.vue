<template>
  <div class="container mt-4">

    <!-- Header component with named slot-->
    <Header>
      <template #title>Home</template>
    </Header>

    <!-- Jumbotron -->
    <div class="p-5 mb-4 bg-light rounded-3 mt-4">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Welcome to Boba & Moji's Adventure</h1>
        <p class="fs-4">A tiny world full of big surprises.</p>

        <!-- Tooltip button -->
        <button
          class="btn btn-primary mt-3"
          data-bs-toggle="tooltip"
          title="YouTube channel coming soon!"
        >
          Watch on Youtube
        </button>
      </div>
    </div>

    <!-- Story Section -->
    <div class="container">
      <h2 class="fw-bold">Story</h2>

      <p>
        Boba and Moji are part of a creative project I'm developing into a real YouTube animation series. This site serves as an early home for their world, where I can introduce the characters, share their stories, and build out the places they explore. As the project grows, I'll expand this site with new episodes, character updates, and additional adventures.
      </p>

    </div>

    <!-- v-if v-else statement -->
    <!-- change text color based on showMessage -->
    <div class="mt-4">
      <p 
        v-if="showMessage"
        class="fw-bold message-green"
      >
        Thanks for visiting! See you next adventure!
      </p>

      <p 
        v-else 
        class="message-purple"
      >
        Click the button to reveal a message.
      </p>

      <button class="btn btn-info" @click="showMessage = !showMessage">
        Message
      </button>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const showMessage = ref(false)
</script>

<style scoped>
.message-green {
  color: green;
}
.message-purple {
  color: purple;
}
</style>



    