<template>
  <div>
    <div style="text-align: center; margin-top: 15px">
      <h3 style="font-size: 2rem">
        <span style="color: #1b9527; font-size: 2rem"> OUR </span>PROJECTS
      </h3>
    </div>
    <v-container style="text-align: center; font-family: italic">
      <v-row>
        <v-col>
          <p>
            Our interventions are meant to bring about sustainable relationships
            among human being and surrounding environment, cause positive impact
            to the vulnerable people from poor underserved communities. We
            ensure that our beneficiaries experience a shift, rethinking our
            strategy based on values and the future becomes more encouraged.
          </p>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid>
      <v-row id="second-container">
        <v-col cols="12" sm="12" md="3" lg="3">
          <v-card class="mx-auto">
            <v-img src="../assets/finacial-litrancy.jpg" height="200px"></v-img>

            <v-card-title style="font-size: 1rem">
              Financial literacy education project
            </v-card-title>

            <v-card-actions>
              <v-btn color="orange lighten-2" text> Read more </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  This project aims at imparting skills and knowledge of
                  financial literacy among the organization target
                  beneficiaries. And also improve their confidence in making
                  informed financial decisions. While great achievement has been
                  made in terms of facilitating greater access to and use of
                  financial services among underserved populations, barriers to
                  financial literacy education and inclusion remain. Reduce
                  Gender Gaps by directly engaging with different stakeholders
                  including, teenagers, women and men, and organize them into
                  groups to increase access to resources and opportunities
                  through financial education/inclusion, digital literacy,
                  promoting income generating initiatives and entrepreneurships
                  skills among women and young people. This is a continuous
                  project that has been running with support from partners and
                  individual well-wishers. The project has since 2015 been
                  implemented in the districts of Moyo, Wakiso, Mbarara, Hoima,
                  Bushenyi, Kampala, Rukungiri and currently active in Kasese
                  district. We have been able to reach over 15000 people.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="3" lg="3">
          <v-card class="mx-auto">
            <v-img src="../assets/resilence.jpg" height="200px"></v-img>

            <v-card-title style="font-size: 1rem">
              Strengthening Resilience & Economic Empowerment among PWDs in the
              face of Covid-19 pandemic
            </v-card-title>

            <v-card-actions>
              <v-btn color="orange lighten-2" text> Read more </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show2 = !show2">
                <v-icon>{{
                  show2 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show2">
                <v-divider></v-divider>

                <v-card-text>
                  In Uganda, 16.4% of the population lives with some form of
                  disability, Kasese municipality accounts for 22.6% of all
                  persons with disabilities (PWDs) living in Kasese district.
                  People with disabilities have hopes and dreams just as any
                  other people. The reality, however, is that many in Kasese
                  district remain marginalized and excluded. Covid-19 caused a
                  huge impact on PWDs. The situation became worse for PWDs in
                  the district experiencing frequent occurrences of
                  environmental natural calamities such as flash floods and
                  landslides leaving many PWDs displaced. Many slip into a
                  survival mode as a result of a breakdown in their livelihoods,
                  further increasing risks of gender-based violence. The
                  Strengthening Resilience and Economic Empowerment among PWDs
                  is a Global Greengrants Fund supported project. The projects
                  objectives are to; mobilize PWDs for economic recovery and
                  access to empowerment skills to reduce their vulnerability;
                  build the capacities of PWDs in human rights so they are aware
                  of and able to demand their rights; and assess the
                  participation of PWDs in development projects to inform
                  awareness campaigns and reduce stigma and discrimination
                  towards PWDs. Leveraging on partnerships, together with Kasese
                  District Association of Persons with Disabilities (KADUPEDI)
                  we have mobilized groups of women with disabilities and
                  trained them financial literacy, held community dialogues and
                  build the capacity of board members of KADUPEDI for better
                  project delivery.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="3" lg="3">
          <v-card class="mx-auto">
            <v-img src="../assets/menstral.jpg" height="200px"></v-img>

            <v-card-title style="font-size: 1rem">
              Ending Menstrual Stigma among teenage girls and women with
              disabilities affected by floods amidst Covid-19
            </v-card-title>

            <v-card-actions>
              <v-btn color="orange lighten-2" text> Read more </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show3 = !show3">
                <v-icon>{{
                  show3 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show3">
                <v-divider></v-divider>

                <v-card-text>
                  While water, sanitation and hygiene (WASH) continue to be the
                  first line of defense against COVID-19. It’s widely recognized
                  that access to clean, running water and soap for handwashing
                  is a critical need that must be met in our global response to
                  the pandemic. Women and adolescent girls who are internally
                  displaced living in the aftermath of a natural disaster like
                  the Kasese floods, face an added burden in managing their
                  periods during the pandemic, but this is still a challenge,
                  with now current reports of teenage girls exchanging pads for
                  sex, this puts disabled girls in double vulnerability to
                  violence. With support from Raising Teenagers Uganda,
                  vulnerable teenage girls and women including those with
                  disabilities from the three divisions of Nyamwamba, Bulembya
                  and Central division from Kasese municipality who were
                  severely affected by the floods continue to benefit from the
                  menstrual material relief program. We have so far provided
                  quality reusable sanitary pads, soap, and under wears, and
                  further created awareness on menstrual hygiene among 200
                  teenage girls including those with disabilities.
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>

        <v-col cols="12" sm="12" md="3" lg="3">
          <v-card class="mx-auto">
            <v-img src="../assets/whatsap.jpg" height="200px"></v-img>

            <v-card-title style="font-size: 1rem">
              Emergency response to climate change effects e.g Food relief to
              floods affected people-Kasese-Uganda
            </v-card-title>

            <v-card-actions>
              <v-btn color="orange lighten-2" text> Read more </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="show4 = !show4">
                <v-icon>{{
                  show4 ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show4">
                <v-divider></v-divider>

                <v-card-text>
                  Disasters and complex emergencies often have a significant
                  impact on the environment. Emergencies are urgent situations
                  that occur and cause human suffering or imminently threaten
                  lives or livelihoods. At YAGANET, we bridge short-term
                  humanitarian and contribute to long-term development
                  approaches to promote disaster resilience and sustainable
                  development, and address the needs of the most vulnerable
                  communities. In Kasese district, For the last seven years, the
                  district has experienced repeated floods and landslides as in
                  2013, 2014, 2015, 2020, and 2021. This has been as a result of
                  the heavy rains that have led to the breaking of the banks of
                  the major rivers of Lhubiriha, Mubuku, Nyamwamba, Nyamugasani,
                  Ssebwe, Rwembyo and Thaku among others, which flood
                  simultaneously at the same time from the Rwenzori Mountain.
                  Since 2020, YAGANET has received support from partners like
                  ACRE Uganada/PennyAppeal which supported 200 floods affected
                  households with food packs that included maize flour, beans,
                  cooking oil, rice, sugar, and soap. And recently in 2021
                  YAGANET has received support from Joy for Children Uganda and
                  supplied relief materials including maize floor, beans, soap
                  and also sanitary pads for teenage girls to over 100
                  beneficiaries. With support from Raising Teenagers Uganda
                  supported vulnerable teenage girls including those living with
                  disabilities with reusable sanitary pads from communities
                  affected by floods. ‘The reward of feeding the poor is
                  immense, and Bible tells us that the righteous
                  <b>
                    “give food, out of love for Him, to the poor and the orphan
                    and the captive”
                  </b>
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col style="background: #edf9ee">
          <p
            style="
              font-family: Roboto;
              font-size: 1.1rem;
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
          <v-img max-width="860" src="../assets/IMG_20210925_151856_902.jpg" />
        </v-col>
      </v-row> </v-container
    ><br />
  </div>
</template>

<script>
import Footer from "./Footer.vue";
import MainNav from "./MainNav.vue";
import TopNav from "./TopNav.vue";
export default {
  name: "ProjectsComponent",
  components: { TopNav, MainNav, Footer },
  data: () => ({
    show: false,
    show2: false,
    show3: false,
    show4: false,
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
