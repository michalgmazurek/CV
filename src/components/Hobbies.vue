<template>
  <article>
    <p class="subheader">
      Hobbies
    </p>
    <div class="tag__container">
      <Tag
        v-for="hobbiesItem in hobbiesItems"
        :key="`hobby-${hobbiesItem.id}`"
        :text="hobbiesItem.text"
      />
    </div>
  </article>
</template>

<script>

import Tag from './Tag';

export default {
  name: 'Hobbies',
  components: {
    Tag,
  },
  props: {
    hobbiesItems: {
      type: Array,
      required: true,
    },
  },
};
</script>
