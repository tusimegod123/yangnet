<template>
  <div>
    <v-carousel>
      <v-carousel-item>
        <v-img src="../assets/try2.jpg" />
      </v-carousel-item>
      <v-carousel-item>
        <v-img src="../assets/try1.jpg" />
      </v-carousel-item>
    </v-carousel>

    <div style="text-align: center; margin-top: 15px">
      <h3 style="font-size: 2rem">
        <span style="color: #1b9527; font-size: 2rem"> OUR </span>MODEL
      </h3>
    </div>

    <v-container fluid>
      <v-row id="second-container">
        <v-col></v-col>
        <v-col cols="12" sm="12" md="4" lg="4">
          <v-hover v-slot="{ hover }" open-delay="200">
            <p>
              <v-img
                src="../assets/how-we-work.webp"
                style="margin-top: 90px"
              />
            </p>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="12" md="7" lg="7">
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
                margin-top: 30px;
                padding: 10px;
              "
            >
              We identify, empower and support in scaling up small survival
              enterprises owned by hardworking women and young entrepreneurs
              from rural and underserved communities.
            </p>
            <p
              style="
                font-family: Roboto;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: 21px;
                letter-spacing: 0em;
                text-align: left;
                margin-top: 30px;
                padding: 10px;
              "
            >
              The identified women and youth in agribusiness or non-farm
              enterprises are trained among other things in business development
              skills, financial literacy, record keeping, group dynamics,
              customer care and life skills using customized content.
            </p>
            <p
              style="
                font-family: Roboto;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: 21px;
                letter-spacing: 0em;
                text-align: left;
                margin-top: 30px;
                padding: 10px;
              "
            >
              We then organize them into savings groups according to their
              enterprises; thereafter we enable these women and youth in groups
              to access scale-up seed capital in form of micro credit at only 3%
              interest. And the 3% interest goes back to the savings groups for
              their sustainability. After a member enterprise has reached a
              level of repayment, she/he pays the borrowed money to the savings
              group for other new trained women and youth owned enterprises to
              access it and vise-vasa.
            </p>
            <p
              style="
                font-family: Roboto;
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: 21px;
                letter-spacing: 0em;
                text-align: left;
                margin-top: 30px;
                padding: 10px;
              "
            >
              Most of our trained and recruited entrepreneurs who receive
              scale-up seed capital inform of microloans are women and young
              people, who traditionally have fewer resources and less access to
              financial services from banks. YAGANET frequently links these
              savings groups to other financial institutions where necessary for
              continuous access to financial and non financial services..
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
        PROGRAM<span style="color: #1b9527; font-size: 2rem"> PILLARS</span>
      </h3>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="12" md="3" lg="3">
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="../assets/financial.webp"
            >
            </v-img>

            <v-card-subtitle class="pb-0"> Financial Inclusion</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                Reduce Gender Gaps in financial Inclusion by Empowering women,
                young girls and boys with financial literacy skills and
                knowledge to make informed financial decisions.​ Organise them
                into saving groups to enable access to finances for their
                enterprise scaling up.
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text> Share </v-btn>

              <v-btn color="orange" text> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="3" lg="3">
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="../assets/research.webp"
            >
            </v-img>

            <v-card-subtitle class="pb-0"> Research </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>
                We do research for evidence based interventions. We provide
                development and welfare support services including the expanded
                social package that influences rural underserved communities to
                improve among others services;
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text> Share </v-btn>

              <v-btn color="orange" text> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="3" lg="3">
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="../assets/entreprenure.jpg"
            >
            </v-img>

            <v-card-subtitle class="pb-0">
              Entrepreneurship Development</v-card-subtitle
            >

            <v-card-text class="text--primary">
              <div>
                Women and youth play a very important role in poverty
                eradication and improving the level of living. Since the overall
                level of education attainment among rural women and youth is
                low, their contribution is often limited to unskilled and manual
                work.
              </div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text> Share </v-btn>

              <v-btn color="orange" text> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="3" lg="3">
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              
            </v-img>

            <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

            <v-card-text class="text--primary">
              

              <div>Women and youth play a very important role in poverty
                eradication and improving the level of living. Since the overall
                level of education attainment among rural women and youth is
                low, their contribution is often limited to unskilled and manual
                work.</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text> Share </v-btn>

              <v-btn color="orange" text> Explore </v-btn>
            </v-card-actions>
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
          <v-img max-width="700" src="../assets/try6.jpg" />
        </v-col>
      </v-row> </v-container
    ><br />
  </div>
</template>

<script>
export default {
  name: "HowWeWork",
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

<style>
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