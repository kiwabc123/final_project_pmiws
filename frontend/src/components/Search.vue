<template>
  <v-container>
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="mb-3">Product Image Matching With Supplier</h1>
      </div>
      <div class="col-md-5 offset-md-1">
        <form>
          <div class="form-group">
            <label for="my-file">Select Image</label>
            <v-file-input v-model="image" outlined dense label="File input" accept="image/*" @change="onFileChange" />

            <div class="border p-2 mt-3">
              <p>Preview Here:</p>
              <template v-if="imageUrl">
                <img :src="imageUrl" class="img-fluid" height="300px" />
                <p class="mb-0">file name: {{ image.name }}</p>
                <p class="mb-0">size: {{ image.size / 1024 }}KB</p>
              </template>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div>
      <v-container class="grey lighten-5">
        <v-flex d-flex>
          <v-layout wrap>
            <v-flex md4 v-for="(item, idx) in products.slice().reverse()" :key="idx">
              <v-card flat class="ma-3 text-xs-center" @click="gotodetail(item._id)">
                <v-img :src="`http://localhost:8090/api/image/dataset/${item.images[0]}.jpeg`" aspect- ratio="2.75">
                </v-img>
                <v-card-title primary-title class="justify-center">
                  <div>
                    <h3 class="headline pink--text text--accent-2">
                      {{ item.detail }}
                    </h3>
                    <div>
                      {{ item.price['yuan'] }}
                    </div>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-container>
    </div>
    <v-dialog class="text-center" v-model="loading" transition="dialog-bottom-transition" persistent width="300">
      <v-card color="deep-purple accent-3" dark>
        <v-card-text>
          I am searching
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
// import a from '../../../backend/dataset'
import axios from "axios";
export default {
  name: "HelloWorld",

  data() {
    return {
      image: undefined,
      imageUrl: "",
      alignments: ["start", "center", "end", "ddd", "dada"],
      // products: {},
      products:[],
      data: [],
      loading: false,
    };
  },

  methods: {
    createImage(file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    onFileChange(file) {
      if (!file) {
        return;
      }
      this.createImage(file);
      this.searchImage();
    },
    async searchImage() {
      this.loading = true;
      console.log(this.image.name);
      let formData = new FormData();
      formData.append("image", this.image);
      await axios
        .post("http://localhost:8090/api/product/search", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })

        .then((response) => {
          // var data = response.data
          const data = response.data;
          console.table(data)
          this.products = data




          // for (let i = 0; i < data.length; i++) {
          //   this.products.push(data[i]);
          // }
          //  this.products= products

          // console.log(this.products);
          if (response)
            this.loading = false;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    gotodetail(id) {
      console.log("ddd");
      let routeData = this.$router.resolve({
        path: "/detail",
        query: { productid: id },
      });
      window.open(routeData.href, "_blank");
    },
  },
  // created() {
  //   // Simple GET request using axios
  //   axios
  //     .get("http://127.0.0.1:5000/")
  //     .then((response) => console.log(response));
  // },
};
</script>
