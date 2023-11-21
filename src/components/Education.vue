<template>
  <article>
    <h2>education</h2>
    <EducationItem
      v-for="educationItem in educationItems"
      :key="`experience-${educationItem.id}`"
      :company-name="educationItem.companyName"
      :position="educationItem.position"
      :start-date="educationItem.startDate"
      :end-date="educationItem.endDate"
    />
  </article>
</template>

<script setup>
import EducationItem from './EducationItem';

defineProps({
  educationItems: {
    type: Array,
    required: true,
  },
});
</script>
