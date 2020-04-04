window.onload =function(){
  var obj1 = document.getElementById("loader");
  obj1.addEventListener("change", loadFile, false);

  function loadFile(e){
    file = e.target.files[0]
    if (file) {
      var reader = new FileReader();
      reader.onload = function(e) {
        console.log(">>>" + e.target.result);
        json = JSON.parse( e.target.result );
        console.log(">>>" + json[0].title);
        console.log(">>>" + json[0].body);
      }
      reader.readAsText(file);
    }
  }

  new Vue({
    el: '#app1',
    data: {
      loadData: ``
    },
    methods: {
      onFileChange: function(e) {
        file = e.target.files[0]
        if (file) {
          var reader = new FileReader(),
              vm = this;
          reader.onload = function(e) {
            json = JSON.parse(e.target.result);
            vm.loadData = json;
          }
          reader.readAsText(file)
        }
      }
    }
  })

  var MyComponent = {
    props: ["object"],
    template: `<div class="box">
                 <p class="title">{{ object.title }}</p>
                 <p>解説：{{ object.body }}</p>
               </div>`
  }

  new Vue({
    el: '#app2',
    data: {
      dataArray:[
        {title:'AAA', body:'aaa'},
        {title:'BBB', body:'bbb'},
        {title:'CCC', body:'ccc'}
      ]
    },
    components: {
      'my-product': MyComponent
    },
    methods: {
      sortData: function() {
        this.dataArray.sort(function(a, b){
          return (a.title < b.title ? -1 : 1);
          return 0;
        });
      },
      shuffleData: function() {
        var buffer = [],
            len = this.dataArray.length;
            for(var i = len; len > 0; len-- ){
              var r = Math.floor(Math.random() * len);
              buffer.push(this.dataArray[r]);
              this.dataArray.splice(r, 1);
            }
        this.dataArray = buffer;
      },
      loadData: function(e) {
        file = e.target.files[0]
        if (file) {
          var reader = new FileReader,
              vm = this;
          reader.onload = function(e) {
            vm.dataArray = JSON.parse( e.target.result );
          }
          reader.readAsText(file)
        }
      }
    }
  })
}
