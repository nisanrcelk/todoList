<template>
  <div class="todo-item">
    <div class="todo-item-l">
      <input type="checkbox" v-model="completed" @change="doneEdit">
      <div v-if="!editing" @dblclick="editItem" class="todo-item-label" :class="{completed: completed}" >{{title}}</div>

      <input v-else class="todo-item-edit"type="text" v-model="title" @blur="DoneEdit" @keyup.enter="DoneEdit"
             @keyup.esc="cancelEdit" v-focus>

    </div>
    <div class="remove-item" @click="removeItem(index)">
      &times;

    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props:{
    todo:{
      type:Object,
      required: true,
    },
    index:{
      type:Number,
      required:true,
    }
  },
  data(){
    return {
      'id':this.todo.id,
      'title':this.todo.title,
      'completed':this.todo.completed,
      'editing':this.todo.editing,
      'beforeEdit': '',

    }
  },
  directives:{ //sayfa yüklendiğinde focus işlemi için tanımlanır
    focus: {
      inserted:function (el){
        el.focus()
      }
    }
  },
  methods:{
    removeItem(index){
      this.$emit("removedItem",index)
    },
    editItem(){
      this.beforeEditCache=this.title
      this.editing=true
      //çift tıklandığında edit işlemi yapılabilir.
    },
    DoneEdit(){
      if(this.title.trim()==''){  //boş girilmez.
        this.title=this.beforeEdit
        //boş olduğunda editlemiyor eski hali kalıyor.
      }
      //boş değilse düzenliyor.
      this.editing=false
      this.$emit("finishedEdit",{
        'index':this.index,
        'todo':{
          'id':this.id,
          'title':this.title,
          'computed': this.completed,
          'editing':this.editing,
        }
      })
    },
    cancelEdit(){
      this.title=this.beforeEdit
      this.editing=false
      //iptal edildiğinde eskisi kalıyor.
    },

  }
}
</script>

<style scoped>

</style>
