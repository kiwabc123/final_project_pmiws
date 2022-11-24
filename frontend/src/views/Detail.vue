<template>
  <v-app>
     <Appbar/>
    <v-main>
      <indetail/>
    </v-main>
  </v-app>
</template>


<script>
import indetail from '../components/Indetail.vue';
import Appbar from '@/components/Appbar'
export default {
  name: 'Detail',

  components: {
    indetail,
    Appbar
  },

  data: () => ({
    //
  }),

};
</script>
