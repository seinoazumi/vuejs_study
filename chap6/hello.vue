<template>
  <div id="app">
    <p class="greeting">メッセージ：{{ msg }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: "こんにちは"
      }
    }
  }
</script>

<style>
  .greeting {
    color: #42b983;
  }
</style>
