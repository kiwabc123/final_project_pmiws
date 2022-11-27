<template>
 
        <v-app-bar
      app
      color="#F49D1A"
      dark
      hide-on-scroll
    >
      <div class="d-flex align-center"  @click="gotohome()">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logolojai.png"
          transition="scale-transition"
          width="100"
        />
        <div class="justify-center">
               <h1 >32 Days later</h1>
        </div>
   
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/kiwabc123/PMIWS"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
   
</template>
<script>
export default {

methods:{
  gotohome(item) {
    console.log(item)
    //   let routeData = this.$router.resolve({
    //     path: "/home",
    this.$router.push({ name: 'app' })
    //   });
    //   window.open(routeData.href, "_self");
    },
}
}
</script>