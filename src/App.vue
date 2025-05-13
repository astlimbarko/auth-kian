<script setup>
// No necesitamos importar nada aquí
</script>

<template>
  <router-view></router-view>
</template>

<style>
/* Estilos globales */
body {
  font-family: 'Poppins', 'Inter', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  background-color: white;
  color: #000000;
}

/* Estilos para inputs y selects */
input, select, textarea {
  background-color: white !important;
  color: rgb(51, 51, 51) !important;
  border: 1px solid #ccc !important;
}

input:focus, select:focus, textarea:focus {
  border-color: #0073e6 !important;
  outline: none !important;
  box-shadow: 0 0 0 2px rgba(0, 115, 230, 0.2) !important;
}

/* Reglas globales para SVG para controlar su tamaño */
svg {
  max-width: 100%;
  max-height: 100%;
  display: inline-block;
  vertical-align: middle;
}

/* Clases específicas para tamaños de iconos con !important para asegurar que se apliquen */
.w-3, .h-3 {
  width: 0.75rem !important;
  height: 0.75rem !important;
}

.w-4, .h-4 {
  width: 1rem !important;
  height: 1rem !important;
}

.w-5, .h-5 {
  width: 1.25rem !important;
  height: 1.25rem !important;
}

.w-6, .h-6 {
  width: 1.5rem !important;
  height: 1.5rem !important;
}

.w-7, .h-7 {
  width: 1.75rem !important;
  height: 1.75rem !important;
}

/* Asegurar que las clases de flex e inline-flex respeten los tamaños */
.inline-flex svg, 
.flex svg {
  flex-shrink: 0;
}

/* Material icons ajustados para coincidir con los tamaños SVG */
.material-icons {
  font-size: 1.25rem;
  line-height: 1;
  vertical-align: middle;
  font-display: block; /* Evitar FOUT (Flash of Unstyled Text) */
}

/* Estilos con mayor especificidad para prevenir interferencias */
.min-h-screen {
  min-height: 100vh !important;
}

.rounded-2xl, .rounded-3xl {
  overflow: hidden;
  isolation: isolate; /* Crear nuevo contexto de apilamiento */
}

/* Asegurarse de que no haya padding o margin en el contenedor raíz */
#app {
  margin: 0;
  padding: 0;
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

/* Asegurarse de que el router-view no tenga márgenes */
#app > * {
  margin: 0;
  padding: 0;
}
</style>
