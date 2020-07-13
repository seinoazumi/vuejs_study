var MyPage = {
  template:`
    <div>
      <header>
        <slot name="header">This is my page</slot>
      </header>
      <main>
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>
  `
}
new Vue({
  el: "#app",
  components: {
    MyPage: MyPage
  }
})
