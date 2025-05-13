<template>
  <label class="checkbox-container">
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      class="checkbox-input"
      @change="handleChange"
    />
    <span class="checkbox-checkmark"></span>
    <span v-if="label" class="checkbox-label">{{ label }}</span>
  </label>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  label: {
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
  emit('update:modelValue', event.target.checked);
  emit('change', event);
}
</script>

<style scoped>
.checkbox-container {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  cursor: pointer;
  user-select: none;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkbox-checkmark {
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: var(--background-color);
  border: 2px solid var(--border-color);
  border-radius: 3px;
  transition: all 0.3s ease;
}

.checkbox-container:hover .checkbox-input:not(:disabled) ~ .checkbox-checkmark {
  border-color: var(--primary-color);
}

.checkbox-input:checked ~ .checkbox-checkmark {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

.checkbox-checkmark:after {
  content: '';
  position: absolute;
  display: none;
  left: 5px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-input:checked ~ .checkbox-checkmark:after {
  display: block;
}

.checkbox-label {
  color: var(--text-color);
  font-size: 1rem;
}

.checkbox-container.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style> 