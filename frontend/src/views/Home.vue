<template>
  <v-app light>
    <Appbar></Appbar>
    <v-main>
      <section>
        <v-parallax id="my-lax"
          src="https://c.wallhere.com/photos/01/ed/seacpes_schiff_2017_burchardkai_kai_burchard_waltershof_eurogate-579248.jpg!d"
          height="600">
          <v-layout column align-center justify-center class="white--text">
            <h1 class="white--text mb-2 display-1 text-xs-center"
              style="font-weight: 900; text-shadow: 3px 2px #000000">Product image matching with supplier</h1>
            <div class="white--text subheading mb-3 text-xs-center"
              style="font-weight: 900; text-shadow: 2px 2px #000000">An intelligence AI find your product from China
              website</div>
            <v-btn class="btn btn-1" dark large @click="gotohome()">
              start
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>

      <section>

        <v-layout column wrap class="my-5" align-center>

          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class=" layout justify-center">
                      <!-- <v-icon x-large class="blue--text text--lighten-2 ">mdi-earth</v-icon> -->
                    </v-card-text>
                    <v-row justify="center">
                      <!-- <v-avatar size="130px">
                        <img src="https://cdn-icons-png.flaticon.com/512/3203/3203214.png" alt="fast">
                      </v-avatar> -->
                      <v-icon x-large class="icon text--lighten-2 ">mdi-run-fast</v-icon>
                    </v-row>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Fast</div>
                    </v-card-title>
                    <v-card-text>
                      Quick loading from deep learning which have trained many times.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class=" layout justify-center">
                      <!-- <v-icon x-large class="blue--text text--lighten-2 ">mdi-earth</v-icon> -->
                    </v-card-text>
                    <v-row justify="center">
                      <!-- <v-avatar size="130px">
                        <img src="https://cdn-icons-png.flaticon.com/512/4147/4147064.png" alt="simple">
                      </v-avatar> -->
                      <v-icon x-large class="icon text--lighten-2 ">mdi-thumb-up</v-icon>
                    </v-row>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Simple</div>
                    </v-card-title>
                    <v-card-text>
                      Easy to use, just upload product image and get your supplier from Chinese products.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class=" layout justify-center">
                      <!-- <v-icon x-large class="blue--text text--lighten-2 ">mdi-earth</v-icon> -->
                    </v-card-text>
                    <v-row justify="center">
                      <!-- <v-avatar size="130px">
                        <img src="https://cdn-icons-png.flaticon.com/512/484/484169.png" alt="one">

                      </v-avatar> -->

                      <v-icon x-large class="icon text--lighten-2 ">mdi-map-marker</v-icon>
                    </v-row>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">All in one place</div>
                    </v-card-title>
                    <v-card-text>
                      Also have financial calculation system to get your costs and finds profit for you.
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>

      </section>



      <section>
        <v-parallax class="bg" height="380">
          <v-container grid-list-xl>
            <v-layout row wrap justify-center class="my-5">
              <v-row no-gutters>

                <div class="headline col-md-5 offset-md-1">We use TensorFlow to our main system, it is an open-source
                  end-to-end platform for creating Machine
                  Learning applications. It is a symbolic math library that uses dataflow and differentiable programming
                  to perform various tasks focused on training and inference of deep neural networks.</div>
                <v-img max-height="400px" max-width="450px" src="https://sv1.picz.in.th/images/2022/11/27/GQSMPt.png"
                  class="ml-auto"></v-img>


              </v-row>
              <v-flex sm8 offset-sm5>
                <v-row no-gutters>
                  <v-col>
                    <v-card class="elevation-0 transparent">

                    </v-card>
                  </v-col>
                </v-row>
              </v-flex>
            </v-layout>
          </v-container>
        </v-parallax>
      </section>

      <section>

        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-row no-gutters>


              <v-img max-height="400px" max-width="490px"
                src="https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-price-a-product.jpg?v=1611727768&width=1024"
                class="ml-auto"></v-img>

              <div class="headline col-md-6 offset-md-1">So we've developed a website system with TensorFlow to locating
                Chinese products. Just input the image into the search box. After system analysis with deep learning,
                the products that are closest will be found, with their details and contact information, so that you can
                reach out to the seller.</div>

            </v-row>
            <v-flex sm8 offset-sm5>
              <v-row no-gutters>
                <v-col>
                  <v-card class="elevation-0 transparent">

                  </v-card>
                </v-col>
              </v-row>
            </v-flex>
          </v-layout>
        </v-container>

      </section>

      <section>
        <v-parallax class="bg" height="430">
          <v-container grid-list-xl>
            <v-layout row wrap justify-center class=" my-5">
              <v-row no-gutters>

                <div class="headline col-md-5 offset-md-1">We also have financial calculation called break-even analysis
                  that weighs the costs of a product against the unit sell price to determine the point at which you
                  will break even. In other words, it reveals the point at which you will have sold enough units to
                  cover all of your costs. At that point, you will have neither lost money nor made a profit.</div>

                <v-img max-height="400px" max-width="460px" src="https://sv1.picz.in.th/images/2022/11/27/GQzCCJ.png"
                  class="ml-auto"></v-img>


              </v-row>
              <v-flex sm8 offset-sm5>
                <v-row no-gutters>
                  <v-col>
                    <v-card class="elevation-0 transparent">

                    </v-card>
                  </v-col>
                </v-row>
              </v-flex>
            </v-layout>
          </v-container>
        </v-parallax>
      </section>

      <section>
        <v-parallax  height="430">
          <v-layout column wrap class="my-5" align-center height="430">

            <v-flex xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-center>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class=" layout justify-center">
                        <!-- <v-icon x-large class="blue--text text--lighten-2 ">mdi-earth</v-icon> -->
                      </v-card-text>
                      <v-row justify="center">
                        <v-avatar size="150px">
                          <img src="https://sv1.picz.in.th/images/2022/11/27/GReWi8.png" alt="S">
                        </v-avatar>
                      </v-row>
                      <v-card-title primary-title class="layout justify-center">

                        <div class="headline text-xs-center">Jittakorn Pankam</div>
                      </v-card-title>
                      <v-card-text>
                        Studying in Mae Fah Luang University. Faculty of Information and Technology. Major Software
                        Engineering
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <!-- <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon> -->
                      </v-card-text>
                      <v-row justify="center">
                        <v-avatar size="150px">
                          <img src="https://sv1.picz.in.th/images/2022/11/27/GRygSW.jpg" alt="Golf">
                        </v-avatar>
                      </v-row>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline">Keerati Nitmanee</div>
                      </v-card-title>
                      <v-card-text>
                        Studying in Mae Fah Luang University. Faculty of Information and Technology. Major Software
                        Engineering.
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <!-- <v-icon x-large class="blue--text text--lighten-2">share</v-icon> -->
                      </v-card-text>
                      <v-row justify="center">
                        <v-avatar size="150px">
                          <img src="https://sv1.picz.in.th/images/2022/11/27/GRexzW.png" alt="Q">
                        </v-avatar>
                      </v-row>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Tiradet Janta</div>
                      </v-card-title>
                      <v-card-text>
                        Studying in Mae Fah Luang University. Faculty of Information and Technology. Major Software
                        Engineering.
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </v-parallax>
      </section>

      <section>
        <v-parallax :src="imageLink.logo" height="130">
          <v-container grid-list-xl>
            <v-layout row wrap justify-center class="my-5">

              <v-flex xs12 sm4 offset-sm1>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="white--text">
                    <div class="headline offset-md-9">Contact</div>
                  </v-card-title>
                  <v-card-text class="offset-md-8 white--text">
                    6231305025@lamduan.mfu.ac.th
                    6231305032@lamduan.mfu.ac.th
                    6231305034@lamduan.mfu.ac.th
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-parallax>
      </section>





    </v-main>
  </v-app>
</template>

<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
<script>
import Appbar from '@/components/Appbar'
export default {
  components: {

    Appbar
  },
  
  name: "App",
  data: function() {
    return {
      title: "Endorfine",
      imageLink: {
        main:
          "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fb13f0434-b228-11e6-8e5d-5252025056ab_web_scale_0.4666667_0.4666667__.jpg?alt=media&token=660df23e-599e-434b-9313-ba69c973eeea",
        sub_main:
          "https://wallpaperaccess.com/full/3247.jpg",
        logo:
          "https://color-hex.org/colors/f49d1a.png",
        social_cover:
          "https://www.icolorpalette.com/download/solidcolorimage/181818_solid_color_background_icolorpalette.png"
      },
      email: "",
      emailRules: [
        v => {
          return !!v || "E-mail is required";
        },
        v =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid"
      ],
      subscribed: false
    };
  },
  methods: {
     gotohome() {
 
    //   let routeData = this.$router.resolve({
    //     path: "/home",
    this.$router.push({ name: 'app' })
    //   });
    //   window.open(routeData.href, "_self");
    },
    subscribe: function() {
      this.subscribed = !this.subscribed;
    }
  },

  computed: {
    imgHeight: function() {
      var offset = 320;
      console.log("new image height is " + (this.pageHeight - offset));
      return this.pageHeight - offset;
    }
  },

  mounted: function() {
    this.calculateHeight();
  }
};
</script>

<style scoped>
.finedTitle {
  font-weight: 900;
  text-shadow: 2px 2px #000000;
}

.social-icon {
  font-size: 21px;
  color: white;
}
.icon{
  color: #F49D1A ;
}
.bg{
  background: linear-gradient(#FFE15D, #DC3535) 
}
.btn {

  margin: 10px;
  
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
 /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2);*/
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
 }
 .btn:hover {
  background-position: right center; /* change the direction of the change here */
}

.btn-1 {
  background-image: linear-gradient(to right, #FFE15D 0%,#DC3535 51%,#FFE15D 100%);
}
</style>
