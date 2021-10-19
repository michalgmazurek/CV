<template>
  <article>
    <p class="subheader">skills</p>
    <div class="tag__container">
      <tag
        v-for="(SkillsItem, n) in SkillsItems"
        :key="`skill-${n}`"
        :text="SkillsItem.text"
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
    SkillsItems: {
      type: Array,
      required: true,
    },
  }
}
</script>
