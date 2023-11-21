<template>
  <article>
    <h1>
      {{ generalInformationItem.name }}
      &nbsp;
      {{ generalInformationItem.surname }}
    </h1>
    <h2 class="heder-position">
      {{ generalInformationItem.position }}
    </h2>
  </article>
</template>

<script setup>
defineProps({
  generalInformationItem: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
heder-position {
  font-size: 15px;
  margin-bottom: 20px;
  line-height: 20px;
  margin-top: 0;
}
</style>
