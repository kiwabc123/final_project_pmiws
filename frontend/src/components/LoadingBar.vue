<template>
    <svg class="loading-spinner">
      <circle
        :cx="circlePositions[index] && circlePositions[index].x"
        :cy="circlePositions[index] && circlePositions[index].y"
        :r="item.radius"
        :fill="item.color"
        v-for="(item, index) in circles"
        :key="index"/>
    </svg>
  </template>
  
  <script>
  const CENTER_X = 200;
  const CENTER_Y = 200;
  const RADIUS = 50;
  
  function positionOnCircle(radius, angle, center) {
    return {
      x: center.x + (radius * Math.cos(toRadians(angle))),
      y: center.y + (radius * Math.sin(toRadians(angle)))
    };
  };
  
  function toRadians(angle) {
    return angle * Math.PI / 180;
  };
  
  function calculatePositions(component) {
    let angleIncrement = 360 / component.circles.length;
    let positions = {};
    component.circles.forEach((circle, index) => {
      positions[index] = positionOnCircle(
        RADIUS,
        angleIncrement * index,
        {x: CENTER_X, y: CENTER_Y}
      )
    });
    return positions;
  }
  
  export default {
    data() {
      return {
        circles: [
          {color: '#E0F2F1', radius: 10},
          {color: '#B2DFDB', radius: 10},
          {color: '#80CBC4', radius: 10},
          {color: '#4DB6AC', radius: 10},
          {color: '#26A69A', radius: 10},
          {color: '#00897B', radius: 10},
          {color: '#00796B', radius: 10},
          {color: '#00695C', radius: 10},
          {color: '#004D40', radius: 10},
        ],
        counter: 0,
        interval: null
      }
    },
    computed: {
      circlePositions: calculatePositions
    },
    created() {
      this.interval = setInterval(() => {
        this.counter++;
        this.circles = this.circles.map((item, index) => ({
          ...item,
          radius: (this.counter + index) % 8
        }))
      }, 70)
    },
    destroyed() {
      clearInterval(this.interval)
    }
  }
  </script>
  
  <style scoped>
  .loading-spinner {
    width: 300px;
    height: 300px;
  }
  </style>
  