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
    <Responsibilities
      :company-name="companyName"
      :responsibilities="responsibilities"
    />
  </div>
</template>

<script setup>
import Responsibilities from './Responsibilities';

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
  responsibilities: {
    type: Array,
    required: true,
  },
});
</script>
