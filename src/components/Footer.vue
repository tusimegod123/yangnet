<template>
  <div>
    <v-divider></v-divider><br />
    <v-container fluid style="background-color: #1b9527">
      <v-row>
        <!-- <v-footer color="#3b6ef3"> -->
        <v-col>
          <v-card-text style="text-align: center">
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid style="background-color: #1b9527; color: #ffff">
      <v-row>
        <v-col md="3" xs="6">
          <h3 style="color: #ffff">CONTACT US</h3>
          <p
            style="
              font-size: 14px;
              font-style: normal;
              font-weight: 300;
              line-height: 30px;
              letter-spacing: 0em;
              color: #fffff;
            "
          >
            Plot 2269, Ntinda-Kigowa,Kampala. Kamaiba Road Kasese <br />
            Municipality Kasese District <br />
            P.O.Box 308 info@yaganet.org <br />
            +256 752900190
          </p>
        </v-col>

        <v-col md="3" xs="6">
          <h3>Social</h3>
          <a
            href="https://www.facebook.com/Young.AgroGreenafrica.net/"
            target="_blank"
            style="
              color: #ffff;
              font-size: 14px;
              font-style: normal;
              font-weight: 300;
              line-height: 30px;
              letter-spacing: 0em;
              text-decoration:none;
            "
          >
            facebook
          </a>
          <br /><br />
          <a
            href="https://twitter.com/YAGANET1"
            target="_blank"
            style="
              font-size: 14px;
              font-style: normal;
              font-weight: 300;
              line-height: 30px;
              letter-spacing: 0em;
              color: #ffff;
              text-decoration:none;
            "
          >
            twitter
          </a>
          <br /><br />
          <a
            href="https://www.linkedin.com/in/young-agro-green-africa-network-b57a95186/"
            target="_blank"
            style="
              font-size: 14px;
              font-style: normal;
              font-weight: 300;
              line-height: 30px;
              letter-spacing: 0em;
              color: #ffff;
                 text-decoration:none;
            "
          >
            linkedIn </a
          ><br /><br />
          <a
            href="https://www.instagram.com/yaganet_africa/"
            target="_blank"
            style="
              font-size: 14px;
              font-style: normal;
              font-weight: 300;
              line-height: 30px;
              letter-spacing: 0em;
              color: #ffff;
                 text-decoration:none;
            "
          >
            instagram </a
          ><br /><br />
          <a
            href="https://youtu.be/tkKPL_uWbek"
            target="_blank"
            style="
              font-size: 14px;
              font-style: normal;
              font-weight: 300;
              line-height: 30px;
              letter-spacing: 0em;
              color: #ffff;
                 text-decoration:none;
            "
          >
            youtube
          </a>
        </v-col>
        <v-col cols="12" md="3" id="col-hiden">
          <v-img
            style="margin-left: auto; margin-right: auto"
            height="135"
            width="130"
            src="../assets/YAGANETBOLD.jpg"
          ></v-img>
          <p>
            Young Agro-Green Africa Network (YAGANET) is an innovative social
            enterprise unleashing women and young people's potentials through
            financial inclusion.
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-container fluid style="background-color: #148e20">
      <v-row>
        <v-col>
          <v-card-text class="white--text" style="text-align: center">
            {{ new Date().getFullYear() }}
            <small>© YAGANET </small>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
