<template>
  <div v-if="error" class="error-boundary">
    <h2>¡Ups! Algo salió mal</h2>
    <p>{{ error.message }}</p>
    <button @click="resetError" class="retry-button">
      Intentar de nuevo
    </button>
  </div>
  <slot v-else></slot>
</template>

<script setup>
import { ref } from 'vue';

const error = ref(null);

function handleError(err) {
  error.value = err;
  console.error('Error capturado:', err);
}

function resetError() {
  error.value = null;
}

// Exponer el método para capturar errores
defineExpose({
  handleError
});
</script>

<style scoped>
.error-boundary {
  padding: var(--spacing-lg);
  text-align: center;
  background-color: var(--background-color-secondary);
  border-radius: var(--border-radius);
  margin: var(--spacing-lg);
}

.error-boundary h2 {
  color: var(--error-color);
  margin-bottom: var(--spacing-md);
}

.error-boundary p {
  color: var(--text-color-light);
  margin-bottom: var(--spacing-lg);
}

.retry-button {
  background-color: var(--primary-color);
  color: white;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--border-radius);
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.retry-button:hover {
  background-color: var(--secondary-color);
}
</style> 