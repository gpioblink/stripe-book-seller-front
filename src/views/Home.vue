<template>
  <v-container fluid fill-height>
    <v-row class="mb-6" justify="center" no-gutters>
      <v-col lg="5">
        <v-img src="https://1.bp.blogspot.com/-XOOhKqGitxA/Vf-eLfVEKfI/AAAAAAAAyMc/-xC7hUyo3ZU/s800/book_furuhonya_honya.png"></v-img>
      </v-col>
      <v-col cols="6">
        <v-container fluid fill-height>
          <v-row align="center"
                 justify="center">
            <v-col>
              <h1>いらっしゃいませ</h1>
              <div class="my-2">
                <v-btn x-large block color="success" dark @click="toBookList">本を買う</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  methods: {
    toBookList: function(){
      this.$router.push({ name: 'Books' });
    }
  }
}
</script>
