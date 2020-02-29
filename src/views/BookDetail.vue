<template>
    <v-container fluid fill-height>
        <v-row class="mb-6" justify="center" no-gutters>
            <v-col lg="3">
                <v-container fluid fill-height>
                    <v-img :src="src"></v-img>
                </v-container>
            </v-col>
            <v-col cols="7">
                <v-container fluid fill-height>
                    <div>
                        <h1>{{name}}</h1>
                        <h2>{{detail}}</h2>
                        <div class="my-4">
                            <v-btn x-large block color="primary" dark @click="toBuy">購入する({{price}}円)</v-btn>
                        </div>
                        <div class="my-4">
                            <v-btn x-large block color="secondary" dark @click="toBookList">キャンセル</v-btn>
                        </div>
                    </div>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    name: 'BookDetail.vue',
    props: ['id', 'name', 'detail', 'price', 'src'],
    methods: {
      toBookList: function(){
        this.$router.push({ name: 'Books' });
      },
      toBuy: function(){
        this.$router.push({ name: 'Buy', params: { id: this.id } });
      }
    }
  };
</script>

<style scoped>

</style>
