<template>
  <div class="point">
    <p class="company">
      {{ companyName }}
    </p>
    <p class="position">
      {{ position }}
    </p>
    <p class="text">
      <span class="fa fa-calendar" aria-hidden="true">{{ startDate }} - {{ endDate }}</span>
    </p>
  </div>
</template>

<script>

export default {
  name: 'EducationItem',
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
  },
};
</script>
