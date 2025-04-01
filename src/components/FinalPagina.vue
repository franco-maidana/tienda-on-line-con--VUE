<script setup></script>

<template>
  <footer class="footer-padre">
    <div class="footer-1">
      <div>
        <h1>Atencion al Cliente</h1>
        <h2>Contactos</h2>
        <ul>
          <li>Nosotros</li>
          <li>Metodo de entregas</li>
          <li>Reclamos</li>
        </ul>
      </div>
    </div>
    <div class="footer-3">
      <h1>Redes Sociales</h1>
      <div>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
    </div>
    <div class="footer-copy">&copy; 2025 Franco Maidana. Todos los derechos reservados.</div>
  </footer>
</template>

<style scoped>
.footer-padre {
  background-color: #dcd9d9; /* mismo que el nav */
  color: #333;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

.footer-padre h2 {
  margin-top: 0.5rem;
  font-size: 1.2rem;
  color: #333;
}

.footer-padre ul {
  list-style: none;
  padding: 0;
}

.footer-padre li {
  margin: 0.4rem 0;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
}

.footer-padre li:hover {
  color: #00bcd4;
}

.footer-1,
.footer-3 {
  flex: 1 1 300px;
  max-width: 400px;
}

form div label {
  margin-top: 5px;
}

.footer-copy {
  width: 100%;
  text-align: center;
  padding-top: 1rem;
  margin-top: 2rem;
  border-top: 1px solid #aaa;
  font-size: 0.9rem;
  color: #666;
  letter-spacing: 1px;
}

@media (max-width: 1200px) {
  .footer-padre {
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }

  .footer-1,
  .footer-3 {
    flex: 1 1 100%;
    max-width: 600px;
    text-align: center;
  }

  .footer-1 h1,
  .footer-3 h1 {
    font-size: 24px;
  }

  .footer-1 ul,
  .footer-3 ul {
    padding-left: 0;
  }

  .footer-1 ul li,
  .footer-3 ul li {
    letter-spacing: 1.5px;
    margin-bottom: 10px;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .footer-padre {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-1,
  .footer-3 {
    width: 100%;
  }

  .footer-1 h1,
  .footer-3 h1 {
    font-size: 20px;
  }

  .footer-1 ul li,
  .footer-3 div ul li {
    margin-top: 20px;
    letter-spacing: 1px;
  }
}
</style>
