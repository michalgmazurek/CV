<template>
  <article>
    <h2>Skills</h2>
    <div class="tag-container">
      <Tag
        v-for="skillsItem in skillsItems"
        :key="`skill-${skillsItem.id}`"
        :text="skillsItem.text"
      />
    </div>
  </article>
</template>

<script>
import Tag from './Tag';

export default {
  name: 'Skills',
  components: {
    Tag,
  },
  props: {
    skillsItems: {
      type: Array,
      required: true,
    },
  },
};
</script>
