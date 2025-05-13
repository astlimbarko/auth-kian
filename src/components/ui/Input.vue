<template>
  <div class="input-container">
    <label v-if="label" :for="id" class="input-label">{{ label }}</label>
    <div class="input-wrapper">
      <span v-if="prefix" class="input-prefix">{{ prefix }}</span>
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        :min="min"
        :max="max"
        :step="step"
        class="input-field"
        :class="{
          'input-error': error,
          'input-prefix-padding': prefix,
          'input-suffix-padding': suffix
        }"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <span v-if="suffix" class="input-suffix">{{ suffix }}</span>
    </div>
    <span v-if="error" class="input-error-message">{{ error }}</span>
    <span v-if="hint && !error" class="input-hint">{{ hint }}</span>
  </div>
</template>

<script setup>
import { nanoid } from 'nanoid';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text',
    validator: (value) =>
      [
        'text',
        'password',
        'email',
        'number',
        'tel',
        'url',
        'search',
        'date',
        'time',
        'datetime-local'
      ].includes(value)
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  prefix: {
    type: String,
    default: ''
  },
  suffix: {
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
  },
  readonly: {
    type: Boolean,
    default: false
  },
  maxlength: {
    type: Number,
    default: null
  },
  min: {
    type: Number,
    default: null
  },
  max: {
    type: Number,
    default: null
  },
  step: {
    type: Number,
    default: null
  }
});

const emit = defineEmits([
  'update:modelValue',
  'input',
  'change',
  'focus',
  'blur'
]);

const id = nanoid();

function handleInput(event) {
  emit('update:modelValue', event.target.value);
  emit('input', event);
}

function handleChange(event) {
  emit('change', event);
}

function handleFocus(event) {
  emit('focus', event);
}

function handleBlur(event) {
  emit('blur', event);
}
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.input-label {
  color: var(--text-color);
  font-size: 0.875rem;
  font-weight: 500;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-field {
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: 1rem;
  color: var(--text-color);
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  transition: all 0.3s ease;
}

.input-field:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 2px var(--primary-color-light);
}

.input-field:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.input-field:read-only {
  background-color: var(--background-color-light);
}

.input-error {
  border-color: var(--error-color);
}

.input-error:focus {
  box-shadow: 0 0 0 2px var(--error-color-light);
}

.input-prefix,
.input-suffix {
  position: absolute;
  color: var(--text-color-light);
  font-size: 1rem;
}

.input-prefix {
  left: var(--spacing-md);
}

.input-suffix {
  right: var(--spacing-md);
}

.input-prefix-padding {
  padding-left: calc(var(--spacing-md) * 2 + 1em);
}

.input-suffix-padding {
  padding-right: calc(var(--spacing-md) * 2 + 1em);
}

.input-error-message {
  color: var(--error-color);
  font-size: 0.875rem;
}

.input-hint {
  color: var(--text-color-light);
  font-size: 0.875rem;
}
</style> 