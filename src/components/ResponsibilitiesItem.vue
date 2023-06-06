<template>
  <li>
    {{ responsibility.point }}
  </li>
</template>

<script>

export default {
  name: 'ResponsibilitiesItem',

  props: {
    responsibility: {
      type: Object,
      required: true
    }
  }
}
</script>
