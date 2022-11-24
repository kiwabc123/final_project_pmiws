<template>
  <div class="app">
    <apexcharts width="550" type="line" :options="chartOptions" :series="series"></apexcharts>
   
  </div>
</template>
  
<script>

import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'Chart',
  components: {
    apexcharts: VueApexCharts,
  },
  props: {
    series: Array,
    annotations: {
      type: Object
    },
    chartOptions: {
      type: Object, default() {
        return {
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
        }
      },
    },

    points: Array

  },
  data: function () {
    return {
      // chartOptions: {
      //   chart: {
      //     height: 350,
      //     type: "line",
      //     stacked: false
      //   },
      //   dataLabels: {
      //     enabled: false
      //   },
      //   xaxis: {
      //     type: 'numeric'
      //   },
      // },

      //   annotations: {

      //     points: [{
      //       x: 25,
      //       y: 25,
      //       marker: {
      //         size: 8,
      //         fillColor: '#fff',
      //         strokeColor: 'red',
      //         radius: 2,
      //         cssClass: 'apexcharts-custom-class'
      //       },
      //       label: {
      //         borderColor: '#FF4560',
      //         offsetY: 0,
      //         style: {
      //           color: '#fff',
      //           background: '#FF4560',
      //         },

      //         text: 'Even Break Point ',
      //       }
      //     },
      //     ]
      //   },

      // },
      colors: ["#FF1654", "#247BA0"],

      // series: [
      //   {
      //     name: "Total cost",
      //     // data: [2, 6, 10]
      //     data: [{
      //       x: 0,
      //       y: 0
      //     },
      //     {
      //       x: 25,
      //       y: 25
      //     },
      //     {
      //       x: 50,
      //       y: 50
      //     }],
      //   },
      //   {
      //     name: "Sales",
      //     // data: [0, 6, 12]
      //     data: [{
      //       x: 0,
      //       y: 10
      //     }, {
      //       x: 25,
      //       y: 25
      //     },

      //     {
      //       x: 50,
      //       y: 40
      //     }],
      //   }
      // ],

      yaxis: [
        {
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#FF1654"
          },
          labels: {
            style: {
              colors: "#FF1654"
            }
          },
          title: {
            text: "Series A",
            style: {
              color: "#FF1654"
            }
          }
        },
        {
          opposite: true,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#247BA0"
          },
          labels: {
            style: {
              colors: "#247BA0"
            }
          },
          title: {
            text: "Series B",
            style: {
              color: "#247BA0"
            }
          }
        }

      ],



      tooltip: {
        shared: false,
        intersect: true,
        x: {
          show: false
        }
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40
      }
    }
  },
  methods: {
    updateChart() {
      // const max = 90;
      // const min = 20;
      // const newData = this.series[0].data.map(() => {
      //   return Math.floor(Math.random() * (max - min + 1)) + min
      // })
      // // In the same way, update the series option
      // this.series = [{
      //   data: newData
      // }]
      console.log(this.point);
    },

  },
  mounted() {
    console.log(this.chartOptions.annotations);
  }
}
</script>
<style scoped>
button {
  background: #26E6A4;
  border: 0;
  font-size: 16px;
  color: '#fff';
  padding: 10px;
  margin-left: 28px;
}
</style>