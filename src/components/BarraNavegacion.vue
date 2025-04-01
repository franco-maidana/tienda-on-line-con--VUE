<script setup>
import { ref } from 'vue'

const menuAbierto = ref(false)

const toggleMenu = () => {
  menuAbierto.value = !menuAbierto.value
}

const cerrarMenu = () => {
  menuAbierto.value = false
}
</script>

<template>
  <nav>
    <div class="hamburguesa" @click="toggleMenu">
      <img src="../../public/icon/menu.svg" alt="menu" />
    </div>

    <ul :class="{ abierto: menuAbierto }">
      <li><router-link to="/inicio" @click="cerrarMenu">Inicio</router-link></li>
      <li><router-link to="/productos" @click="cerrarMenu">Productos</router-link></li>
      <li><router-link to="/login" @click="cerrarMenu">Inicio de sesión</router-link></li>
      <li>
        <router-link to="/carritoDeCompras" @click="cerrarMenu">
          <img src="../../public/icon/carrito.svg" alt="carrito-de-compras" />
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: #dcd9d9;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  transition: max-height 0.8s ease-in-out;
}

nav ul li a {
  text-decoration: none;
  color: #333;
  font-size: 18px;
  transition: color 0.2s ease;
}

nav ul li a:hover {
  color: #008290;
}

.hamburguesa {
  display: none;
  cursor: pointer;
}

.hamburguesa img {
  width: 30px;
}

/* Mobile */
@media (max-width: 768px) {
  .hamburguesa {
    display: block;
    margin-bottom: 1rem;
  }

  ul {
    flex-direction: column;
    max-height: 0;
    overflow: hidden;
    padding: 0;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  ul.abierto {
    max-height: 500px;
    padding: 1rem 0;
  }

  nav {
    padding: 0;
  }

  nav ul li {
    width: 100%;
    text-align: center;
    padding: 0.75rem 0;
    border-bottom: 1px solid #eee;
    box-shadow: inset 0 -1px 3px rgba(0, 0, 0, 0.05);
  }

  nav ul li:last-child {
    border-bottom: none;
  }
}
</style>
