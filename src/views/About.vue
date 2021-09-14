<template>
  <div>
    <top-nav />
    <main-nav />
    <about-us />
    <Footer />
  </div>
</template>

<script>
import AboutUs from "@/components/AboutUs.vue";
import Footer from "@/components/Footer.vue";
import MainNav from "@/components/MainNav.vue";
import TopNav from "@/components/TopNav.vue";

export default {
  components: { TopNav, MainNav, Footer, AboutUs },
  name: "About"
};
</script>

<style>
</style>