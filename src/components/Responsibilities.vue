<template>
  <div>
    <ul>
      <ResponsibilitiesItem
        v-for="responsibility in responsibilities"
        :key="`${companyName}-${responsibility.id}`"
        :responsibility="responsibility"
      />
    </ul>
  </div>
</template>

<script setup>
import ResponsibilitiesItem from './ResponsibilitiesItem';

defineProps({
  responsibilities: {
    type: Array,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
});
</script>
