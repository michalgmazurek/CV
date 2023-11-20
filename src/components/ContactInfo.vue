<template>
  <article class="contact-info">
    <div class="photo-container">
      <img class="photo" src="https://michalgmazurek.github.io/CV/img/CV1.png" alt="Photo" lazy>
    </div>
    <ul class="contact">
      <li class="text">
        <span class="fa fa-phone" aria-hidden="true" />{{ generalInformationItems.telephone }}
      </li>
      <li class="text">
        <span class="fa fa-envelope-o" aria-hidden="true" />
        <a
          :href="mailto"
          target="_blank"
        >
          {{ generalInformationItems.email }}
        </a>
      </li>
      <li class="text">
        <span class="fa fa-github" aria-hidden="true" />
        <a
          :href="githubLink"
          target="_blank"
        >
          {{ generalInformationItems.github }}
        </a>
      </li>
      <li class="text">
        <span class="fa fa-linkedin" aria-hidden="true" />
        <a
          :href="linkedinLink"
          target="_blank"
        >
          {{ generalInformationItems.linkedin }}
        </a>
      </li>
    </ul>
    <div class="print-button__container">
      <button
        type="button"
        class="print-button"
        @click="print"
      >
        Print
      </button>
    </div>
  </article>
</template>

<script>

export default {
  name: 'ContactInfo',
  props: {
    generalInformationItems: {
      type: Object,
      required: true,
    },
  },
  computed: {
    linkedinLink() {
      return `https://www.${this.generalInformationItems?.linkedin}`;
    },
    mailto() {
      return `mailto:${this.generalInformationItems?.email}`;
    },
    githubLink() {
      return `https://${this.generalInformationItems?.github}`;
    },
  },
  methods: {
    print() {
      window.print();
    },
  },
};
</script>

<style scoped lang="scss">
.contact-info {
  display: flex;
  flex-direction: row;
  align-content: space-around;
  justify-content: left;
}

.photo {
  width: 150px;
  border-radius: 50%;
  margin: 20px 20px 20px 0;
}

.contact {
  margin-left: 30px;
  align-self: center;
  list-style: none;
  font-size: 12px;

  .fa {
    margin-right: 15px;
    color: #2ECC71;
    font-weight: 600;
    width: 15px;
  }

  li {
    width: 230px;
  }
}

.print-button {
  display: block;
  height: 30px;
  width: 120px;
  background-color: #2ECC71;
  color: #EEEEEE;
  text-align: center;
  border: none;
  border-radius: 10px;
  line-height: 30px;
  font-weight: 600;
  font-size: 13px;
  margin: auto;
  cursor: pointer;
  outline: none;

  &__container {
    display: flex;
    margin-left: auto;

    @media print {
      display: none;
    }
  }
}

a {
  text-decoration: none;
}

button:active {
  background-color: #4daf7c;
}
</style>
