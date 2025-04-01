<script setup>
import { ref, onMounted } from 'vue'

const carrito = ref([])

onMounted(() => {
  const datos = JSON.parse(localStorage.getItem('carrito')) || []

  // Asegurarse de que cada producto tenga una cantidad definida
  carrito.value = datos.map((prod) => ({
    ...prod,
    cantidad: prod.cantidad || 1,
  }))
})

// Eliminar producto individual
const eliminarProducto = (index) => {
  carrito.value.splice(index, 1)
  actualizarLocalStorage()
}

// Vaciar todo el carrito
const vaciarCarrito = () => {
  carrito.value = []
  localStorage.removeItem('carrito')
}

// Total del carrito
const totalCarrito = () => {
  return carrito.value.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
}

// Actualiza localStorage
const actualizarLocalStorage = () => {
  localStorage.setItem('carrito', JSON.stringify(carrito.value))
}

// Cambiar cantidad (sumar o restar)
const cambiarCantidad = (index, delta) => {
  const producto = carrito.value[index]
  const nuevaCantidad = producto.cantidad + delta
  if (nuevaCantidad >= 1 && nuevaCantidad <= producto.stock) {
    producto.cantidad = nuevaCantidad
    actualizarLocalStorage()
  }
}
</script>

<template>
  <section class="carrito-container">
    <h1>🛒 Tu Carrito de Compras</h1>

    <div v-if="carrito.length === 0" class="carrito-vacio">
      <p>Tu carrito está vacío 😥</p>
    </div>

    <div v-else>
      <div class="productos-lista">
        <div class="producto" v-for="(prod, index) in carrito" :key="index">
          <img :src="prod.img" alt="Producto" />
          <div class="info">
            <h2>{{ prod.name }}</h2>
            <p>💲 Precio: ${{ prod.precio }}</p>
            <p>📦 Stock disponible: {{ prod.stock }}</p>

            <div class="cantidad">
              <button @click="cambiarCantidad(index, -1)">➖</button>
              <span>{{ prod.cantidad }}</span>
              <button @click="cambiarCantidad(index, 1)">➕</button>
            </div>

            <p>
              <strong>Subtotal: ${{ prod.precio * prod.cantidad }}</strong>
            </p>

            <button class="btn-eliminar" @click="eliminarProducto(index)">Eliminar</button>
          </div>
        </div>
      </div>

      <div class="carrito-total">
        <h2>Total a pagar: ${{ totalCarrito() }}</h2>
        <button class="btn-vaciar" @click="vaciarCarrito">Vaciar carrito 🗑️</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.carrito-container {
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  font-family: 'Arial', sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.carrito-vacio {
  text-align: center;
  font-size: 1.2rem;
  color: #888;
}

.productos-lista {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.producto {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.producto img {
  width: 100px;
  height: auto;
  border-radius: 8px;
}

.info {
  flex: 1;
}

.info h2 {
  margin: 0;
  font-size: 1.3rem;
  color: #222;
}

.info p {
  margin: 0.4rem 0;
  color: #444;
}

.cantidad {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
}

.cantidad button {
  background-color: #ddd;
  border: none;
  padding: 0.3rem 0.7rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.cantidad span {
  font-size: 1rem;
  min-width: 20px;
  text-align: center;
}

.btn-eliminar {
  margin-top: 0.5rem;
  padding: 0.4rem 1rem;
  background-color: #e74c3c;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.btn-eliminar:hover {
  background-color: #c0392b;
}

.carrito-total {
  text-align: center;
  margin-top: 2rem;
}

.carrito-total h2 {
  margin-bottom: 1rem;
}

.btn-vaciar {
  padding: 0.6rem 1.2rem;
  background-color: #555;
  border: none;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s ease;
}

.btn-vaciar:hover {
  background-color: #333;
}

@media (max-width: 768px) {
  .producto {
    flex-direction: column;
    text-align: center;
  }

  .producto img {
    width: 80px;
  }
}
</style>
