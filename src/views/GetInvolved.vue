<template>
  <div>
    <top-nav />
    <main-nav />
    <get-involved-component />
    <Footer />
  </div>
</template>

<script>
import AboutUs from "@/components/AboutUs.vue";
import Footer from "@/components/Footer.vue";
import MainNav from "@/components/MainNav.vue";
import TopNav from "@/components/TopNav.vue";
import GetInvolvedComponent from "@/components/GetInvolvedComponent"

export default {
  components: { TopNav, MainNav, Footer, AboutUs,GetInvolvedComponent },
  name: "GetInvolved"
};
</script>

<style>
</style>