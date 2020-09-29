<template>
  <div>
    <section class="one-page">
      <div class="container">
        <contact-info></contact-info>
        <name/>
        <experience :experience-items="experienceItems"/>
        <education :education-items="educationItems"/>
        <skills :skills-items="skillsItems"/>
        <languages :languages-items="languagesItems"/>
        <hobbies :hobbies-items="hobbiesItems"/>
        <consent/>
      </div>
    </section>
  </div>
</template>

<script>
import ContactInfo from './ContactInfo';
import Name from './Name';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Languages from './Languages';
import Hobbies from './Hobbies';
import Consent from './Consent';
import EDUCATION from '../data/education';
import EXPERIENCE from '../data/experience';
import SKILLS from '../data/skills';
import LANGUAGES from '../data/languages';
import HOBBIES from '../data/hobbies';

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
    ContactInfo,
  },

  computed: {
    experienceItems() {
      return EXPERIENCE;
    },

    educationItems() {
      return EDUCATION;
    },

    skillsItems() {
      return SKILLS;
    },

    languagesItems() {
      return LANGUAGES;
    },

    hobbiesItems() {
      return HOBBIES;
    },
  }
}
</script>

