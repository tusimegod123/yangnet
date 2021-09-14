<template>
  <div>
    <v-container id="container" fluid>
      <v-row no-gutters>
        <v-col cols="12" md="12" xs="12">
          <p id="intro">Let’s a world a better place for everyone</p>
        </v-col>
      </v-row>
    </v-container>

    <div style="text-align: center; margin-top: 15px">
      <h3 style="font-size: 2rem">
        <span style="color: #1b9527; font-size: 2rem"> ABOUT </span>US
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
                  font-size: 18px;
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
                font-size: 18px;
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
                font-size: 18px;
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
      <v-row>
        <v-col class="about-col">
          <v-img max-width="860" src="../assets/young-about.webp" />
        </v-col>
        <v-col style="background: #edf9ee">
          <p
            style="
              font-family: Roboto;
              font-size: 24px;
              font-style: normal;
              font-weight: 300;
              line-height: 28px;
              letter-spacing: 0em;
              text-align: left;
              padding-left: 10px;
              margin-right: 30px;
              padding-top: 80px;
            "
          >
            YAGANET was founded in 2016 as a social enterprise working to see
            inclusive financial and non-financial services, delivering and
            spreading financial literacy knowledge, business and life skills
            training services to under-served young people aged 8-24yrs and
            women between 24-35yrs while leveraging on partnerships and bringing
            economies of scale.
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
          <p
            style="
              font-family: Roboto;
              font-size: 24px;
              font-style: normal;
              font-weight: 300;
              line-height: 28px;
              letter-spacing: 0em;
              text-align: left;
              padding-top: 70px;
            "
          >
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
        <v-col class="volunteer">
          <v-img max-width="600" src="../assets/volunteer.jpg" />
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
          ><v-img src="../assets/try3.jpg"
        /></v-col>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/try1.jpg"
        /></v-col>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/try2.jpg"
        /></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/try4.jpg"
        /></v-col>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/try5.jpg"
        /></v-col>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/try6.jpg"
        /></v-col>
        <v-col cols="12" sm="12" md="3" lg="3"
          ><v-img src="../assets/try7.jpg"
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
          <v-img src="../assets/partner.jpeg" />
        </v-col>
        <v-col cols="12" sm="3" md="3" lg="3">
          <v-img src="../assets/wilmat.png" />
        </v-col>
        <v-col cols="12" sm="3" md="3" lg="3">
          <v-img src="../assets/partner.jpeg" />
        </v-col>
        <v-col cols="12" sm="3" md="3" lg="3">
          <v-img src="../assets/wilmat.png" />
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
