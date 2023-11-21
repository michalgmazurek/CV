<template>
  <article>
    <h2>skills</h2>
    <div class="tag__container">
      <Tag
        v-for="skillsItem in skillsItems"
        :key="`skill-${skillsItem.id}`"
        :text="skillsItem.text"
      />
    </div>
  </article>
</template>

<script setup>
import Tag from './Tag';

defineProps({
  skillsItems: {
    type: Array,
    required: true,
  },
});
</script>
