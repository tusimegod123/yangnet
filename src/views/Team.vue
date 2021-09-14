<template>
  <div>
    <top-nav />
    <main-nav />
    <team-component />
    <Footer />
  </div>
</template>

<script>
import MainNav from "../components/MainNav.vue";
import TopNav from "../components/TopNav.vue";
import Footer from "../components/Footer.vue";
import ProjectsComponent from "../components/ProjectsComponent.vue";
import TeamComponent from "../components/TeamComponent.vue";
export default {
  name: "Team",
  components: { TopNav, MainNav, Footer, ProjectsComponent, TeamComponent },
};
</script>
  <style></style>
