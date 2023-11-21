<template>
  <div>
    <section class="page">
      <div class="container">
        <ContactInfo :general-information-item="generalInformationItem" />
        <Name :general-information-item="generalInformationItem" />
        <Experience :experience-items="experienceItems" />
        <Education :education-items="educationItems" />
        <Skills :skills-items="skillsItems" />
        <Languages :languages-items="languagesItems" />
        <Hobbies :hobbies-items="hobbiesItems" />
        <Consent />
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue';

import { EDUCATION } from '../data/education';
import { EXPERIENCE } from '../data/experience';
import { SKILLS } from '../data/skills';
import { LANGUAGES } from '../data/languages';
import { HOBBIES } from '../data/hobbies';
import { GENERAL_INFORMATION } from '../data/generalInfo';
import ContactInfo from './ContactInfo';
import Name from './Name';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Languages from './Languages';
import Hobbies from './Hobbies';
import Consent from './Consent';

const educationItems = computed(() => EDUCATION);
const experienceItems = computed(() => EXPERIENCE);
const hobbiesItems = computed(() => HOBBIES);
const skillsItems = computed(() => SKILLS);
const languagesItems = computed(() => LANGUAGES);
const generalInformationItem = computed(() => GENERAL_INFORMATION);
</script>

<style scoped lang="scss">
.page {
  width: 210mm;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  print-color-adjust: exact;
  -webkit-print-color-adjust: exact;

  @media print {
    margin-bottom: 0;
    margin-top: 0;
  }
}

.container {
  margin-left: 30px;
  margin-right: 30px;
}
</style>
