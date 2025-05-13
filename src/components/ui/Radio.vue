<template>
  <label class="radio-container">
    <input
      type="radio"
      :checked="modelValue === value"
      :value="value"
      :disabled="disabled"
      class="radio-input"
      @change="handleChange"
    />
    <span class="radio-checkmark"></span>
    <span v-if="label" class="radio-label">{{ label }}</span>
  </label>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    required: true
  },
  value: {
    type: [String, Number, Boolean],
    required: true
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
  emit('update:modelValue', props.value);
  emit('change', event);
}
</script>

<style scoped>
.radio-container {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  cursor: pointer;
  user-select: none;
}

.radio-input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.radio-checkmark {
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: var(--background-color);
  border: 2px solid var(--border-color);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.radio-container:hover .radio-input:not(:disabled) ~ .radio-checkmark {
  border-color: var(--primary-color);
}

.radio-input:checked ~ .radio-checkmark {
  border-color: var(--primary-color);
}

.radio-checkmark:after {
  content: '';
  position: absolute;
  display: none;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  background-color: var(--primary-color);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.radio-input:checked ~ .radio-checkmark:after {
  display: block;
}

.radio-label {
  color: var(--text-color);
  font-size: 1rem;
}

.radio-container.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style> 