<template>
  <article>
    <h2>Languages</h2>
    <div class="tag__container">
      <Tag
        v-for="languagesItem in languagesItems"
        :key="`language-${languagesItem.id}`"
        :text="languagesItem.text"
        wider
      />
    </div>
  </article>
</template>

<script setup>
import Tag from './Tag';

defineProps({
  languagesItems: {
    type: Array,
    required: true,
  },
});
</script>
