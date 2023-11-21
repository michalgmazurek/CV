<template>
  <article>
    <h2>Languages</h2>
    <div class="tag-container">
      <Tag
        v-for="languagesItem in languagesItems"
        :key="`language-${languagesItem.id}`"
        :text="languagesItem.text"
        wider
      />
    </div>
  </article>
</template>

<script>
import Tag from './Tag';

export default {
  name: 'Languages',
  components: {
    Tag,
  },
  props: {
    languagesItems: {
      type: Array,
      required: true,
    },
  },
};
</script>
