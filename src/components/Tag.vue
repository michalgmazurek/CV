<template>
  <div :class="tagClass">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    text: {
      type: String,
      required: true,
    },
    wider: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    tagClass() {
      return this.wider ? 'tag tag--wider' : 'tag';
    },
  },
};
</script>

<style lang="scss" scoped>
.tag {
  width: 100px;
  height: 30px;
  border-radius: 10px;
  text-align: center;
  line-height: 30px;
  font-weight: 600;
  font-size: 13px;
  background-color: #eeeeee;
  margin: 8px;
  display: block;

  &--wider {
    width: 150px;
  }
}
</style>
