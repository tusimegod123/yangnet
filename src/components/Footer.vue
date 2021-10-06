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
        <v-col cols="6" md="4" sm="12" lg="4" class="contact">
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

        <v-col cols="12" md="4" sm="12" lg="4" class="social">
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
              text-decoration: none;
            "
          >
            <v-icon large color="white"> mdi-facebook </v-icon>
            facebook
          </a>
          <br />

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
              text-decoration: none;
            "
          >
            <v-icon large color="white"> mdi-twitter </v-icon>
            twitter
          </a>
          <br />

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
              text-decoration: none;
            "
          >
            <v-icon large color="white"> mdi-linkedin </v-icon>
            linkedIn </a
          ><br />

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
              text-decoration: none;
            "
          >
            <v-icon large color="white"> mdi-instagram </v-icon>
            instagram </a
          ><br />

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
              text-decoration: none;
            "
          >
            <v-icon large color="white"> mdi-youtube </v-icon>
            youtube
          </a>
        </v-col>

        <v-col cols="12" sm="12" md="4" lg="4" class="get-in-touch">
          <h3>Get in touch with us</h3>
          <v-form @submit.prevent="sendEmail">
            <v-text-field
              v-model="from_name"
              name="from_name"
              label="Name"
              required
              solo
            ></v-text-field>
            <v-text-field
              v-model="email"
              name="email"
              label="Email"
              required
              solo
            ></v-text-field>
            <v-textarea
              v-model="message"
              name="message"
              label="Message"
              required
              solo
            ></v-textarea>
            <v-btn color="white" type="submit"
              ><span style="color: green">Submit</span></v-btn
            >
          </v-form>
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
import emailjs from "emailjs-com";
export default {
  name: "Footer",
  data() {
    return {
      from_name: "",
      from_email: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_7pgatdz",
          "template_vlx69ag",
          e.target,
          "user_uzd88AsOBp8NFOwHdJAjA",
          {
            from_name: this.name,
            email: this.email,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.from_name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style scoped>
.contact {
  padding-left: 70px;
}
.social {
  padding-left: 70px;
}
#young {
  text-align: left;
}
.get-in-touch {
  padding-right: 70px;
}
@media only screen and (max-width: 768px) {
  .contact {
    padding-left: 20px;
  }
  .social {
    padding-left: 20px;
  }
  #young {
    display: none;
  }
}
</style>
