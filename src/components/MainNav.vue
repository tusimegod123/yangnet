<template>
  <nav>
    <v-app-bar style="background-color: #1b9527; height: 100px">
      <div style="">
        <v-img
          style="margin-left: auto; margin-right: auto"
          height="135"
          width="130"
          src="../assets/YAGANETBOLD.jpg"
          id="image"
        ></v-img>
      </div>
      <router-link to="/" style="text-decoration: none">
        <v-toolbar-title class="title"
          >Young Agro-Green <br />
          Africa Network</v-toolbar-title
        >
      </router-link>
      <v-spacer></v-spacer>

      <v-row class="hid-navbar">
        <v-menu text offset-y>
          <template v-slot:activator="{ attrs, on }">
            <router-link
              to="/about"
              class="white--text ma-7"
              v-bind="attrs"
              v-on="on"
              style="text-decoration: none; color: white"
              >About Us</router-link
            >
          </template>
        </v-menu>

        <v-menu :key="text" :rounded="rounded" offset-y>
          <template v-slot:activator="{ attrs, on }">
            <router-link
              to="/scope"
              class="white--text ma-7"
              v-bind="attrs"
              v-on="on"
              style="text-decoration: none; color: white"
              @click="show2 = !show2"
              >Our scope</router-link
            >
          </template>
        </v-menu>

        <v-menu :key="text" :rounded="rounded" offset-y>
          <template v-slot:activator="{ attrs, on }">
            <router-link
              to="/projects"
              class="white--text ma-7"
              v-bind="attrs"
              v-on="on"
              style="text-decoration: none; color: white"
              icon
              @click="show3 = !show3"
              >Projects</router-link
            >
          </template>
          <div style="display: flex; flex-direction: row"></div>
        </v-menu>

        <v-menu :key="text" :rounded="rounded" offset-y>
          <template v-slot:activator="{ attrs, on }">
            <router-link
              to="/milestone"
              class="white--text ma-7"
              v-bind="attrs"
              v-on="on"
              style="text-decoration: none; color: white"
              icon
              @click="show4 = !show4"
              >Milestone</router-link
            >
          </template>
        </v-menu>

        <v-menu :key="text" :rounded="rounded" offset-y>
          <template v-slot:activator="{ attrs, on }">
            <router-link
              to="/team"
              class="white--text ma-7"
              v-bind="attrs"
              v-on="on"
              style="text-decoration: none; color: white"
              icon
              @click="show4 = !show4"
              >Team</router-link
            >
          </template>
          <v-list> </v-list>
        </v-menu>

        <v-menu :key="text" :rounded="rounded" offset-y>
          <template v-slot:activator="{ attrs, on }">
            <router-link
              to="/gallery"
              class="white--text ma-7"
              v-bind="attrs"
              v-on="on"
              style="text-decoration: none; color: white"
              icon
              @click="show4 = !show4"
              >Media</router-link
            >
          </template>
        </v-menu>

        <v-menu :key="text" :rounded="rounded" offset-y>
          <template v-slot:activator="{ attrs, on }">
            <router-link
              to="/gallery"
              class="white--text ma-7"
              v-bind="attrs"
              v-on="on"
              style="text-decoration: none; color: white"
              icon
              @click="show4 = !show4"
              >Gallery</router-link
            >
          </template>
        </v-menu>

        <v-menu :key="text" :rounded="rounded" offset-y>
          <template v-slot:activator="{ attrs, on }">
            <router-link
              to="/getinvolved"
              class="white--text ma-7"
              v-bind="attrs"
              v-on="on"
              style="text-decoration: none; color: white"
              icon
              @click="show4 = !show4"
              >Join Us</router-link
            >
          </template>
        </v-menu>
      </v-row>

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        @click="drawer = true"
        style="color: #ffff"
        class="toggle"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      style="
        margin-left: 10px;
        z-index: 100;
        margin-top: 5px;
        border-radius: 6px;
      "
    >
      <phone-menu />
    </v-navigation-drawer>
  </nav>
</template>

<script>
import PhoneMenu from "./PhoneMenu.vue";
export default {
  components: { PhoneMenu },
  name: "MainNav",
  data: () => ({
    drawer: null,
  }),
};
</script>

<style scoped>
.title {
  color: #fff;
  text-align: left;
  padding-top: 30px;
  font-weight: 600;
  padding-left: 10px;
}
.toggle {
  display: none;
}

@media only screen and (max-width: 947px) {
  .title {
    color: #fff;
    text-align: left;
    padding-top: 30px;
    font-weight: 500;
    padding-left: 10px;
  }
  .toggle {
    display: block;
    padding-top: 40px;
    font-size: 3rem;
  }
  .hid-navbar {
    display: none;
  }
  #image {
    height: 100px;
    width: 100px;
  }
}
</style>
