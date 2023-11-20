<template>
  <article>
    <p class="subheader">Languages</p>
    <div class="tag__container">
      <tag
        v-for="languagesItem in languagesItems"
        :key="`language-${languagesItem.id}`"
        :text="languagesItem.text"
        :wider="true"
      />
    </div>
  </article>
</template>

<script>

import Tag from './Tag'

export default {
  name: 'Languages',

  components: {
    Tag
  },

  props: {
    languagesItems: {
      type: Array,
      required: true
    }
  }
}
</script>
