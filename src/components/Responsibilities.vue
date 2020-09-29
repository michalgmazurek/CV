<template>
  <div>
    <ul class="list">
      <responsibilities-item
        v-for="(responsibility, n) in responsibilities"
        :key="`${companyName}-${n}`"
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
    }
  }
}
</script>
