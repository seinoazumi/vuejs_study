<template>
  <div id="app">
    <p>{{ message }}</p>
    <EditForm />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import EditForm from '@/components/EditForm.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, EditForm
  },
  computed: {
    // ローカルのmessageとストアのmessageを同期
    message() { return this.$store.getters.message }
  },
  created() {
    // ストアの状態を取得
    console.log(this.$store.state.count)
    // ストアの状態を更新
    this.$store.commit('increment')
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
