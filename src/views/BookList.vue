<template>
    <v-container fluid>
        <v-row class="mb-8"  dense>
            <v-col
                    v-for="card in cards"
                    :key="card.id"
                    class="col-3"
            >
                <v-card
                        class="mx-auto"
                        max-width="344"
                        outlined
                >
                    <v-list-item three-line>
                        <v-list-item-avatar
                                tile
                                size="120"
                                color="grey"
                        >
                            <v-img :src="card.thumbnail"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <div class="overline mb-4">{{card.isbn}}</div>
                            <v-list-item-subtitle>{{card.name}}</v-list-item-subtitle>

                            <v-list-item-subtitle>￥{{card.price.cents}}</v-list-item-subtitle>
                            <v-list-item-action-text>
                                <v-btn text @click="toDetail(card.id, card.name, card.description, card.price.cents, card.thumbnail)">detail</v-btn>
                                <v-btn text @click="toBuy(card.id)">buy</v-btn>
                            </v-list-item-action-text>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from 'axios'
  export default {
    name: 'BookList',
    data: () => ({
      cards: [
      ],
    }),
    mounted() {
      axios
      .get('http://localhost:5555/products')
      .then(response => (this.cards = response.data))
    },
    methods: {
      toDetail: function(id, name, detail, cents, thumbnail){
        this.$router.push({ name: 'Detail', params: { id: id, name: name, detail: detail, price: cents, src: thumbnail} });
      },
      toBuy: function(id){
        this.$router.push({ name: 'Buy', params: { id: id } });
      }
    }
  };
</script>

<style scoped>

</style>
