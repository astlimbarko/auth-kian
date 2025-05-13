<template>
  <div class="admin-footer">
    <p>Envios Kian Administrativ Panel © {{ anioActual }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// Computar el año actual para el copyright
const anioActual = computed(() => new Date().getFullYear());
</script>

<style scoped>
/* Footer */
.admin-footer {
  margin-top: min(4vh, 1rem);
  text-align: center;
  flex: 0 0 auto;
}

.admin-footer p {
  font-size: 0.75rem;
  color: var(--text-light, #888);
}
</style> 