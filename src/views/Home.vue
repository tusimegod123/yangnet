<template>
  <div>
    <top-nav />
    <main-nav />
    <home-component />
    <Footer />
  </div>
</template>

<script>
import HomeComponent from '@/components/HomeComponent.vue'
import MainNav from '../components/MainNav.vue'
import TopNav from '../components/TopNav.vue'
import Footer from '../components/Footer.vue'
export default {
  components: { TopNav,MainNav, HomeComponent, Footer }

}
</script>

<style>

</style>