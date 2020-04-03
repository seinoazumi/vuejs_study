window.onload = function(){
  new Vue({
    el: '#app1',
    data: {
      isOk: false
    }
  })

  new Vue({
    el: '#app2',
    data: {
      dataArray: ['桃太郎', 'かぐや姫', 'かちかち山'],
      addItem: ''
    },
    methods: {
      addList: function() {
        this.dataArray.push(this.addItem);
        this.addItem = '';
      },
      removeLast: function(){
        var lastIndex = this.dataArray.length -1;
        this.dataArray.splice(lastIndex, 1);
      }
    }
  })

  new Vue({
    el: '#app4',
    data: {
      dataArray: ['one', 'two', 'three', 'four', 'five']
    },
    methods: {
      sortData: function() {
        this.dataArray.sort(function(a, b){
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        });
      },
      shuffleData: function(){
        //まず、一時的な空の配列を用意
        var buffer = [],
        len = this.dataArray.length;
  
        //元の配列を減らしながら繰り返す。iはその時点での個数
        for(var i=len; len>0; len--) {
          //rは、その時点での個数内でランダム
          var r = Math.floor( Math.random() * len );
          //元の配列から一つずつ一時的な配列に追加
          buffer.push( this.dataArray[r] );
          //元の配列からpushした要素と同じ要素を削除
          this.dataArray.splice(r, 1);
        }
        //一時的な配列を元の配列に入れる
        this.dataArray = buffer;
      }
    }
  })
};
