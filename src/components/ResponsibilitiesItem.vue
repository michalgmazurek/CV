<template>
  <li>
    {{ responsibility.point }}
  </li>
</template>

<script setup>
defineProps({
  responsibility: {
    type: Object,
    required: true,
  },
});
</script>
