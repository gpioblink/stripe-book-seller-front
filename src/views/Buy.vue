<template>
    <v-container fluid fill-height>
        <v-row class="mb-6" justify="center" no-gutters>
            <v-col cols="6">
                <v-container fluid fill-height>
                    <div>
                        <h1>お支払いをお願いします</h1>
                        <h2>あなたのケータイでQRコードを読み取って決済してください。</h2>
                        <div class="my-4">
                            <v-btn x-large block color="success" dark @click="toHome">終了する</v-btn>
                        </div>

                        <p>支払いが完了すると、プリンターから受け取り票が出ますので、取って受け取りカウンターにお持ちください。30分以内に決済されない場合、お支払いIDは無効となり、在庫は開放されます。</p>
                    </div>
                </v-container>
            </v-col>
            <v-col lg="6">
                <v-img :src="qrSrc" :lazy-src='require("../assets/nowprinting.png")'>
                    <template v-slot:placeholder>
                        <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                        >
                            <v-progress-circular indeterminate color="black lighten-5"></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  import axios from 'axios';

  export default {
    props: ['id'],
    name: 'Buy',
    data: () => ({
      qrSrc: ""
    }),
    mounted() {
      axios
        .post('http://localhost:5555/orders', {
          "product_id": this.id,
          "address": {
            "name": "じぶりん",
            "street": "保毛55-5",
            "city": "保毛保毛県保毛保毛市",
            "post_code": "555-5555",
            "country": "Japan"
          }
        })
        .then(response => (this.getPaymentId(response.data['OrderID'])))
        // eslint-disable-next-line no-unused-vars
        .catch(error => (this.qrSrc = require("../assets/error.png")));
    },
    methods: {
      toHome: function(){
        this.$router.push({ name: 'Home' });
      },
      getPaymentId: function(orderId){
        const start = new Date();
        // eslint-disable-next-line no-constant-condition
        while (true) {
          // TODO: さすがにアホだけど時間ないから許してぇ。。 https://qiita.com/albno273/items/c2d48fdcbf3a9a3434db
          const current = new Date();
          if (current - start > 5000) {
            axios.get('http://localhost:5555/payments/' + orderId)
              .then(response => (this.qrSrc = "https://api.qrserver.com/v1/create-qr-code/?data=https://stripe-sample.gpioblink.now.sh/stripe.html?id=" + response.data['PaymentID']))
              // eslint-disable-next-line no-unused-vars
              .catch(error => (this.qrSrc = require("../assets/error.png")));
            return;
          }
        }
      }
    }
  };
</script>

<style scoped>

</style>
