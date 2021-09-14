<template>
  <div>
    <top-nav />
    <main-nav />
    <read-more-component />
    <Footer />
  </div>
</template>

<script>

import Footer from "@/components/Footer.vue";
import MainNav from "@/components/MainNav.vue";
import TopNav from "@/components/TopNav.vue";
import HowWeWork from '../components/HowWeWork.vue';
import ReadMoreComponent from '../components/ReadMore.vue';

export default {
  components: { TopNav, MainNav, Footer,HowWeWork,ReadMoreComponent },
  name: "More"
};
</script>

<style>
</style>