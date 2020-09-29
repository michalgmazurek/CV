<template>
  <div :class="tagClass">{{ text }}</div>
</template>

<script>

export default {
  name: 'Tag',

  computed: {
    tagClass() {
      if (this.wider) {
        return 'tag tag--wider';
      }

      return 'tag';
    },
  },

  props: {
    text: {
      type: String,
      required: true,
    },
    wider: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
}
</script>
