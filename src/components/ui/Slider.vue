<template>
  <div class="slider-container">
    <label v-if="label" class="slider-label">{{ label }}</label>
    <div class="slider-wrapper">
      <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        :value="modelValue"
        :disabled="disabled"
        class="slider-input"
        @input="handleInput"
        @change="handleChange"
      />
      <div class="slider-value">{{ modelValue }}</div>
    </div>
    <div v-if="error" class="slider-error">{{ error }}</div>
    <div v-if="hint" class="slider-hint">{{ hint }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Number,
    required: true
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  step: {
    type: Number,
    default: 1
  },
  label: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  },
  hint: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue', 'input', 'change']);

function handleInput(event) {
  const value = parseFloat(event.target.value);
  emit('update:modelValue', value);
  emit('input', event);
}

function handleChange(event) {
  emit('change', event);
}
</script>

<style scoped>
.slider-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.slider-label {
  font-weight: 500;
  color: var(--text-color);
}

.slider-wrapper {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.slider-input {
  flex: 1;
  -webkit-appearance: none;
  height: 6px;
  background: var(--border-color);
  border-radius: 3px;
  outline: none;
  transition: all 0.3s ease;
}

.slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  background: var(--primary-color);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.slider-input::-moz-range-thumb {
  width: 18px;
  height: 18px;
  background: var(--primary-color);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.slider-input:focus {
  box-shadow: 0 0 0 2px var(--primary-color-light);
}

.slider-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.slider-input:disabled::-webkit-slider-thumb {
  cursor: not-allowed;
}

.slider-input:disabled::-moz-range-thumb {
  cursor: not-allowed;
}

.slider-value {
  min-width: 40px;
  text-align: right;
  color: var(--text-color);
}

.slider-error {
  color: var(--error-color);
  font-size: 0.875rem;
}

.slider-hint {
  color: var(--text-color-light);
  font-size: 0.875rem;
}
</style> 