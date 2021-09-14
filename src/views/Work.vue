<template>
  <div>
    <top-nav />
    <main-nav />
    <how-we-work />
    <Footer />
  </div>
</template>

<script>

import Footer from "@/components/Footer.vue";
import MainNav from "@/components/MainNav.vue";
import TopNav from "@/components/TopNav.vue";
import HowWeWork from '../components/HowWeWork.vue';

export default {
  components: { TopNav, MainNav, Footer,HowWeWork },
  name: "Work"
};
</script>

<style>
</style>