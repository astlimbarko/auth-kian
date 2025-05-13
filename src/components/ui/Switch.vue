<template>
  <label class="switch-container">
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      class="switch-input"
      @change="handleChange"
    />
    <span class="switch-slider"></span>
    <span v-if="label" class="switch-label">{{ label }}</span>
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
.switch-container {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  cursor: pointer;
  user-select: none;
}

.switch-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.switch-slider {
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  background-color: var(--border-color);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.switch-container:hover .switch-input:not(:disabled) ~ .switch-slider {
  background-color: var(--primary-color-light);
}

.switch-input:checked ~ .switch-slider {
  background-color: var(--primary-color);
}

.switch-slider:before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.switch-input:checked ~ .switch-slider:before {
  left: 22px;
}

.switch-label {
  color: var(--text-color);
  font-size: 1rem;
}

.switch-container.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
 