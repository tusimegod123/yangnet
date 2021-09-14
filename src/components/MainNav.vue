<template>
  <nav>
    <v-app-bar style="background-color: #1b9527; height: 100px">
      <div style="">
        <v-img
          style="margin-left: auto; margin-right: auto"
          height="135"
          width="130"
          src="../assets/YAGANETBOLD.jpg"
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
            <a
              href="/about"
              class="white--text ma-7"
              v-bind="attrs"
              v-on="on"
              style="text-decoration: none; color: white"
              >About Us
            </a>
          </template>

          <v-list>
            <links title="About Us" link="/about" />
            <!-- <links title="New Constructions" />
                    <links title="For sale by owner" />
                    <links link="/" title="Open houses" /> -->
          </v-list>
        </v-menu>

        <v-menu :key="text" :rounded="rounded" offset-y>
          <template v-slot:activator="{ attrs, on }">
            <a
              href="/scope"
              class="white--text ma-7"
              v-bind="attrs"
              v-on="on"
              style="text-decoration: none"
              icon
              @click="show2 = !show2"
              >Our Scope
            </a>
          </template>
        </v-menu>

        <v-menu :key="text" :rounded="rounded" offset-y>
          <template v-slot:activator="{ attrs, on }">
            <a
              href="/projects"
              class="white--text ma-7"
              v-bind="attrs"
              v-on="on"
              style="text-decoration: none"
              icon
              @click="show3 = !show3"
              >Projects
            </a>
          </template>
          <div style="display: flex; flex-direction: row"></div>
        </v-menu>

        <v-menu :key="text" :rounded="rounded" offset-y>
          <template v-slot:activator="{ attrs, on }">
            <a
              href="/milestone"
              class="white--text ma-7"
              v-bind="attrs"
              v-on="on"
              style="text-decoration: none"
              icon
              @click="show4 = !show4"
              >Milestone
            </a>
          </template>
        </v-menu>

        <v-menu :key="text" :rounded="rounded" offset-y>
          <template v-slot:activator="{ attrs, on }">
            <a
              href="/team"
              class="white--text ma-7"
              v-bind="attrs"
              v-on="on"
              style="text-decoration: none"
              icon
              @click="show4 = !show4"
              >Team
            </a>
          </template>
          <v-list> </v-list>
        </v-menu>

        <v-menu :key="text" :rounded="rounded" offset-y>
          <template v-slot:activator="{ attrs, on }">
            <a
              href="#"
              class="white--text ma-7"
              v-bind="attrs"
              v-on="on"
              style="text-decoration: none"
              icon
              @click="show4 = !show4"
              >Media
            </a>
          </template>
        </v-menu>

        <v-menu :key="text" :rounded="rounded" offset-y>
          <template v-slot:activator="{ attrs, on }">
            <a
              href="/getinvolved"
              class="white--text ma-7"
              v-bind="attrs"
              v-on="on"
              style="text-decoration: none"
              icon
              @click="show4 = !show4"
              >Join Us
            </a>
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
  .toggle {
    display: block;
  }
  .hid-navbar {
    display: none;
  }
}
</style>
