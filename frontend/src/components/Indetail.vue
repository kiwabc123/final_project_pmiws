<template>
  <div>
    <div class="mt-10 ml-10" justify="center" align="center">
      <v-row>
        <v-col cols="4" sm="4">
          <img :src="selectimage()" width="400px" />

        </v-col>
        <v-col cols="2" sm="2">
          <div v-for="(item, idx) in images" :key="idx">
            <img :src="`http://localhost:8090/api/image/dataset/${item}.jpeg`" height="100px" width="100px"
              @mouseover="updateImage(idx)" />

          </div>
        </v-col>
        <v-col cols="6">
          <v-card max-width="600" class="rounded-lg rounded-tr-0 pa-5">

            <div class="ma-3">
              <v-text-field dense hide-details="auto" class="ma-5 width: 400px;" outlined :rules="[intRules]"
                suffix="USD" v-model="cost">
                <template v-slot:label>
                  cost <strong>or</strong> cost until delivery . <v-icon>{{ mdiTruckCargoContainer }}

                  </v-icon>
                </template>
              </v-text-field>
            </div>

            <v-row>

              <v-col cols=9>
                <div class="ma-3">
                  <v-text-field dense hide-details="auto" class="ma-5 width: 400px " outlined :rules="[intRules]"
                    suffix="%" v-model="profit">
                    <template v-slot:label>
                      Selling price
                      <strong>and</strong> profit. <v-icon>{{ mdiPercentOutline }}

                      </v-icon>

                    </template>
                  </v-text-field>
                </div>

              </v-col>
              <v-col cols=3>
                <v-row class="d-flex align-center justify-center mt-2 ml-4">
                  <p><strong>Unit cost</strong></p>

                </v-row>
                <v-row class="d-flex align-center justify-center mt-2 ml-4">
                  <p>{{ CurrencyExchange }} <strong>USD</strong></p>
                </v-row>
              </v-col>
            </v-row>
            <v-row class="ma-8">
              <v-btn color="primary" outlined large @click="calculated(),checkcal=true">
                calculate
                <v-icon dark class="ma-2">
                  {{ mdiChartLine }}
                </v-icon>
              </v-btn>
            </v-row>
      
              <chart :series="series" :chartOptions="chartOptions"></chart>
            

          </v-card>
        </v-col>
      </v-row>
    </div>

    <div class="mt-16 " justify="center" align="center">

      <h2 class="red--text text--lighten-1">{{ product.detail }}</h2>
      <table style="width:70%" class="pa-10">
        <tr>


        </tr>
        <tr>
          <td>
            Supplier:
          </td>
          <td>
            {{ supplier.name }}
          </td>
        </tr>
        <tr>
          <td>
            Category:
          </td>
          <td>
            {{ product.category }}
          </td>
        </tr>
        <tr>
          <td>
            Price:
          </td>
          <td>
            {{ CurrencyExchange }} $,{{ product.price.yuan }} ¥ / unit
          </td>
        </tr>


        <tr v-for="(value, key, index)  in contacts" :key="index">

          <td>{{ key }} :</td>
          <td>{{ value }}</td>

        </tr>
      </table>
    </div>

  </div>
</template>
<script>
import axios from "axios";
import chart from "./chart.vue"
import { mdiTruckCargoContainer } from '@mdi/js';
import { mdiPercentOutline } from '@mdi/js';
import { mdiChartLine } from '@mdi/js';
// import VueGallerySlideshow from "vue-gallery-slideshow";
export default {
  name: "HelloWorld",

  components: {
    chart: chart,

    // VueGallerySlideshow,
  },
  data() {
    return {
      checkcal: false,
      series: [],
      mdiTruckCargoContainer: mdiTruckCargoContainer,
      mdiPercentOutline: mdiPercentOutline,
      mdiChartLine: mdiChartLine,
      intRules: v => {
        if (String(v).length > 0 && !isNaN(parseFloat(v)) && v >= 0 && v <= 999999) return true;

        return 'Number has to be between 0 and 999999';
      },
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      check: false,
      checkbox: 0,
      select: 0,
      images: [],
      index: 0,
      product: [],
      supplier: {},
      annotations: {},
      profit: 30,
      cost: 110,
      price: 10,
      chartOptions: {},
      contacts: {},
    };
  },
  methods: {
    calEndpoint(startX, startY, BreakSale, BreakAmount) {
      // y-y1 = m(x-x1)
      var m = (startY - BreakSale) / (startX - BreakAmount)
      // console.log("m:",m,"y:",StartY-BreakSale,"x:",startX-BreakAmount)
      var EndX = BreakAmount * 2
      var EndPointY = (m * (startX - EndX) - startY) * -1
      return EndPointY
    },
    Currency(price){
      console.log(Number((price) * JSON.parse(localStorage.getItem("Currency")).USD).toFixed(2))
      return Number((price) * JSON.parse(localStorage.getItem("Currency")).USD).toFixed(2)
    },
    calculated() {
      var price = parseFloat(this.Currency(parseFloat(this.product.price.yuan)));
      console.log(typeof price)
      // console.log("price:", this.price, typeof this.price , parseInt(this.CurrencyExchange))
      var BreakEvenAmount = 0
      var sellprice = price + (price * this.profit / 100)
      BreakEvenAmount = this.cost / (sellprice - price)
      var BreakEvenSales = 0
      BreakEvenSales = BreakEvenAmount * sellprice
      console.log((Number(BreakEvenAmount.toFixed(2))), Number(BreakEvenSales.toFixed(2)))

      var Y_last_cost = this.calEndpoint(0, 0, BreakEvenSales, BreakEvenAmount)
      var Y_last_sale = this.calEndpoint(0, this.cost, BreakEvenSales, BreakEvenAmount)
      console.log(Number(Y_last_cost).toFixed(2))
      this.series = [
        {
          name: "Total cost",
          color: '#0066FF',
          // data: [2, 6, 10]
          data: [{
            x: 0,
            y: 0
          },
          {
            x: Number(BreakEvenAmount).toFixed(2),
            y: Number(BreakEvenSales).toFixed(2),
          },
          {
            x: BreakEvenAmount * 2,
            y: Number(Y_last_cost).toFixed(2)
          }],
        },
        {
          name: "Sales",
          // data: [0, 6, 12]
          color: '#FF0000',
          data: [{
            x: 0,
            y: this.cost,

          }, {
            x: Number(BreakEvenAmount).toFixed(2),
            y: Number(BreakEvenSales).toFixed(2),
          },

          {
            x: BreakEvenAmount * 2,
            y: Number(Y_last_sale).toFixed(2)
          }],
        }
      ]


      this.chartOptions = {
        chart: {
          height: 350,
          type: "line",
          stacked: false
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          type: 'numeric'
        },


        annotations: {

          points: [{
            x: Number(BreakEvenAmount).toFixed(2),
            y: Number(BreakEvenSales).toFixed(2),
            marker: {
              size: 8,
              fillColor: '#fff',
              strokeColor: 'red',
              radius: 2,
              cssClass: 'apexcharts-custom-class'
            },
            label: {
              borderColor: '#FF4560',
              offsetY: 0,
              style: {
                color: '#fff',
                background: '#FF4560',
              },

              text: 'Even Break Point ',
            }
          },
          ]
        },

      }



    },
    // getproduct(id) {
    //   axios
    //     .post("http://127.0.0.1:5000/searchproduct", { id: id })
    //     .then((response) => {
    //       this.product = response.data[0];
    //       console.log(this.product);
    //       const propertyValues = Object.values(this.product.image);

    //       this.images = propertyValues;

    //       console.log(propertyValues);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // },
    getproduct(id) {
      axios.get("http://localhost:8090/api/product/byID/?id=" + id)
        .then((response) => {
          console.info(response.data[0], id)
          this.product = response.data[0]
          // const propertyValues = Object.values(this.product.image);

          this.images = this.product.images
          console.log("images", this.images)

          var supplier = response.data[0].supplier.toString()
          console.info("sup", supplier)
          axios.post("http://localhost:8090/api/supplier/byID", { id: supplier })
            .then(res => {
              // console.log("sup", res)
              this.supplier = res.data
              // console.log(this.supplier)

              var contacts = this.supplier.contact
              Object.keys(contacts).forEach(key => {
                // console.log(key, contacts[key]);
                var obj = {}
                obj[key] = contacts[key]
                // console.log(obj)
                this.contacts[key] = contacts[key]

              });
              // console.log(this.contacts)

         


            })

        })
        .catch(function (error) {
          console.log(error);
        });
      // .then((res)=>{
      //   supplier =res.data[0].supplier.toString()
      //   console.info(supplier)
      //   axios.post("http://localhost:8090/api/supplier/byname",{name:supplier})
      //   .then(res=>{
      //     console.log("sup",res)
      //   })
      // })
    },
    async getsuppiler(product) {
      console.log("product", product)

    },
    updateImage(idx) {
      this.select = idx;
    },
    fetchCurrencies() {
      // if (localStorage.getItem("Currency")) {
      //   console.log('not expire')
      //   return "done"
      // }
      const expirationDuration = 1000 * 60 * 60 * 12; // 12 hours

      const prevAccepted = localStorage.getItem("accepted");
      const currentTime = new Date().getTime();

      const notAccepted = prevAccepted == undefined;
      const prevAcceptedExpired = prevAccepted != undefined && currentTime - prevAccepted > expirationDuration;
      if (notAccepted || prevAcceptedExpired) {

        localStorage.setItem("accepted", currentTime);

        fetch("https://v6.exchangerate-api.com/v6/72b119780aeb61fb0032c222/latest/CNY")
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("NETWORK RESPONSE ERROR");
            }
          })
          .then((data) => {
            //  console.log(data.conversion_rates["RMB"])

            localStorage.setItem("Currency", JSON.stringify({ "USD": data.conversion_rates["USD"] }))
            // const calculated = 12 * data.conversion_rates["USD"];
            console.log(localStorage.getItem("Currency"))
          })
          .catch((error) => console.error("FETCH ERROR:", error));
      }
    }
    , selectimage() {

      var url = 'http://localhost:8090/api/image/dataset/'
      var extension = '.jpeg'
      console.log(url + this.images[this.select] + extension)
      if (typeof this.images[this.select] == "undefined") {
        //gix error
        return require("../../public/images.png")

      }
      return (url + this.images[this.select] + extension)



    },

  },
  created() {
    this.getproduct(this.$route.query.productid);
    // console.log(this.$route.query.productid);
    // this.getsuppiler(this.product)
    this.fetchCurrencies();

  },
  computed: {
    slicedArray() {
      console.log(this.images.slice(0, 1));
      return this.images.slice(0, 1);
    },
    CurrencyExchange() {
      // console.log('product',this.product)
      if (this.product) {
        console.log("price", Number(parseInt(this.product.price.yuan) * JSON.parse(localStorage.getItem("Currency")).USD).toFixed(2))

        return Number(parseFloat(this.product.price.yuan) * JSON.parse(localStorage.getItem("Currency")).USD).toFixed(2)
      
      }
      return 0;
    }

  },
};
</script>
<style>
td,
th {

  text-align: left;
  padding: 8px;
}
</style>


