<template>
  <div>
    <v-container id="container" fluid>
      <v-row no-gutters>
        <v-col cols="12" md="12" xs="12">
          <p id="intro">Let’s make a world a better place for everyone</p>
        </v-col>
      </v-row>
    </v-container>

    <div style="text-align: center; margin-top: 15px">
      <h3 style="font-size: 2rem">
        <span style="color: #1b9527; font-size: 2rem"> WEL</span>COME
      </h3>
    </div>
    <br />
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
              <h1 style="text-align: center">Who We Are?</h1>
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
                Young Agro-Green Africa Network (YAGANET) is an innovative
                social enterprise unleashing women and young people's potentials
              </p>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="12" md="3" lg="3">
          <v-card style="height: 200px; margin: 20px">
            <h1 style="text-align: center">Our Mission</h1>
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
              Enable young people and women to initiate, own and effectively
              lead climate resilient enterprises that build communities and
              transform lives in Africa
            </p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="3" lg="3">
          <v-card style="height: 200px; margin: 20px">
            <h1 style="text-align: center">Our Vision</h1>

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
              Empowered young people and women leading economic transformation.
            </p>
          </v-card>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col class="about-col">
          <v-img max-width="560" src="../assets/resilence.jpg" />
        </v-col>
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
      </v-row> </v-container
    ><br />

    <div style="text-align: center; margin-top: 15px">
      <h3 style="font-size: 2rem">
        BECOME A <span style="color: #1b9527">VOLUNTEER</span>
      </h3>
    </div>

    <v-container>
      <v-row>
        <v-col style="background: #edf9ee">
          <p class="let2">
            Volunteering is a unique way to connect with new people, experience
            new places, and expand your skills perspectives and share your
            expertise
          </p>
          <p style="text-align: center">
            <router-link to="getinvolved" style="text-decoration: none">
              <v-btn color="#1b9527" style="margin: auto; padding: 10px">
                <span style="color: white">Volunteer</span>
              </v-btn>
            </router-link>
          </p>
        </v-col>
        <v-col>
          <v-img max-width="600" src="../assets/entreprenure.jpg" />
        </v-col>
      </v-row> </v-container
    ><br />

    <div style="text-align: center; margin-top: 15px">
      <h3 style="font-size: 2rem">
        <span style="color: #1b9527">OUR RECENT </span> MILESTONE
      </h3>
    </div>

    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="2" lg="2"></v-col>
        <v-col>
          <p class="let3">
            We are a passionate and experienced team serving a range of
            beneficiaries including marginalized youths and women from
            undeserved rural communities, war affected areas, refugee camps and
            slums.
            <span
              ><a href="/milestone" style="color: green; text-decoration: none"
                >Read more</a
              ></span
            >
          </p>
        </v-col>
        <v-col cols="12" sm="12" md="2" lg="2"></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/try.jpg" height="200"
        /></v-col>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/entreprenure.jpg" height="200"
        /></v-col>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/finacial-litrancy.jpg" height="200"
        /></v-col>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/MLD-PROGRAM (3).jpg" height="200"
        /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/FB_IMG_1631279094008.jpg" height="200"
        /></v-col>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/try5.jpg" height="200"
        /></v-col>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/agric-pillar.jpg" height="200"
        /></v-col>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/try7.jpg" height="200"
        /></v-col>
      </v-row> </v-container
    ><br />

    <div style="text-align: center; margin-top: 15px">
      <h3 style="font-size: 2rem">
        <span style="color: #1b9527">OUR</span> PARTNERS
      </h3>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12" sm="3" md="3" lg="3">
          <a href="https://www.greengrants.org/" target="_blank">
            <v-card class="mx-auto" height="215px">
              <p style="margin: auto; padding: 10px; padding-top: 50px">
                <v-img
                  src="../assets/GGF LOGO--Patner (1).png"
                  width="500px"
                ></v-img>
              </p>
            </v-card>
          </a>
        </v-col>
        <v-col cols="12" sm="3" md="3" lg="3">
          <a href="https://www.creationsforumafrika.org/" target="_blank">
            <v-card class="mx-auto" height="215px">
              <p style="margin: auto; padding: 10px">
                <v-img
                  src="../assets/logo.png"
                  width="450px"
                  height="198px"
                ></v-img>
              </p>
            </v-card>
          </a>
        </v-col>
        <v-col cols="12" sm="3" md="3" lg="3">
          <a href="https://umgibe.org/" target="_blank">
            <v-card class="mx-auto" height="215px">
              <p style="margin: auto; padding: 10px; padding-top: 50px">
                <v-img
                  src="../assets/Umgibe-Farming-Organics-LOGO.png"
                  width="500px"
                ></v-img>
              </p>
            </v-card>
          </a>
        </v-col>
        <v-col cols="12" sm="3" md="3" lg="3">
          <a href="https://www.aflatoun.org/" target="_blank">
            <v-card class="mx-auto" height="215px">
              <p style="margin: auto; padding: 10px; padding-top: 30px">
                <v-img
                  src="../assets/Aflatoun-International-small (1).jpg"
                  width="300px"
                ></v-img>
              </p>
            </v-card>
          </a>
        </v-col>
        <v-col cols="12" sm="3" md="3" lg="3">
          <a href="https://kadupedi.wordpress.com/" target="_blank">
            <v-card class="mx-auto" height="200px">
              <p style="margin: auto; padding: 10px">
                <v-img
                  src="../assets/kagupedi logo--patner (1).jpg"
                  width="300px"
                  height="190px"
                ></v-img>
              </p>
            </v-card>
          </a>
        </v-col>

        <v-col cols="12" sm="3" md="3" lg="3">
          <a href="https://raisingteenagers.org/" target="_blank">
            <v-card class="mx-auto">
              <p style="margin: auto; padding: 10px">
                <v-img src="../assets/partner.jpeg" width="300px"></v-img></p
            ></v-card>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home2",

  data: () => ({
    search: "",
    show: false,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style scoped>
#container {
  background-image: url("../assets/young-about.webp");
  /* background-image: url("https://res.cloudinary.com/diued7ugb/image/upload/v1626688778/dillon-kydd-XGvwt544g8k-unsplash_lrvzid.jpg"); */
  background-size: cover;
  height: 65vh;
  width: 100%;
}
#intro {
  color: #abf3b3;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-top: 200px;
}
.let {
  font-family: Roboto;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 300;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  padding-left: 10px;
  margin-right: 30px;
  padding-top: 80px;
}
.let2 {
  font-family: Roboto;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 300;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  padding-top: 100px;
}
.let3 {
  font-family: Roboto;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 300;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  padding-top: 10px;
}

@media only screen and (max-width: 768px) {
  #container {
    height: 30vh;
    width: 100%;
  }
  #intro {
    color: #bcf5c3;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    margin-top: 80px;
  }
  .let {
    font-family: Roboto;
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 300;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    padding-left: 15px;
    margin-right: 30px;
    padding-bottom: 70px;
  }
  .let2 {
    font-family: Roboto;
    font-size: 1.1rem;
    font-style: normal;
    font-weight: 300;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    padding-top: auto;
  }
  .let3 {
    font-family: Roboto;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 300;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    padding-bottom: 50px;
  }
}
</style>
