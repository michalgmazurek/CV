<template>
  <article>
    <h1 class="header">{{generalInformationItems.name}} {{generalInformationItems.surname}}</h1>
    <h2 class="subheader subheader--position">
      {{ generalInformationItems.position }}
    </h2>
  </article>
</template>

<script>
import { GENERAL_INFORMATION } from '../data/generalInfo';

export default {
  name: 'Name',

  computed: {
    generalInformationItems() {
      return {...GENERAL_INFORMATION};
    }
  }
}
</script>
