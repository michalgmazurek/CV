<template>
  <article>
    <p class="subheader">skills</p>
    <div class="tag__container">
      <tag
        v-for="skillsItem in skillsItems"
        :key="`skill-${skillsItem.id}`"
        :text="skillsItem.text"
      />
    </div>
  </article>
</template>

<script>

import Tag from './Tag'

export default {
  name: 'Skills',

  components: {
    Tag
  },

  props: {
    skillsItems: {
      type: Array,
      required: true
    }
  }
}
</script>
