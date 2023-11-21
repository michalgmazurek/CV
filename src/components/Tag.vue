<template>
  <div :class="tagClass">
    {{ text }}
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  wider: Boolean,
});

const tagClass = computed(() => (props.wider ? 'tag tag--wider' : 'tag'));
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

  &__container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-left: -7px;
    margin-right: -7px;
  }
}
</style>
