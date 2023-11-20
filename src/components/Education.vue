<template>
  <article>
    <p class="subheader">education</p>
    <education-item
      v-for="educationItem in educationItems"
      :key="`experience-${educationItem.id}`"
      :company-name="educationItem.companyName"
      :position="educationItem.position"
      :start-date="educationItem.startDate"
      :end-date="educationItem.endDate"
    />
  </article>
</template>

<script>

import EducationItem from './EducationItem'

export default {
  name: 'Education',

  components: {
    EducationItem
  },

  props: {
    educationItems: {
      type: Array,
      required: true
    }
  }
}
</script>
