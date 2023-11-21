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

<script setup>
import Tag from './Tag';

defineProps({
  hobbiesItems: {
    type: Array,
    required: true,
  },
});
</script>
