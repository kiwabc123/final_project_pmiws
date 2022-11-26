<template>
  <v-app>
    <template>
      <div>
        <v-app-bar>
          <h2>รายงานปัญหา</h2>
        </v-app-bar>
        <v-data-table :headers="headers" :items="reported" item-key="name" class="elevation-1" :search="search"
          :custom-filter="filterOnlyCapsText">
          <template v-slot:top>
            <v-text-field v-model="search" label="Search (UPPER CASE ONLY)" class="mx-4"></v-text-field>
          </template>
          <template v-slot:item.numberofreport="{item}">
            {{ item.detail.inappropriate_header +item.detail.inappropriate_content+item.detail.rude_words}}
          </template>
          <template v-slot:item.detail="{ item }">
            <v-btn rounded color="primary" dark @click="dialog = true, detailobj = item.detail">
              เช็คข้อมูล
            </v-btn>
          </template>
          <template v-slot:item.deletepost="{ item }">

            <v-btn color="green" fab small dark class="mr-3" @click="removeRow(item)">
              <v-icon>mdi-check-underline-circle</v-icon>
            </v-btn>
            <v-btn color="red" fab small dark @click="removeRow(item)">
              <v-icon>mdi-trash-can</v-icon>
            </v-btn>
          </template>
          <template v-slot:body.append>
            <tr>
              <td></td>
              <td>
                <v-text-field v-model="numberofreport" type="number" label="more than"></v-text-field>
              </td>
              <td colspan="4">

              </td>
            </tr>
          </template>
        </v-data-table>
      </div>
    </template>



    <v-dialog transition="dialog-top-transition" max-width="600" v-model="dialog">
      <template>
        <v-card>
          <v-toolbar color="primary" dark>
            <v-spacer />
            <v-toolbar-title>
              ข้อมูล
            </v-toolbar-title>
            <v-spacer />
          </v-toolbar>

          <v-card-text v-if="detailobj">
            <v-row>
              <v-col cols="6">
                <div class="text-h5 d-flex justify-start ml-12 pt-6">หัวข้อไม่เหมาะสม</div>
              </v-col>
              <v-col cols="6">
                <div class="text-h5 d-flex justify-center  pt-6">{{ detailobj.inappropriate_header }}</div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <div class="text-h5 d-flex justify-start ml-12 pt-6">เนื้อหาไม่เหมาะสม</div>
              </v-col>
              <v-col cols="6">
                <div class="text-h5 d-flex justify-center  pt-6">{{ detailobj.inappropriate_content }}</div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <div class="text-h5 d-flex justify-start ml-12 pt-6">ใช้คำไม่สุภาพ</div>
              </v-col>
              <v-col cols="6">
                <div class="text-h5 d-flex justify-center  pt-6">{{ detailobj.rude_words }}</div>
              </v-col>
            </v-row>

          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn text @click="dialog = false">ตกลง</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>

  </v-app>
</template>
  
  
  
<script>
import axios from "axios";
export default {
  data() {
    return {
      detailid: '',
      detailobj: {
        "inappropriate_header": 0,
        "inappropriate_content": 0,
        "rude_words": 0
      },
      dialog: false,
      search: '',
      numberofreport: '',
      reported: [
        {
          id: 1,
          name: 'A',
          numberofreport: 10,
          detail: {
            "inappropriate_header": 5,
            "inappropriate_content": 4,
            "rude_words": 1
          }
        },
        {
          id: 2,
          name: 'B',
          numberofreport: 15,
          detail: {
            "inappropriate_header": 5,
            "inappropriate_content": 5,
            "rude_words": 5
          }
        },
        {
          id: 3,
          name: 'C',
          numberofreport: 20,
          detail: {
            "inappropriate_header": 10,
            "inappropriate_content": 6,
            "rude_words": 4
          }
        },
        {
          id: 4,
          name: 'D',
          numberofreport: 25,
          detail: {
            "inappropriate_header": 5,
            "inappropriate_content": 10,
            "rude_words": 10
          }
        },
        {
          id: 5,
          name: 'E',
          numberofreport: 30,
          detail: {
            "inappropriate_header": 10,
            "inappropriate_content": 10,
            "rude_words": 10
          }
        },
        {
          id: 6,
          name: 'F',
          numberofreport: 25,
          detail: {
            "inappropriate_header": 3,
            "inappropriate_content": 10,
            "rude_words": 12
          }
        },
        {
          id: 7,
          name: 'G',
          numberofreport: 100,
          detail: {
            "inappropriate_header": 20,
            "inappropriate_content": 56,
            "rude_words": 24
          }
        },
        {
          id: 8,
          name: 'H',
          numberofreport: 54,
          detail: {
            "inappropriate_header": 20,
            "inappropriate_content": 14,
            "rude_words": 20
          }
        },
        {
          id: 9,
          name: 'I',
          numberofreport: 60,
          detail: {
            "inappropriate_header": 40,
            "inappropriate_content": 8,
            "rude_words": 12
          }
        },
        {
          id: 10,
          name: 'J',
          numberofreport: 46,
          detail: {
            "inappropriate_header": 20,
            "inappropriate_content": 16,
            "rude_words": 10
          }
        },
      ],
    }
  },
  created() {
    this.getreport();
  },
  computed: {

    headers() {
      return [

        {
          text: 'ชื่อโพส',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        {
          text: 'จำที่ถูกรายงาน',
          value: 'numberofreport',
          filter: value => {
            if (!this.numberofreport) return true

            return value >= parseInt(this.numberofreport)
          },
        },
        { text: 'ดูรายละเอียดข้อมูล', value: 'detail', sortable: false, },
        { text: 'ลบโพส', value: 'deletepost', sortable: false, align: 'center', },

      ]
    },
  },
  methods: {
    getreport() {
      axios.get("http://localhost:8090/api/reported")
        .then((response) => {
          this.reported = (response.data)



          
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    removeRow: function (item) {
      console.log("Removing", item);
      const index = this.reported.indexOf(item)
      this.reported.splice(index, 1);
    },
    filterOnlyCapsText(value, search, item) {
      return value != null &&
        search != null &&
        typeof value === 'string' &&
        value.toString().toLocaleUpperCase().indexOf(search) !== -1
    },
  },
}


</script>