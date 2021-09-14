<template>
  <div>
    <top-nav />
    <main-nav />
    <scope-component />
    <Footer />
  </div>
</template>

<script>
import AboutUs from "@/components/AboutUs.vue";
import Footer from "@/components/Footer.vue";
import MainNav from "@/components/MainNav.vue";
import TopNav from "@/components/TopNav.vue";

import ScopeComponent from "../components/ScopeComponent.vue";

export default {
  components: { TopNav, MainNav, Footer, AboutUs, ScopeComponent },
  name: "ScopeView",
};
</script>

<style></style>
