
<template>

  <v-app>
    <Appbar/>
    <v-main >
      <Search />
    </v-main>
  </v-app>
</template>

<script>
import Search from '../components/Search';
import Appbar from '@/components/Appbar'
export default {
  name: 'App',

  components: {
    Search,
    Appbar
  },

  data: () => ({
    //
  }),

};
</script>
