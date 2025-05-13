<template>
  <div class="footer-text">
     
    <span class="contacto">WhatsApp: 
      <a href="https://wa.me/46722729763" class="telefono" target="_blank" rel="noopener" @click="abrirWhatsApp('46722729763')"><strong>+46 72 2729763</strong></a> | 
      <a href="https://wa.me/59178987891" class="telefono" target="_blank" rel="noopener" @click="abrirWhatsApp('59178987891')"><strong>+591 789 87891</strong></a>
    </span>
  </div>
</template>

<script setup>
// Función para abrir WhatsApp
function abrirWhatsApp(numero) {
  // Simplemente abrir en una nueva ventana sin interferir con eventos
  const url = `https://wa.me/${numero}`;
  window.open(url, '_blank', 'noopener');
  
  // No prevenir el comportamiento predeterminado ni detener la propagación
  return true;
}
</script>

<style scoped>
.footer-text {
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: #777;
  text-align: center;
  width: 100%;
  padding-bottom: 0.5rem;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.2px;
}

.copyright {
  color: #555;
}

.contacto {
  color: #666;
}

.telefono {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.telefono:hover {
  color: #3073ad;
  text-decoration: underline;
}

strong {
  font-weight: 500;
}

@media (max-width: 640px) {
  .footer-text {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
}

.pie-pagina {
  background-color: #f8f9fa;
  padding: 0.5rem 1rem;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
  border-top: 1px solid #e9ecef;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: auto;
  min-height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: env(safe-area-inset-bottom);
}

/* Ajustes específicos para móvil y tablet */
@media (max-width: 1024px) {
  .pie-pagina {
    padding: 0.3rem 1rem;
    min-height: 1.8rem;
    padding-bottom: max(0.3rem, env(safe-area-inset-bottom));
  }
  
  .footer-text {
    font-size: 0.75rem;
    margin-top: 0;
    padding-bottom: 0;
  }
}

/* Ajustes para iOS */
@supports (-webkit-touch-callout: none) {
  .pie-pagina {
    padding-bottom: max(0.3rem, env(safe-area-inset-bottom));
  }
}
</style> 