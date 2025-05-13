<template>
  <div class="conversion-info-container">
    <!-- Aviso sobre tasas de cambio -->
    <p class="notice-text mb-2">
      <span class="font-semibold">Menor a 5000 Bolivianos: <span class="precio-texto">precio estándar</span> • 5000 Bolivianos o más: <span class="precio-texto">precio especial</span></span>
    </p>
    
    <!-- Mensaje de conversión -->
    <div class="conversion-info-box">
      <p v-if="sekAmount === '---' || bobAmount === '---'" class="description-text loading-text">
        Cargando tasas de cambio...
      </p>
      <p v-else-if="inputActivo === 'sek'" class="description-text">
        Si envías <span class="sek-amount">{{ sekAmount }}</span> coronas suecas, 
        recibes <span class="bob-amount">{{ bobAmount }}</span> bolivianos.
      </p>
      <p v-else class="description-text">
        Si deseas recibir <span class="bob-amount">{{ bobAmount }}</span> bolivianos,
        debes enviar <span class="sek-amount">{{ sekAmount }}</span> coronas suecas.
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { UMBRAL_BOB_PRECIO_ESPECIAL } from '../../constants/precios';

const props = defineProps({
  sekAmount: {
    type: String,
    required: true
  },
  bobAmount: {
    type: String,
    required: true
  },
  inputActivo: {
    type: String,
    default: 'sek',
    validator: (value) => ['sek', 'bob'].includes(value)
  }
});

// Mensaje computado que se muestra debajo del convertidor
const mensaje = computed(() => {
  // Si alguno de los valores es "---", significa que los precios no están disponibles
  if (props.sekAmount === "---" || props.bobAmount === "---") {
    return "Cargando tasas de cambio...";
  }
  
  // Si SEK está seleccionado (es valor primario)
  if (monedaActiva === 'sek') {
    // Si no hay monto, no mostrar mensaje
    if (!props.sekAmount || props.sekAmount === '0') {
      return '';
    }
    
    const tasa = obtenerTasaCambioActual(Number(props.sekAmount));
    
    // Formatear la tasa para mostrarla con mayor precisión
    const tasaFormateada = tasa.toString();
    
    // Si es precio especial (monto >= 5000 SEK)
    if (Number(props.sekAmount) >= UMBRAL_PRECIO_ESPECIAL.value) {
      return `${props.sekAmount} SEK × ${tasaFormateada} = ${props.bobAmount} BOB (Precio especial)`;
    } else {
      return `${props.sekAmount} SEK × ${tasaFormateada} = ${props.bobAmount} BOB`;
    }
  } 
  // Si BOB está seleccionado
  else {
    // Si no hay monto, no mostrar mensaje
    if (!props.bobAmount || props.bobAmount === '0') {
      return '';
    }
    
    // Determinar la tasa basada en el equivalente en SEK
    const sekEquivalente = Number(props.sekAmount);
    const tasa = obtenerTasaCambioActual(sekEquivalente);
    
    // Formatear la tasa inversa (1 BOB = X SEK)
    // Más precisión para tasas pequeñas
    const tasaInversaFormateada = (1 / tasa).toFixed(7);
    
    // Si es precio especial (equivalente en SEK >= 5000)
    if (sekEquivalente >= UMBRAL_BOB_PRECIO_ESPECIAL.value) {
      return `${props.bobAmount} BOB ÷ ${tasaFormateada} = ${props.sekAmount} SEK (Precio especial)`;
    } else {
      return `${props.bobAmount} BOB ÷ ${tasaFormateada} = ${props.sekAmount} SEK`;
    }
  }
});
</script>

<style scoped>
.conversion-info-container {
  width: 100%;
  max-width: 100%;
  text-align: center;
  margin: 4px 0 8px 0;
  padding: 0;
  box-sizing: border-box;
}

.conversion-info-box {
  width: 100%;
  max-width: 100%;
  padding: 10px 16px;
  background-color: rgba(224, 242, 241, 0.6);
  border-radius: 0.75rem;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.05);
  margin: 0 auto;
  box-sizing: border-box;
}

/* Estilos para el aviso de tasas de cambio */
.notice-text {
  font-size: 0.75rem;
  color: #3b82f6;
  margin: 0;
  line-height: 1.2;
}

.description-text {
  font-size: 0.95rem;
  font-weight: 500;
  color: #2d3748;
  margin: 0;
}

/* Estilo para el texto de carga */
.loading-text {
  color: #64748b;
  font-style: italic;
  animation: pulse 1.5s infinite;
}

.sek-amount {
  font-weight: 700;
  color: #3b82f6;
}

.bob-amount {
  font-weight: 700;
  color: #0d9488;
}

.precio-texto {
  position: relative;
  display: inline-block;
  color: #0ea5e9;
  font-weight: 600;
}
.precio-texto::before {
  content: '"';
}
.precio-texto::after {
  content: '"';
}

@keyframes pulse {
  0% { opacity: 0.7; }
  50% { opacity: 1; }
  100% { opacity: 0.7; }
}

@media (min-width: 640px) {
  .description-text {
    font-size: 1.05rem;
  }
}
</style> 