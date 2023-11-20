<template>
  <div>
    <ul class="list">
      <ResponsibilitiesItem
        v-for="responsibility in responsibilities"
        :key="`${companyName}-${responsibility.id}`"
        :responsibility="responsibility"
      />
    </ul>
  </div>
</template>

<script>

import ResponsibilitiesItem from './ResponsibilitiesItem';

export default {
  name: 'Responsibilities',
  components: {
    ResponsibilitiesItem,
  },
  props: {
    responsibilities: {
      type: Array,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
  },
};
</script>
