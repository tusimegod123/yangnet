<template>
  <v-list nav dense style="margin-left: 10px">
    <router-link to="/about" style="text-decoration: none">
      <v-list-group>
        <template v-slot:activator>
          <v-list-item-title>About Us</v-list-item-title>
        </template>
      </v-list-group>
    </router-link>

    <router-link to="/scope" style="text-decoration: none">
      <v-list-group>
        <template v-slot:activator>
          <v-list-item-title>Our Scope</v-list-item-title>
        </template>
      </v-list-group>
    </router-link>

    <router-link to="/projects" style="text-decoration: none">
      <v-list-group>
        <template v-slot:activator>
          <v-list-item-title>Projects</v-list-item-title>
        </template>
      </v-list-group>
    </router-link>

    <router-link to="/milestone" style="text-decoration: none">
      <v-list-group :value="false">
        <template v-slot:activator>
          <v-list-item-title>Milestone</v-list-item-title>
        </template>
      </v-list-group>
    </router-link>

    <router-link to="/team" style="text-decoration: none">
      <v-list-group>
        <template v-slot:activator>
          <v-list-item-title>Team</v-list-item-title>
        </template>
      </v-list-group>
    </router-link>
    <router-link to="/about" style="text-decoration: none">
      <v-list-group>
        <template v-slot:activator>
          <v-list-item-title>Media</v-list-item-title>
        </template>
      </v-list-group>
    </router-link>
    <router-link to="/about" style="text-decoration: none">
      <v-list-group>
        <template v-slot:activator>
          <v-list-item-title>Join Us</v-list-item-title>
        </template>
      </v-list-group>
    </router-link>
  </v-list>
</template>
<script>
import Links from "@/components/Links";
export default {
  name: "PhoneMenu",
  components: {
    Links,
  },
};
</script>