<template>
<body>

<div >
    <input type="text" class="todo-input" placeholder="Yapılmasını gerekenleri giriniz.." v-model="newTodo" @keyup.enter="AddItem">
    <transition-group name="fade" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
      <todo-item v-for="(todo,index) in todos":key="todo.id" :todo="todo" :index="index"
                 @removedItem="removeItem" @finishedEdit="finishedEdit">



      </todo-item>
    </transition-group>
</div>

</body>
</template>
<script>
import TodoItem from "./TodoItem";
export default  {
  name:'todo-list',
  components: {
    TodoItem,
  },

  data(){
    return{
      newTodo:'',
      idTodo:5,
      beforeEdit:"",
      todos:[
        {
          "id":1,
          'title':'Eralp Software\'e proje göndereceğim.',
          'completed':false,'editing':false
        },
        {
          "id":2,
          'title':'Sabah kahve içeceğim.',
          'completed':false
        },
        {
          "id":3,
          'title':'Ödemeler yapılacak.',
          'completed':false,
        },
        {
          "id":4,
          'title':'Süt almayı unutma!',
          'completed':false,
        }


      ]
    }
  },

  methods:{
    AddItem(){
      if(this.newTodo.trim().length==0){  //boş girilmesini önlemek için kontrol
        return
      }
      this.todos.push({
        id:this.idTodo,
        title:this.newTodo,
        completed:false

      })
      this.newTodo='',
        this.idTodo++

    },

    removeItem(index){
      this.todos.splice(index,1)
    },
    finishedEdit(data){
      this.todos.splice(data.index,1,data.todo)
    }

  }
}
</script>
<style >
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");

body{
  background-color: bisque;
}

.todo-input{
  width:60%;
  padding:10px 18px;
  font-size: 18px;
  margin-left: 20%;


  margin-top: 40px;
  margin-bottom: 16px;


}
.todo-item{
  width:60%;

  font-size: 18px;
  margin-bottom: 12px;
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20%;
  animation-duration: 0.3s;
  color: red;

}
.remove-item{
  margin-bottom: 12px;
  cursor: pointer;
  color: goldenrod;
  font-size: 50px;


}
.todo-item-l{
  display:flex;
  align-items: center;
}
.todo-item-label{
  padding: 10px;
  border: 1px solid white;
  margin-left: 12px;
}
.todo-item-edit{
  color:black;
  margin-left: 12px;

  padding: 10px;
  border: 1px solid ;
}
.completed{
  text-decoration: line-through;
  color:green;
}
.fade-enter-active,.fade-leave-active{
  transition: opacity .2s ;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
}

</style>
