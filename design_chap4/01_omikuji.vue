<template>
  <div>
    <h1>おみくじ</h1>
    <div v-if="result">結果は…「{{ result }}」です！</div>
    <button class="button" v-on:click="draw">{{ button }}</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        result: null,
        button: 'おみくじを引く'
      }
    },
    methods: {
      draw: function(){
        var omikuji = ['大吉', '吉', '凶'];
        var index = Math.floor(Math.random() * omikuji.length);
        
        this.result = omikuji[index];
        this.button = 'おみくじをもう一度引く'
      }
    }
  }
</script>
