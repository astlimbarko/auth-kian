<template>
  <div class="select-container">
    <label v-if="label" class="select-label">{{ label }}</label>
    <div class="select-wrapper">
      <select
        :value="modelValue"
        :disabled="disabled"
        class="select-input"
        @change="handleChange"
      >
        <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          :disabled="option.disabled"
        >
          {{ option.label }}
        </option>
      </select>
      <div class="select-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
    <div v-if="error" class="select-error">{{ error }}</div>
    <div v-if="hint" class="select-hint">{{ hint }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  options: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(
        (option) =>
          typeof option === 'object' &&
          'value' in option &&
          'label' in option
      );
    }
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
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

const emit = defineEmits(['update:modelValue', 'change']);

function handleChange(event) {
  emit('update:modelValue', event.target.value);
  emit('change', event);
}
</script>

<style scoped>
.select-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.select-label {
  font-weight: 500;
  color: var(--text-color);
}

.select-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.select-input {
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  padding-right: calc(var(--spacing-md) + 16px);
  font-size: 1rem;
  color: var(--text-color);
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  appearance: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.select-input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px var(--primary-color-light);
}

.select-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.select-icon {
  position: absolute;
  right: var(--spacing-md);
  pointer-events: none;
  color: var(--text-color-light);
}

.select-error {
  color: var(--error-color);
  font-size: 0.875rem;
}

.select-hint {
  color: var(--text-color-light);
  font-size: 0.875rem;
}
</style> 