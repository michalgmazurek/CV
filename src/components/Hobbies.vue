<template>
  <article>
    <p class="subheader">Hobbies</p>
    <div class="tag__container">
      <tag
        v-for="(HobbiesItem, n) in HobbiesItems"
        :key="`hobby-${n}`"
        :text="HobbiesItem.text"
      />
    </div>
  </article>
</template>

<script>

import Tag from './Tag'

export default {
  name: 'Hobbies',

  components: {
    Tag
  },

  props: {
    HobbiesItems: {
      type: Array,
      required: true
    }
  }
}
</script>
