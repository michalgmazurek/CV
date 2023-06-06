<template>
  <article>
    <p class="subheader">Languages</p>
    <div class="tag__container">
      <tag
        v-for="(LanguagesItem, n) in LanguagesItems"
        :key="`language-${n}`"
        :text="LanguagesItem.text"
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
    LanguagesItems: {
      type: Array,
      required: true
    }
  }
}
</script>
