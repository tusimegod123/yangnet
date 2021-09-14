<template>
  <div>
    <top-nav />
    <main-nav />
    <projects-component />
    <Footer />
  </div>
</template>

<script>

import MainNav from '../components/MainNav.vue'
import TopNav from '../components/TopNav.vue'
import Footer from '../components/Footer.vue'
import ProjectsComponent from '../components/ProjectsComponent.vue'
export default {
    name:'Projects',
  components: { TopNav,MainNav,  Footer, ProjectsComponent }

}
</script>

<style>

</style>