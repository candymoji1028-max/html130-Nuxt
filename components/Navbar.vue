<template>
  <!-- Bootstrap Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <div class="container-fluid">

      <!-- Brand -->
      <nuxt-link class="navbar-brand fw-bold text-white" to="/">
        My Site
      </nuxt-link>

      <!-- Mobile Toggle Button -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Collapsible Menu -->
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav ms-auto">

          <!-- Nuxt Links -->
          <li class="nav-item">
            <nuxt-link class="nav-link text-white" to="/">Home</nuxt-link>
          </li>

          <li class="nav-item">
            <nuxt-link class="nav-link text-white" to="/images">Photo Gallery</nuxt-link>
          </li>

          <li class="nav-item">
            <nuxt-link class="nav-link text-white" to="/grid">Adventure Map</nuxt-link>
          </li>

          <li class="nav-item">
            <nuxt-link class="nav-link text-white" to="/accordion">Story Moments</nuxt-link>
          </li>

          <li class="nav-item">
            <nuxt-link class="nav-link text-white" to="/countries">World  Explorer</nuxt-link>
          </li>

          <li class="nav-item">
            <nuxt-link class="nav-link text-white" to="/dogs">Dog Friends</nuxt-link>
          </li>

        </ul>
      </div>

    </div>
  </nav>
</template>

<script setup>
</script>

<style scoped>
</style>