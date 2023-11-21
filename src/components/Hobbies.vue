<template>
  <article>
    <h2>Hobbies</h2>
    <div class="tag-container">
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
