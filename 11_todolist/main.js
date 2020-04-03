window.onload = function(){

  new Vue({
    el: '#app',
    data: {
      addText: '',
      todos: [
        {done: false, text: 'パンを買う'},
        {done: false, text: 'コーヒーを買う'}
      ]
    },
    computed: {
      remaining: function() {
        return this.todos.filter(function(val){
          return val.done;
        }).length;
      }
    },
    methods: {
      addToDo: function() {
        if( this.addText ) {
          this.todos.push({ done:false, text:this.addText });
          this.addText = '';
        }
      },
      cleanToDo: function() {
        this.todos = this.todos.filter(function(val){
          return val.done == false;
        });
      }
    } 
  })
};
