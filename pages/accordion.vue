<template>
  <div class="container mt-4">

    <!-- Header component with named slot-->
    <Header>
      <template #title>Boba & Moji Adventure Stories</template>
    </Header>

    <p class="fs-5">Click each section to reveal a part of their journey.</p>

    <!-- Using Bootstrap's accordion structure -->
    <!-- Loop through accordion object -->
    <div class="accordion mt-4" id="bobaAccordion">

      <div
        class="accordion-item"
        v-for="(section, key) in accordion"
        :key="key"
      >
        <!-- Accordion header-->
        <h2 class="accordion-header" :id="'heading-' + key">
          <button
            class="accordion-button"
            :class="{ collapsed: !section.show }"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#story-' + key"
          >
            <!-- Display icon and title from each section object -->
            {{ section.icon }} {{ section.title }}
          </button>
        </h2>

        <!-- Accordion content -->
        <div
          :id="'story-' + key"
          class="accordion-collapse collapse"
          :class="{ show: section.show }"
          :aria-labelledby="'heading-' + key"
          data-bs-parent="#bobaAccordion"
        >
          <div class="accordion-body">
            {{ section.content }}
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '#imports'

const accordion = ref({
  one: {
    icon: '🏠',
    title: 'The Beginning',
    content:
      'Boba and Moji begin their day in front of their cozy little home, stretching and getting ready for a new adventure. The morning air feels fresh, and Moji\'s tail wiggles with excitement as they pack their tiny backpack with snacks and treasures. Every adventure starts with a smile and a curious heart.',
    show: true
  },
  two: {
    icon: '🦋',
    title: 'Garden Discovery',
    content:
      'As they walk along the garden path, a gentle butterfly flutters above them, dancing in the sunlight. Moji tries to follow it with playful hops, while Boba laughs softly at her enthusiasm. The garden is full of tiny wonders, and every step brings a new surprise.',
    show: false
  },
  three: {
    icon: '🌳',
    title: 'Forest Adventure',
    content:
      'The forest welcomes them with tall trees and a calm breeze that rustles the leaves overhead. Moji finds a perfect stick and proudly carries it as they explore deeper into the woods. Boba enjoys the peaceful sounds of nature, feeling grateful for another beautiful moment together.',
    show: false
  }
})

//SEO metadata override
useHead({
  title: "Adventure Stories - Boba & Moji",
  meta: [
    {
      key: "description",
      name: "description",
      content: "Read Boba & Moji's adventure stories, including their beginning, garden discovery, and forest exploration."
    }
  ]
})
</script>

<style scoped>
</style>



    