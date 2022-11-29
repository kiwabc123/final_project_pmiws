<template>
  <v-container>
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="mb-3">Product Image Matching With Supplier</h1>
      </div>
      <!-- <div class="col-6 text-center" style="justify-content: center">

        <div class="">
          <div class="">
            <label for="my-file">Select Image</label>
            <v-file-input v-model="image" outlined dense label="File input" accept="image/*" @change="onFileChange" />
          </div>
          <div class="border p-2 mt-3">
            <p>Preview Here:</p>
            <template v-if="imageUrl">
              <img :src="imageUrl" class="img-fluid" height="300px" />
              <p class="mb-0">file name: {{ image.name }}</p>
              <p class="mb-0">size: {{ image.size / 1024 }}KB</p>
            </template>
          </div>
        </div> 

      </div> -->

    </div>



    <div v-if="!file">
      <div :class="['dropZone', dragging ? 'dropZone-over' : '']" @dragenter="dragging = true"
        @dragleave="dragging = false">
        <div class="dropZone-info" @drag="onChange">
          <span class="fa fa-cloud-upload dropZone-title"></span>
          <span class="dropZone-title">Drop file or click to upload</span>
          <div class="dropZone-upload-limit-info">
            <div>extension support: image</div>
            <div>maximum file size: 5 MB</div>
          </div>
        </div>
        <input type="file" @change="onChange">
      </div>
    </div>
    <div v-else class="dropZone-uploaded">
      <div class="dropZone-uploaded-info">
        <span class="dropZone-title">Uploaded</span>
        <button type="button" class="btn btn-primary removeFile" @click="removeFile(), getrandom()">Remove File</button>
      </div>
    </div>



    <div>


      <v-container class="gradient lighten-3">
        <v-flex d-flex>
          <v-layout wrap>

            <v-flex md4 v-for="(item, idx) in products.slice().reverse()" :key="idx">
              <v-card flat style="overflow-y: auto; height:630px" class="ma-3 text-xs-center rounded-xl"
                @click="gotodetail(item._id)">
                <v-img :src="`http://localhost:8090/api/image/dataset/${item.images[0]}.jpeg`" aspect- ratio="2.75">
                </v-img>
                <v-card-title primary-title class="justify-center">
                  <div>
                    <h3 class="headline black--text text--accent-2">
                      {{ item.detail }}
                    </h3>
                    <div style="height:10%; position:absolute; bottom:0px;" class="red--text text-h4">
                      {{ Currency(item.price['yuan']) }} <strong>$</strong>
                    </div>
                  </div>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-container>
    </div>
    <v-dialog class="text-center" v-model="loading" transition="dialog-bottom-transition" persistent width="50%">
      <v-card color="#FFE15D">
        <!-- <v-card-text>
          I am searching
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>

        </v-card-text>
        <div class="text-center align-center">
        
        </div> -->

        <v-container style="height: 400px;">
          <v-row class="fill-height" align-content="center" justify="center">
            <v-col class="text-h5 text-center" cols="12">
              <div class="orangetext2"> Getting your files</div>

            </v-col>

            <v-progress-circular justify-center :width="15" :size="150" color="red" indeterminate></v-progress-circular>

          </v-row>
        </v-container>
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
      products: [],
      data: [],
      loading: false,
      file: '',
      dragging: false,

    };
  },

  methods: {
    onChange(e) {
      var files = e.target.files || e.dataTransfer.files;

      if (!files.length) {
        this.dragging = false;
        return;
      }

      this.createFile(files[0]);
    },
    createFile(file) {
      if (!file.type.match('image.*')) {
        alert('please select image file');
        this.dragging = false;

        return;

      }

      if (file.size > 5000000) {
        alert('please check file size no over 5 MB.')
        this.dragging = false;
        return;
      }

      this.file = file;
      // console.log(this.file);
      this.createImage(file)
      this.searchImage()
      this.dragging = false;
    },
    removeFile() {
      this.file = '';
      this.imageUrl = '';
    },
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
      console.log(this.file);
      let formData = new FormData();
      formData.append("image", this.file);
      console.log(this.file.type.match(/image.*/))
      if (this.file.type.match(/image.*/) === null) {
        this.loading = false;
        return;
      }
      await axios
        .post("http://localhost:8090/api/product/search", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })

        .then((response) => {

          const data = response.data;
          console.table(data)
          this.products = data








          // for (let i = 0; i < data.length; i++) {
          //   this.products.push(data[i]);
          // }
          //  this.products= products

          // console.log(this.products);
          this.loading = false;
          // console.log(this.loading,this.products)


        })
        .catch(function (error) {
          console.log(error);
          this.loading = false;

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
    getrandom() {
      axios
        .get("http://localhost:8090/api/product/getrandom")
        .then((response) => {
          const data = response.data;
          console.table(data)
          this.products = data
        })
        .catch(function (error) {
          console.log(error);
          this.loading = false;

        });

    },
    Currency(price) {
      console.log(Number((price) * JSON.parse(localStorage.getItem("Currency")).USD).toFixed(2))
      return Number((price) * JSON.parse(localStorage.getItem("Currency")).USD).toFixed(2)
    },
  },
  created() {

    this.getrandom()




  },
};
</script>
<style>
.dropZone {
  width: 80%;
  height: 200px;
  margin: auto;
  border: 2px dashed #eee;
}

.dropZone:hover {
  border: 2px solid #2e94c4;
}

.dropZone:hover .dropZone-title {
  color: #1975A0;
}

.dropZone-info {
  color: #A8A8A8;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
  text-align: center;
}

.dropZone-title {
  color: #787878;
}

.dropZone input {
  position: absolute;
  cursor: pointer;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.dropZone-upload-limit-info {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.dropZone-over {
  background: #5C5C5C;
  opacity: 0.8;
}

.dropZone-uploaded {
  width: 80%;
  height: 200px;
  margin: auto;
  border: 2px dashed #eee;
}

.dropZone-uploaded-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #A8A8A8;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
  text-align: center;
}

.removeFile {
  width: 200px;
}

.orangetext2 {
  color: #DC3535;
}

.gradient {
  background: rgb(179, 51, 79);
  background: linear-gradient(90deg, rgba(179, 51, 79, 1) 0%, rgba(210, 51, 59, 0.9245448179271709) 26%, rgba(253, 51, 29, 0.6920518207282913) 62%, rgba(252, 176, 69, 1) 100%);
}
</style>
