window.onload = function(){
  new Vue({
    el: '#app1',
    data: {
      myVisible: false
    }
  })

  new Vue({
    el: '#app2',
    data: {
      myVisible: false
    }
  })

  new Vue({
    el: '#app3',
    data: {
      isShow: true
    },
    methods: {
      like: function(){
        this.isShow = false;
      }
    }
  })

  new Vue({
    el:'#app4',
    data: {
      myArray: ['ジャムパン','メロンパン','クロワッサン']
    }
  })

  new Vue({
    el:'#app5',
    data: {
      objArray: [
        { name: 'ジャムパン', price: 150 },
        { name: 'メロンパン', price: 200 },
        { name: 'クロワッサン', price: 100 },]
    }
  })

  new Vue({
    el: '#app6'
  })

  new Vue({
    el:'#app7',
    data: {
      myArray: ['ジャムパン','メロンパン','クロワッサン']
    }
  })

  new Vue({
    el: '#app8',
    data: {
      header: [ "プログラミング言語",2018,2013,2008,2003,1998],
      ranking: [
        ['Java',1,2,1,1,16],
        ['C',2,1,2,2,1],
        ['C++',3,4,3,3,2],
        ['Python',4,7,6,11,23],
        ['JavaScript',7,10,8,7,20]
      ]
    }
  })

  new Vue({
    el: '#app9',
    data: {
      myArray: ['1つ目','2つ目','3つ目','4つ目','5つ目']
    },
    methods: {
      addLast: function(){
        this.myArray.push("[末尾に追加]");
      },
      addObj: function(index){
        this.myArray.splice(index, 0, "[追加]");
      },
      changeObj: function(index){
        this.myArray.splice(index, 1, "[変更]");
      },
      deleteObj: function(index){
        this.myArray.splice(index, 1);
      }
    }
  })

  new Vue({
    el: '#app10',
    data: {
      myArray: ['one', 'two', 'three', 'four', 'five']
    },
    methods: {
      sortData: function(listdata) {
        listdata.sort(function(a, b){
          return(a < b ? -1 : 1)
        });
      }
    }
  })

  new Vue({
    el: '#app11',
    data: {
      myArray: [1,2,3,4,5,6]
    }
  })

  new Vue({
    el: '#app12',
    data: {
      myArray: [1,2,3,4,5,6]
    },
    methods: {
      evenData: function(){
        this.myArray = this.myArray.filter(
          function(value){ return value % 2 == 0; }
        );
      }
    }
  })
};
