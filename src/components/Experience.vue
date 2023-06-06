<template>
  <article>
    <p class="subheader">experience</p>
    <experience-item
      v-for="(experienceItem, n) in experienceItems"
      :key="`experience-${experienceItem.companyName}-${n}`"
      :company-name="experienceItem.companyName"
      :position="experienceItem.position"
      :start-date="experienceItem.startDate"
      :end-date="experienceItem.endDate"
      :responsibilities="experienceItem.responsibilities"
    />
  </article>
</template>

<script>

import ExperienceItem from './ExperienceItem'

export default {
  name: 'Experience',

  components: {
    ExperienceItem
  },

  props: {
    experienceItems: {
      type: Array,
      required: true
    }
  }
}
</script>
