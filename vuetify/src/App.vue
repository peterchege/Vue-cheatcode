<template>
  <v-app class="grey lighten-4" >
    <app-navbar/>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import navbar from '@/components/navbar.vue'
export default {

  name: 'App',
  components: {
    appNavbar : navbar
  },
  data: () => ({
    //
  }),
};
</script>
