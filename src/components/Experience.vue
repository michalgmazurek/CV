<template>
  <article>
    <h2>Experience</h2>
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

<script>
import ExperienceItem from './ExperienceItem';

export default {
  name: 'Experience',
  components: {
    ExperienceItem,
  },
  props: {
    experienceItems: {
      type: Array,
      required: true,
    },
  },
};
</script>
