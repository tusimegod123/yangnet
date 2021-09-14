<template>
  <div>
    <v-carousel>
      <v-carousel-item>
        <v-img src="../assets/try2.jpg" class="coursel-image" />
      </v-carousel-item>
      <v-carousel-item>
        <v-img src="../assets/try1.jpg" />
      </v-carousel-item>
    </v-carousel>

    <div class="about-heading">
      <h3 style="font-size: 2rem">
        <span style="color: #1b9527; font-size: 2rem"> ABOUT </span>US
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
              <h1 style="text-align: center">Who Are We ?</h1>
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
        <v-col class="about-col">
          <v-img max-width="860" src="../assets/young-about.webp" />
        </v-col>
      </v-row> </v-container
    ><br />

    <div style="text-align: center; margin-top: 15px">
      <h3 style="font-size: 2rem">
        HOW WE<span style="color: #1b9527; font-size: 2rem"> WORK</span>
      </h3>
    </div>
    <v-container fluid>
      <v-row>
        <v-col class="how-we-work">
          <v-img max-width="700" src="../assets/try7.jpg" />
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
            YAGANET invest resources in identifying young people and women from
            poor undeserved communities (in schools and out of school)
            struggling with small survival enterprises and those with ideas,
            recruit them into our empowerment skills program involving various
            practical financial literacy skills, agribusiness skills and life
            skills. Later we facilitate these trained young people and women to
            organize themselves into enterprise saving groups, which YAGANET
            invests in resources to enable trainees access to scale-up seed
            capital and asserts inform of microloans at a lowest 3% interest
            rates.........
          </p>
          <p style="text-align: center">
            <router-link
              to="/how"
              style="
                color: white;
                text-transform: capitalize;
                text-decoration: none;
              "
            >
              <v-btn color="#1b9527" style="margin: auto; padding: 10px">
                <span
                  style="
                    color: white;
                    text-transform: capitalize;
                    text-decoration: none;
                  "
                  >Read More</span
                >
              </v-btn>
            </router-link>
          </p>
        </v-col>
      </v-row> </v-container
    ><br />

    <div style="text-align: center; margin-top: 15px">
      <h3 style="font-size: 2rem">
        <span style="color: #1b9527; font-size: 2rem">OUR</span> HISTORY
      </h3>
    </div>
    <v-container fluid>
      <v-row>
        <v-col style="background: #edf9ee" pa-2>
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
            YAGANET was found in 2014 and formally registered in 2016 with a
            promise to scale up women owned informal small enterprises. Our
            founder grew up and studied a herd way, lost his dad in primary
            seven, left with a struggling mother who engaged in...........
          </p>
          <p style="text-align: center">
            <v-btn color="#1b9527" style="margin: auto; padding: 10px">
              <span style="color: white; text-transform: capitalize"
                >Read More</span
              >
            </v-btn>
          </p>
        </v-col>
        <v-col class="history">
          <v-img max-width="700" src="../assets/try6.jpg" />
        </v-col>
      </v-row> </v-container
    ><br />
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      items: [
        {
          src: "../assets/try4.jpg",
        },
        {
          src: "../assets/try4.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
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
.how-we-work {
  background-image: url("../assets/try7.jpg");
}
.history {
  background-image: url("../assets/try6.jpg");
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
.about-heading {
  text-align: center;
  margin-top: 15px;
}
.coursel-image {
  height: 700px;
}

@media only screen and (max-width: 768px) {
  #container {
    height: 30vh;
    width: 100%;
  }
  .about-heading {
    margin-top: auto;
  }
  .coursel-image {
    height: 500px;
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
    font-size: 0.95rem;
    font-weight: 400;
    text-align: center;
    margin-top: auto;
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
