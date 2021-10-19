<template>
  <article>
    <p class="subheader">education</p>
    <education-item
      v-for="(EducationItem, n) in EducationItems"
      :key="`experience-${EducationItem.companyName}-${n}`"
      :company-name="EducationItem.companyName"
      :position="EducationItem.position"
      :start-date="EducationItem.startDate"
      :end-date="EducationItem.endDate"
    />
  </article>
</template>

<script>

import EducationItem from './EducationItem';

export default {
  name: 'Education',

  components: {
    EducationItem,
  },

  props: {
    EducationItems: {
      type: Array,
      required: true,
    },
  }
}
</script>
