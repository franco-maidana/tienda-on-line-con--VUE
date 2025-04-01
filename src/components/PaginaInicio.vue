<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const carruselData = [
  {
    src: './../../public/aceiteCañuelas.jpeg',
    texto: 'Aceite Cañuelas: calidad en tu cocina',
  },
  {
    src: './../../public/lecheEnPolvoSancor.jpeg',
    texto: 'Leche en Polvo Sancor: energía para tu día',
  },
  {
    src: './../../public/harinaPureza.jpeg',
    texto: 'Harina Pureza: la base de toda receta',
  },
]

const indiceActual = ref(0)
let intervalo = null

onMounted(() => {
  intervalo = setInterval(() => {
    indiceActual.value = (indiceActual.value + 1) % carruselData.length
  }, 3000)
})

onUnmounted(() => {
  clearInterval(intervalo)
})
</script>

<template>
  <div class="carrusel">
    <img :src="carruselData[indiceActual].src" alt="producto" />
    <div class="texto-carrusel">
      <h2>{{ carruselData[indiceActual].texto }}</h2>
    </div>
  </div>
</template>

<style scoped>
.carrusel {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  height: 300px;
  margin: 2rem auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.carrusel img {
  width: 60%;
  height: 100%;
  object-fit: contain;
  transition: opacity 0.5s ease-in-out;
  padding: 1rem;
}

.texto-carrusel {
  width: 40%;
  padding: 1rem 2rem;
  text-align: center;
  color: #333;
  font-family: Arial, sans-serif;
}

.texto-carrusel h2 {
  font-size: 1.4rem;
  font-weight: 500;
}

/* Responsive para celular */
@media (max-width: 768px) {
  .carrusel {
    flex-direction: column;
    height: auto;
  }

  .carrusel img {
    width: 100%;
    height: 200px;
  }

  .texto-carrusel {
    width: 100%;
    padding: 1rem;
  }

  .texto-carrusel h2 {
    font-size: 1.1rem;
  }
}
</style>
