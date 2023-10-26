<template>
  <article class="contact-info">
    <div class="photo-container">
      <img class="photo" src="./../assets/CV1.png" alt="Photo">
    </div>
    <ul class="contact">
      <li class="text">
        <span class="fa fa-phone" aria-hidden="true">
        </span>+48 790 613 813
      </li>
      <li class="text">
        <span class="fa fa-envelope-o" aria-hidden="true"></span>
        <a
          href="mailto:michalgmazurek@gmail.com"
          target="_blank"
        >michalgmazurek@gmail.com</a>
      </li>
      <li class="text">
        <span class="fa fa-github" aria-hidden="true"></span>
        <a
          href="https://github.com/michalgmazurek"
          target="_blank"
        >github.com/michalgmazurek</a>
      </li>
      <li class="text">
        <span class="fa fa-linkedin" aria-hidden="true"></span>
        <a
          href="https://www.linkedin.com/in/michalgmazurek/"
          target="_blank"
        >linkedin.com/in/michalgmazurek</a>
      </li>
    </ul>
    <div class="print-button__container">
      <button
        @click="print"
        class="print-button"
      >
        Print
      </button>
    </div>
  </article>
</template>

<script>

export default {
  name: 'ContactInfo',

  methods: {
    print() {
      window.print()
    }
  }
}
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
