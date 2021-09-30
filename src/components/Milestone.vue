<template>
  <div>
    <top-nav />
    <main-nav />
    <div style="text-align: center; margin-top: 15px">
      <h3 style="font-size: 2rem">
        <span style="color: #1b9527; font-size: 2rem"> OUR </span>MILESTONE
      </h3>
    </div>

    <v-container fluid>
      <v-row id="second-container">
        <v-col></v-col>
        <v-col cols="12" sm="12" md="3" lg="3">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              :elevation="hover ? 16 : 3"
              :class="{ 'on-hover': hover }"
              style="height: 200px; margin: 20px"
            >
              <h1 style="text-align: center; color: #1b9527">06</h1>
              <p
                style="
                  font-family: Roboto;
                  font-size: 0.9rem;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 21px;
                  letter-spacing: 0em;
                  text-align: center;
                  margin-top: 30px;
                  padding: 1px;
                "
              >
                Districts have been reached
              </p>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="12" md="3" lg="3">
          <v-card style="height: 200px; margin: 20px">
            <h1 style="text-align: center; color: #1b9527">10,000+</h1>
            <p
              style="
                font-family: Roboto;
                font-size: 0.9rem;
                font-style: normal;
                font-weight: 400;
                line-height: 21px;
                letter-spacing: 0em;
                text-align: center;
                margin-top: 30px;
                padding: 1px;
              "
            >
              Women and youths have been empowered with business and financial
              literacy skills and knowledge
            </p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="3" lg="3">
          <v-card style="height: 200px; margin: 20px">
            <h1 style="text-align: center; color: #1b9527">50</h1>

            <p
              style="
                font-family: Roboto;
                font-size: 0.9rem;
                font-style: normal;
                font-weight: 400;
                line-height: 21px;
                letter-spacing: 0em;
                text-align: center;
                margin-top: 30px;
                padding: 1px;
              "
            >
              Women and youth lead enterprises have been established and
              strengthened
            </p>
          </v-card>
        </v-col>
        <v-col></v-col>
      </v-row>
      <v-row>
        <v-col style="background: #edf9ee">
          <p class="let">
            Young Agro-Green Africa Network (YAGANET) is a non-profit social
            enterprise founded in 2016, with the aim of promoting climate
            justice agribusiness and response; gender and financial inclusions;
            research and advocacy; mentorship and life skills empowerment among
            under-served vulnerable young people and women including those
            living with disabilities while leveraging on partnerships. YAGANET’s
            prime motto is
            <b> ‘Young people and women at the forefront of actions.’</b>
          </p>
        </v-col>
        <v-col class="about-col">
          <v-img max-width="860" src="../assets/IMG_20210923_113216_962.jpg" />
        </v-col>
      </v-row> </v-container
    ><br />
    <Footer />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import MainNav from "./MainNav.vue";
import TopNav from "./TopNav.vue";
export default {
  name: "Milestone",
  components: { TopNav, MainNav, Footer },
};
</script>

<style scoped>
.let {
  font-size: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  padding-left: 10px;
  margin-right: 30px;
  padding-top: 200px;
}
@media only screen and (max-width: 768px) {
  .let {
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    padding-left: 10px;
    margin-right: 30px;
    padding-top: auto;
  }
}
</style>