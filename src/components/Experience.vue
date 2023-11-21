<template>
  <article>
    <h2>experience</h2>
    <ExperienceItem
      v-for="experienceItem in experienceItems"
      :key="`experience-${experienceItem.id}`"
      :company-name="experienceItem.companyName"
      :position="experienceItem.position"
      :start-date="experienceItem.startDate"
      :end-date="experienceItem.endDate"
      :responsibilities="experienceItem.responsibilities"
    />
  </article>
</template>

<script setup>
import ExperienceItem from './ExperienceItem';

defineProps({
  experienceItems: {
    type: Array,
    required: true,
  },
});
</script>
