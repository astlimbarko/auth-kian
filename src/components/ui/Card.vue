<template>
  <div
    :class="[
      'card',
      `card-${variant}`,
      { 'card-hover': hover },
      { 'card-clickable': clickable }
    ]"
    @click="handleClick"
  >
    <div v-if="$slots.header" class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info'].includes(value)
  },
  hover: {
    type: Boolean,
    default: false
  },
  clickable: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click']);

function handleClick(event) {
  if (props.clickable) {
    emit('click', event);
  }
}
</script>

<style scoped>
.card {
  background-color: var(--background-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.card-default {
  border: 1px solid var(--border-color);
}

.card-primary {
  border: 1px solid var(--primary-color);
}

.card-secondary {
  border: 1px solid var(--secondary-color);
}

.card-success {
  border: 1px solid var(--success-color);
}

.card-danger {
  border: 1px solid var(--error-color);
}

.card-warning {
  border: 1px solid var(--warning-color);
}

.card-info {
  border: 1px solid var(--info-color);
}

.card-hover:hover {
  box-shadow: var(--shadow-md);
}

.card-clickable {
  cursor: pointer;
}

.card-header {
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border-color);
}

.card-body {
  padding: var(--spacing-md);
}

.card-footer {
  padding: var(--spacing-md);
  border-top: 1px solid var(--border-color);
}
</style> 