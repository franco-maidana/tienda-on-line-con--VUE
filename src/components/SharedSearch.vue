<script setup>
const model = defineModel() // agarra automaticamente lo que le pasa el padre y le podemos cambiar el nombre
const emit = defineEmits(['search']) // envia al padre el resultado

const handleSearch = () => {
  emit('search', model.value)
}
</script>

<template>
  <div class="search">
    <input v-model="model" type="text" placeholder="Buscar Producto" />
    <button type="submit" @click="handleSearch">🔎</button>
  </div>
</template>

<style scoped>
.search {
  width: 100%;
  max-width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d9d9d9;
  padding: 0.5rem;
  margin: 1rem auto; /* <-- centrado horizontal con margen arriba y abajo */
  border-radius: 8px;
}

.search input {
  width: 100%;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
}
</style>
