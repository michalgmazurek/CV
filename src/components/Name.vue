<template>
  <article>
    <h1 class="header">
      {{ generalInformationItems.name }} {{ generalInformationItems.surname }}
    </h1>
    <h2 class="subheader subheader--position">
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
