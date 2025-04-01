<script setup>
// import Productos from '/src/json/archivo.json'
import { ref } from 'vue'
import { useFetch } from '../composables/useFetch'
import draggable from 'vuedraggable'
import SharedSearch from './SharedSearch.vue'

const apiInterna = '/json/archivo.json' // api interno del archivo json
const searchInput = ref('') // constante para trear los datos del buscador
const productoView = ref([])
const productosFiltrados = ref([])

useFetch(apiInterna, (json) => {
  productoView.value = json
  // productosFiltrados.value = json // mostrar todo al inicio
  const guardado = localStorage.getItem('ordenProductos')

  if (guardado) {
    try {
      const datos = JSON.parse(guardado)

      // Validamos que los IDs coincidan con los actuales
      const idsOriginales = new Set(json.map((p) => p.id))
      productosFiltrados.value = datos.filter((p) => idsOriginales.has(p.id))
    } catch {
      productosFiltrados.value = json
    }
  } else {
    productosFiltrados.value = json
  }
})

// Lógica al hacer clic en el botón
const filtrarProductos = (valorBuscado) => {
  const search = valorBuscado.toLowerCase()
  productosFiltrados.value = productoView.value.filter((prod) => {
    const nombre = prod.name.toLowerCase() // buscar productos por el nombre
    const categoria = prod.categorias.toLowerCase() // buscar produtos por categorias
    return nombre.includes(search) || categoria.includes(search)
  })
}

import { watch } from 'vue'

watch(
  productosFiltrados,
  (nuevoOrden) => {
    localStorage.setItem('ordenProductos', JSON.stringify(nuevoOrden))
  },
  { deep: true },
)

const agregarAlCarrito = (producto) => {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || []

  // Verificar si ya está en el carrito
  const existe = carrito.find((p) => p.name === producto.name)

  if (!existe) {
    carrito.push(producto)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    alert(`"${producto.name}" agregado al carrito ✅`)
  } else {
    alert(`"${producto.name}" ya está en el carrito ❗`)
  }
}

console.log(productosFiltrados)
</script>

<template>
  <SharedSearch v-model="searchInput" @search="filtrarProductos" />
  <!-- @search => nombre del emit del hijo lo agarramos y obtenemos la informacion que queremos-->
  <!-- v-model => pasamos la logica del boton al hijo para que busque-->
  <draggable v-model="productosFiltrados" item-key="id" class="padre">
    <template #item="{ element }">
      <div class="card">
        <img :src="element.img" alt="imagen" />
        <div class="info-texto">
          <h4>producto: {{ element.name }}</h4>
          <span>categoria: {{ element.categorias }}</span>
          <h4>Precio: $ {{ element.precio }}</h4>
          <h4>Stock: Unidades {{ element.stock }}</h4>
        </div>
        <button @click="agregarAlCarrito(element)">Agregar a carrito</button>
      </div>
    </template>
  </draggable>
</template>

<style scoped>
.padre {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  padding: 2rem;
  justify-items: center;
}

.card {
  width: 75%;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: #fff;
  transition: transform 0.1s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.info-texto {
  text-align: center;
  margin-bottom: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
  color: rgb(107, 108, 108);
}

.info-texto h4,
.info-texto span {
  margin: 0.3rem 0;
  font-size: 14px;
}

button {
  background-color: #008290;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.6rem 1.2rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: #005f66;
}

@media (max-width: 768px) {
  .padre {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
}

@media (max-width: 576px) {
  .padre {
    grid-template-columns: 1fr;
    padding: 0.5rem;
  }

  .card {
    width: 100%; /* ¡clave! ocupa todo el ancho de la columna */
    box-sizing: border-box; /* asegura que padding y border no rompan el 100% */
    margin: 0; /* por si hay espacio entre cards */
    padding: 1rem;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }

  .card img {
    width: 40%;
    max-height: 120px;
    /* object-fit: contain; */
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  button {
    width: auto;
    margin-top: 0.5rem;
  }

  .info-texto h4,
  .info-texto span {
    width: 100%;
    margin: 0.3rem 0;
    font-size: 10px;
  }
}
</style>
