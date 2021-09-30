<template>
  <div>
    <v-carousel>
      <v-carousel-item>
        <v-img src="../assets/try7.jpg" class="coursel-image" />
      </v-carousel-item>
      <v-carousel-item>
        <v-img src="../assets/try1.jpg" />
      </v-carousel-item>
    </v-carousel>

    <div style="text-align: center; margin-top: 15px">
      <h3 style="font-size: 2rem">
        Get
        <span style="color: #1b9527; font-size: 2rem"> Involved </span>
      </h3>
    </div>

    <v-container >
      <v-row id="second-container">
          <v-col cols="12" sm="12" md="4" lg="4">
                  <v-card class="mx-auto" >
            <v-img
              class="white--text align-end"
              height="200px"
              src="../assets/financial.webp"
            >
            </v-img>

            <v-card-subtitle class="pb-0" style="color:green;font-weight:200px;"> Become A Volunteer</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
               Volunteering is a unique way to connect with new people, experience new places, and expand your skills perspectives and share your expertise.....
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="green" text> Fill This Form </v-btn>

             
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4">
          <v-card class="mx-auto">
            <v-img
              class="white--text align-end"
              height="200px"
              src="../assets/IMG_20210923_105821_106.jpg"
            >
            </v-img>

            <v-card-subtitle class="pb-0" style="color:green;font-weight:500;"> How you can help </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
           You may choose to direct your donation to a specific project or group of women and or youth engaged in a specific enterprise mentorship.
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="green" text> See more </v-btn>

            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4">
          <v-card class="mx-auto" >
            <v-img
              class="white--text align-end"
              height="200px"
              src="../assets/volunteer.jpg"
            >
            </v-img>
            <v-card-text class="text--primary">
              <div>
                Global Giving
              </div>
              <br>
               <div>
                Give Online
              </div>
             
            </v-card-text><br>

            <v-card-actions>
              <router-link to="https://www.globalgiving.org/projects/scale-up-99-women-owned-small-businesses-in-kasese/">
              <v-btn color="green" text> Donate Now </v-btn>
              </router-link>
              
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row> </v-container
    ><br />

    

    <div style="text-align: center; margin-top: 15px">
      <h3 style="font-size: 2rem">
        Entrepreneurship
        <span style="color: #1b9527; font-size: 2rem"> Development </span>
      </h3>
    </div>

    <v-container fluid>
      <v-row id="second-container">
        <v-col cols="12" sm="12" md="5" lg="5">
          <v-card style="margin: 20px">
            <p style="text-align: center">
              <v-img
                style="margin: auto; padding: 10px"
                src="../assets/agriculture.webp"
              />
            </p>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              :elevation="hover ? 16 : 3"
              :class="{ 'on-hover': hover }"
              style="margin: 20px"
            >
              <h1 style="text-align: center; color: #1b9527; font-size: 1.2rem">
                Agribusiness and Entrepreneurship
              </h1>
              <p
                style="
                  font-family: Roboto;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 21px;
                  letter-spacing: 0em;
                  text-align: left;
                  margin-top: 20px;
                  padding: 10px;
                "
              >
                YAGANET recognizes the enormous potential agribusiness and
                entrepreneurship skills have in translating the over 10 million
                young Africans entering the labor market annually.
                <br /><br />​We further recognizes that women and youth
                participation in Agri-business and entrepreneurship can be
                strengthened through innovative skills development and financial
                inclusion; such interventions will help Africa’s youth that are
                better educated to translate their skills into business
                innovations and initiate profitable ventures that will transform
                their local, regional and international economies.<br /><br />​
                ​ Under this area, YAGANET focuses on training and imparting
                business and managerial skills to women and youth needed to
                start and run a profitable farm and non-farm businesses. We
                understand that managerial skills can be taught, but an
                entrepreneurial spirit cannot be taught.
              </p>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="12" md="3" lg="3">
          <v-card style="margin: 20px">
            <p
              style="
                font-family: Roboto;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: 21px;
                letter-spacing: 0em;
                text-align: left;
                margin-top: 10px;
                padding: 10px;
              "
            >
              We realize there are many farmers and non-farmers already
              excellent managers and also have some of the spirit of an
              entrepreneur. As ‘price takers’ many farmers have developed
              outstanding abilities to make the most of their resources. But
              being ‘price takers’ suggests that these farmers are not
              innovative, do not take risks, and lack the drive that is usually
              associated with an entrepreneurial spirit, And this is what
              YAGANET does to bridge this gap. <br />
              <br />
              ​
            </p>
          </v-card>
        </v-col>
      </v-row> </v-container
    ><br />

    <div style="text-align: center; margin-top: 15px">
      <h3 style="font-size: 2rem">
        <span style="color: #1b9527; font-size: 2rem"> Research & </span
        >Advocancy
      </h3>
    </div>

    <v-container fluid>
      <v-row id="second-container">
        <v-col cols="12" sm="12" md="6" lg="6">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              :elevation="hover ? 16 : 3"
              :class="{ 'on-hover': hover }"
              style="margin: 20px"
            >
                        <h1 style="text-align: center; color: #1b9527; font-size: 1.2rem">
                RESEARCH & SOCIAL DEVELOPMENT
              </h1>
              <p
                style="
                  font-family: Roboto;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 21px;
                  letter-spacing: 0em;
                  text-align: left;
                  margin-top: 20px;
                  padding: 10px;
                "
              >
                YAGANET recognizes the value of evidence based interventions
                towards transforming communities. We identify community needs
                and engage in community research to get facts and create people
                centered solutions to the need they face in agribusiness. We
                therefore, provide development and welfare support services
                including the expanded social package that influences rural
                underserved communities to improve among others services; ​
                <br /><br />

                <ul>
                    <li>Improve access to scale-up seed capital by women and youth in agribusiness.

                     Improve community social and emotional support systems, and link women and youth to community resources that influences agribusiness development initiatives.</li>
                    <li>Create ICT innovations in agribusiness to ease access and inclusiveness.</li>
                    <li>Access to Safe Water, Sanitation and Hygiene (WASH), and influence Social Progress in relation to SDGs.</li>
                </ul>
  
              </p>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6">
          <v-card style="margin: 20px">
                        <p style="text-align: center">
              <v-img
                style="margin: auto; padding: 10px"
                src="../assets/research.webp"
              />
            </p>
          </v-card>
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
          <v-img max-width="700" src="../assets/gallery.jpg" />
        </v-col>
      </v-row> </v-container
    ><br />
  </div>
</template>

<script>
export default {
  name: "GetInvolvedComponent",
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
  background-image: url("../assets/gallery.jpg");
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
.coursel-image {
  height: 670px;
}

@media only screen and (max-width: 768px) {
  .coursel-image {
    height: 500px;
  }

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