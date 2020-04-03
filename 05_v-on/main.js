window.onload = function(){
  new Vue({
    el: "#app1",
    data: {
      count: 0
    },
    methods: {
      countUp: function(){
        this.count++;
      }
    }
  })

  function like() {
    alert("いいね");
  }
  new Vue({
    el: '#app2',
    data: {
      isClick: false
    },
    methods: {
      oneClick: function() {
        this.isClick = true;
        like();
      }
    }
  })

  new Vue({
    el: '#app3',
    data: {
      count: 0
    },
    methods: {
      countUP: function(value){
        this.count += value;
      }
    }
  })

  new Vue({
    el: '#app4',
    data: {
      myText: 'Hello!'
    },
    methods: {
      showAlert: function() {
        alert("Enterキーを押しました");
      }
    }
  })

  new Vue({
    el: '#app5',
    data: {
      myText: 'Hello!'
    },
    methods: {
      showAlert: function() {
        alert("Shift + Enterキーを押しました");
      }
    }
  })
};
