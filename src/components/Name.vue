<template>
  <article>
    <h1>
      {{ generalInformationItems.name }}
      &nbsp;
      {{ generalInformationItems.surname }}
    </h1>
    <h2 class="header-position">
      {{ generalInformationItems.position }}
    </h2>
  </article>
</template>

<script>
export default {
  name: 'Name',
  props: {
    generalInformationItems: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.header-position {
  font-size: 15px;
  margin-bottom: 20px;
  line-height: 20px;
  margin-top: 0;
}
</style>
