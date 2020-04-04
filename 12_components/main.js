window.onload = function(){

  var MyComponent = {
    template: `<p class="my-comp">Hello</p>`
  };
  new Vue({
    el: '#app1',
    components: {
      'my-component': MyComponent
    }
  })

  var MyCounter = {
    template: `<p class="my-comp">カウンター
                <button v-on:click="addOne">追加</button>{{ count }}
               </p>`,
    data: function() {
      return { count: 0 }
    },
    methods: {
      addOne: function() { this.count++; }
    }
  }

  new Vue({
    el: '#app2',
    components: {
      'my-component': MyCounter
    }
  })

  var MyProps = {
    template: `<p class="my-comp">
                 私は{{ myName }}です。
               </p>`,
    props: {
      myName: String
    },
    created: function() { //インスタンス作成後に実行
      if (this.myName == null) {
        this.myName = "名前がありません";
      }
    }
  }

  new Vue({
    el: '#app3',
    components: {
      'my-component': MyProps
    }
  })

  new Vue({
    el: '#app4',
    data: {
      myArray: ['Jack', 'John', 'Mary', 'Alice', 'Richard']
    },
    components: {
      'my-component': MyProps
    }
  })
};
