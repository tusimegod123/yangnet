<template>
  <div>
    <top-nav />
    <main-nav />
    <div style="text-align: center; margin-top: 15px">
      <h3 style="font-size: 2rem">
        <span style="color: #1b9527">OUR </span> GALLERY
      </h3>
    </div>

    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="2" lg="2"></v-col>
        <v-col>
          <p
            style="
              font-family: Roboto;
              font-size: 24px;
              font-style: normal;
              font-weight: 300;
              line-height: 28px;
              letter-spacing: 0em;
              text-align: center;
            "
          >
            We are a passionate and experienced team serving a range of
            beneficiaries including marginalized youths and women from
            undeserved rural communities, war affected areas, refugee camps and
            slums.
          </p>
        </v-col>
        <v-col cols="12" sm="12" md="2" lg="2"></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/try.jpg"
        /></v-col>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/entreprenure.jpg"
        /></v-col>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/finacial-litrancy.jpg"
        /></v-col>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/MLD-PROGRAM (3).jpg"
        /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/FB_IMG_1631279094008.jpg"
        /></v-col>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/try5.jpg"
        /></v-col>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/agric-pillar.jpg"
        /></v-col>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/gallery4.jpg" height="180"
        /></v-col>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/gallery.jpg"
        /></v-col>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/gallery2.jpg" height="200"
        /></v-col>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/gallery3.jpg" height="200"
        /></v-col>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/try7.jpg" height="200"
        /></v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import MainNav from "./MainNav.vue";
import TopNav from "./TopNav.vue";
export default {
  components: { TopNav, Footer, MainNav },
  name: "GalleryComponent",

  data: () => ({
    search: "",
    show: false,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style scoped>
.property-link {
  text-decoration: none;
  color: rgb(50, 50, 250);
  font-size: 14px;
  line-height: 2rem;
}
.v-card.on-hover.theme--dark {
  background-color: rgba(#fff, 0.8);

  color: #000;
}
.property-link:hover {
  text-decoration: underline;
}

::placeholder {
  color: #3b6ef3;
  font-size: 1rem;
  font-weight: 500;
}

.text-field {
  color: #90c143 !important;
}

#intro {
  color: #ffffff;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-top: 200px;
}

input {
  margin-top: 180px;
  background-color: #f2f2f2;
  height: 50px;
  width: 500px;
  border-radius: 6px;
}

#card {
  background-color: #f4f5f8;
}

#container {
  background-image: url("../assets/young2.webp");
  /* background-image: url("https://res.cloudinary.com/diued7ugb/image/upload/v1626688778/dillon-kydd-XGvwt544g8k-unsplash_lrvzid.jpg"); */
  background-size: cover;
  height: 65vh;
  width: 100%;
}
.about-col {
  background-image: url("../assets/young-about.webp");
}
.volunteer {
  background-image: url("../assets/volunteer.jpg");
}

#second-container {
  background-color: #1b9527;
}

.about-us-container {
  background-color: #f4f5f8;
  height: 310px;
}

@media only screen and (max-width: 768px) {
  #container {
    height: 30vh;
    width: 100%;
  }

  #second-container {
    margin-top: auto;
  }

  .about-us-container {
    background-color: #ebeef2;
    height: auto;
  }

  #intro {
    color: #ffffff;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    margin-top: 80px;
  }

  input {
    margin-top: 40px;
    background-color: #f2f2f2;
    height: 50px;
    width: 350px;
    margin-left: 20px;
    border-radius: 6px;
  }

  ::placeholder {
    color: #3b6ef3;
    font-size: 0.9rem;
    font-weight: 500;
  }

  #col-hiden {
    display: none;
  }
}
</style>
