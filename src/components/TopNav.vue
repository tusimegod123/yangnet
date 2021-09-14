<template>
  <div>
    <v-app-bar color="#ffff" dense dark>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title class="toolbar-title"
        ><b>Email:</b>
        <span
          ><a
            href="mailto:info@yaganet.org"
            style="color: #1b9527; padding-left: 2px; text-decoration: none"
            >info@yaganet.org</a
          ></span
        >
      </v-toolbar-title>
      <a href="http://" class="about-us">About Us</a>

      <v-spacer></v-spacer>

      <v-toolbar-title class="telephone"
        ><b>Tel</b>
        <span
          ><a
            href="tel:+256 752900190"
            style="color: #1b9527; padding-left: 2px; text-decoration: none"
            >+256 752900190</a
          ></span
        >
      </v-toolbar-title>
      <a href="http://" class="sign-in">Sign In</a>
    </v-app-bar>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  name: "TopNav",
};
</script>
<style scoped>
.toolbar-title {
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  color: #1b9527;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 140px;
}
.about-us {
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  text-decoration: none;
  display: none;
}
.telephone {
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #1b9527;
  margin-right: 40px;
}
.sign-in {
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  text-decoration: none;
  display: none;
}
@media only screen and (max-width: 768px) {
  .toolbar-title {
    display: none;
  }
  .about-us {
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    text-decoration: none;
    display: block;
  }
  .telephone {
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    margin-left: auto;
    margin-right: 65px;
  }
  .sign-in {
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    text-decoration: none;
    display: block;
  }
}
</style>
