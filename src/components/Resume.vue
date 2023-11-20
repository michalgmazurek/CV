<template>
  <div>
    <section class="page">
      <div class="container">
        <contact-info></contact-info>
        <name/>
        <experience :experience-items="experienceItems"/>
        <education :education-items="educationItems"/>
        <skills :skills-items="skillsItems"/>
        <languages :languages-items="languagesItems"/>
        <hobbies :hobbies-items="hobbiesItems"/>
        <consent style="page-break-after: auto;"/>
      </div>
    </section>
  </div>
</template>

<script>
import ContactInfo from './ContactInfo'
import Name from './Name'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import Languages from './Languages'
import Hobbies from './Hobbies'
import Consent from './Consent'
import {EDUCATION} from '../data/education'
import {EXPERIENCE} from '../data/experience'
import {SKILLS} from '../data/skills'
import {LANGUAGES} from '../data/languages'
import {HOBBIES} from '../data/hobbies'

export default {
  name: 'Resume',

  components: {
    Name,
    Consent,
    Experience,
    Education,
    Skills,
    Languages,
    Hobbies,
    ContactInfo
  },

  computed: {
    experienceItems() {
      return EXPERIENCE
    },

    educationItems() {
      return EDUCATION
    },

    skillsItems() {
      return SKILLS
    },

    languagesItems() {
      return LANGUAGES
    },

    hobbiesItems() {
      return HOBBIES
    }
  }
}
</script>

<style scoped lang="scss">
.page {
  width: 210mm;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
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

