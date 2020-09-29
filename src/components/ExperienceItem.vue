<template>
  <div class="point">
    <p class="company">{{ companyName }}</p>
    <p class="position">{{ position }}</p>
    <p class="text">
      <span class="fa fa-calendar" aria-hidden="true">{{ startDate }} - {{ endDate }}</span>
    </p>
    <responsibilities
      :company-name="companyName"
      :responsibilities="responsibilities"
    />
  </div>
</template>

<script>

import Responsibilities from './Responsibilities';

export default {
  name: 'ExperienceItem',

  components: {
    Responsibilities,
  },

  props: {
    companyName: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    responsibilities: {
      type: Array,
      required: true,
    }
  },
}
</script>
