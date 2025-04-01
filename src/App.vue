<script setup>
import BarraNavegacion from './components/BarraNavegacion.vue'
import FinalPagina from './components/FinalPagina.vue'
</script>

<template>
  <BarraNavegacion />
  <router-view />
  <FinalPagina />
</template>

<style scoped></style>
