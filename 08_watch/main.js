window.onload = function(){
  new Vue({
    el: '#app1',
    data: {
      forbiddenText: '悪い',
      inputText: '今日は、良い天気です'
    },
    watch: {
      //入力された文字列を監視する
      inputText: function(){
        var pos = this.inputText.indexOf(this.forbiddenText);
        if (pos >= 0) {
          alert(this.forbiddenText + "は入力できません");
          //入力文字列から禁止文字を削除する
          this.inputText = this.inputText.substr(0, pos);
        }
      }
    }
  })

  new Vue({
    el: '#app3',
    data: {
      restSec: 5,
      timerObj: null
    },
    methods: {
      startTimer: function(){
        //残り5秒
        this.restSec = 5;
        //タイマースタート
        //1000msごとに、1秒減らす
        this.timerObj = setInterval(() => { this.restSec-- }, 1000)
      }
    },
    watch: {
      restSec: function() {
        // 0秒以下になったらアラート&タイマー停止
        if (this.restSec <= 0) {
          alert("制限時間です");
          clearInterval(this.timerObj);
        }
      }
    }
  })
};
