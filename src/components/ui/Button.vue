<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      'button',
      `button-${variant}`,
      `button-${size}`,
      { 'button-full-width': fullWidth },
      { 'button-loading': loading }
    ]"
    @click="handleClick"
  >
    <span v-if="loading" class="button-spinner"></span>
    <span v-else class="button-content">
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit', 'reset'].includes(value)
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) =>
      ['primary', 'secondary', 'outline', 'text', 'danger'].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click']);

function handleClick(event) {
  if (!props.disabled && !props.loading) {
    emit('click', event);
  }
}
</script>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  font-weight: 500;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  outline: none;
}

.button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Variants */
.button-primary {
  background-color: var(--primary-color);
  color: white;
}

.button-primary:hover:not(:disabled) {
  background-color: var(--primary-color-dark);
}

.button-secondary {
  background-color: var(--secondary-color);
  color: white;
}

.button-secondary:hover:not(:disabled) {
  background-color: var(--secondary-color-dark);
}

.button-outline {
  background-color: transparent;
  border: 1px solid var(--border-color);
  color: var(--text-color);
}

.button-outline:hover:not(:disabled) {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.button-text {
  background-color: transparent;
  color: var(--text-color);
}

.button-text:hover:not(:disabled) {
  color: var(--primary-color);
}

.button-danger {
  background-color: var(--error-color);
  color: white;
}

.button-danger:hover:not(:disabled) {
  background-color: var(--error-color-dark);
}

/* Sizes */
.button-small {
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: 0.875rem;
}

.button-medium {
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: 1rem;
}

.button-large {
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: 1.125rem;
}

/* Full width */
.button-full-width {
  width: 100%;
}

/* Loading state */
.button-loading {
  cursor: wait;
}

.button-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style> 