<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>じぶりん中古本ショップ</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-content>
      <router-view>
      </router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
