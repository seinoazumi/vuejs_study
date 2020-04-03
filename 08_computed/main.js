window.onload = function(){
  new Vue({
    el: '#app1',
    data: {
      price: 100
    },
    computed: {
      taxIncluded: function(){
        return this.price * 1.08;
      }
    }
  })

  new Vue({
    el: '#app2',
    data: {
      price: 100,
      count: 5
    },
    computed: {
      sum: function(){
        return this.price * this.count
      },
      taxIncluded: function(){
        return this.sum * 1.08;
      }
    }
  })

  new Vue({
    el: '#app3',
    data: {
      myText: '今日は、いい天気です'
    },
    computed: {
      // myTextの長さが変わったら、残りの文字数を算出する
      remining: function(){
        return 140 - this.myText.length;
      },
      // reminingの長さに応じて、computedColorを算出する
      computedColor: function(){
        col = "green";
        if (this.remining < 20) {
          col = "orange";
        }
        if (this.remining < 1 ) {
          col= "red";
        }
        return col;
      }
    }
  })

  new Vue({
    el: '#app4',
    data: {
      findWord: '',
      items: ['桃太郎', '花咲か爺さん', '浦島太郎', 'かぐや姫', 'かちかち山']
    },
    computed: {
      //this.findWordが変わったら、その文字が含まれるリストを算出する
      findItems: function(){
        if (this.findWord){
          return this.items.filter(function(value) {
            return (value.indexOf(this.findWord) > -1);
          }, this);
        } else {
          //this.findWordが空の時はリストをそのまま返す
          return this.items;
        }
      }
    }
  })

  new Vue({
    el: '#app5',
    data: {
      R: 255,
      G: 150,
      B: 100
    },
    computed: {
      // RかGかBの値が変わったら、できた色を算出する
      mixColor: function(){
        var color = "RGB(" + this.R + "," + this.G + "," + this.B + ")";
        return color;
      }
    }
  })
}; 
