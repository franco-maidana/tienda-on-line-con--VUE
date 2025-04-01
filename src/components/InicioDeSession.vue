<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const error = ref('')
const exito = ref('')

const iniciarSesion = () => {
  error.value = ''
  exito.value = ''

  // Validaciones básicas
  if (!email.value || !password.value) {
    error.value = 'Por favor, completa todos los campos.'
    return
  }

  // Simulación de inicio de sesión (reemplazá esto con llamada al backend si tenés)
  if (email.value === 'admin@gmail.com' && password.value === '1234') {
    exito.value = 'Inicio de sesión exitoso 🎉'
    localStorage.setItem('usuario', JSON.stringify({ email: email.value }))
    // Podrías redirigir a otra vista con router.push si estás usando Vue Router
  } else {
    error.value = 'Email o contraseña incorrectos 😢'
  }
}
</script>

<template>
  <section class="login-container">
    <h1>🔐 Inicio de Sesión</h1>

    <form @submit.prevent="iniciarSesion">
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" type="email" v-model="email" placeholder="ejemplo@gmail.com" />
      </div>

      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input id="password" type="password" v-model="password" placeholder="••••••" />
      </div>

      <button type="submit">Ingresar</button>

      <p v-if="error" class="error">{{ error }}</p>
      <p v-if="exito" class="exito">{{ exito }}</p>
    </form>
  </section>
</template>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 3rem auto;
  padding: 2rem;
  background: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.3rem;
  color: #555;
}

input {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

button {
  padding: 0.7rem;
  background-color: #00b894;
  border: none;
  color: white;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background-color: #019875;
}

.error {
  color: #e74c3c;
  margin-top: 1rem;
  text-align: center;
}

.exito {
  color: #2ecc71;
  margin-top: 1rem;
  text-align: center;
}
</style>
