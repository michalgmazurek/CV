<template>
  <div class="point">
    <h3>
      {{ companyName }}
    </h3>
    <h4>
      {{ position }}
    </h4>
    <p class="text">
      <span class="fa fa-calendar" aria-hidden="true">
        {{ startDate }} - {{ endDate }}
      </span>
    </p>
  </div>
</template>

<script setup>
defineProps({
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
});
</script>
