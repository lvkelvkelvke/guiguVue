<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"></TodoHeader>
      <TodoList :todos="todos"></TodoList>
<!--      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAllTodos="selectAllTodos"></TodoFooter>-->
      <TodoFooter>
        <input type="checkbox" v-model="checkAll" slot="checkboxSlot"/>
        <span slot="countSlot">已完成{{completeSize}}/全部{{todos.length}}</span>
        <button class="btn btn-danger" v-show="completeSize" @click="deleteTodos" slot="cleanSlot" >清除已完成任务</button>
      </TodoFooter>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js';
  import TodoHeader from "./components/TodoHeader.vue";
  import TodoList from "./components/TodoList.vue";
  import TodoFooter from "./components/TodoFooter.vue";
  export default {
      data(){
        return{
          todos : [
            {title:'吃饭',complete:false},
            {title:'睡觉',complete:true},
            {title:'打豆豆',complete:true}
           ]
       }
      },
      computed:{
        completeSize () {
          return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete?1:0) ,0)
        },
        checkAll:{
          //决定是否勾选。取值为当前完成数量与总数量是否相等，如果相等则为true
          get(){
            return this.completeSize===this.todos.length && this.todos.length!=0
          },
          //根据是否选中来更新所有复选框的值
          set(value){
            this.selectAllTodos(value)
          },
        }
      },
      mounted(){
        //msg是必须的，表示方法名（deleteTodo),index表示参数
        PubSub.subscribe('deleteTodo', (msg, index)=>{
          this.deleteTodo(index)
        })
      },
      methods:{
          addTodo(todo){
            // this.todos.unshift(todo)
            this.todos.push(todo)
          },
          deleteTodo(index){
              this.todos.splice(index,1)
          },
        deleteCompleteTodos(){
            this.todos = this.todos.filter(todo => !todo.complete)
          },
          selectAllTodos(check){
            this.todos.forEach(todo => todo.complete = check)
          },
        deleteTodos(){
          if(window.confirm(`确定要删除已完成吗？`)){
            this.deleteCompleteTodos()
          }
        }

      },
      components:{
        TodoHeader,
        TodoList,
        TodoFooter
      }
  }
</script>

<style scoped>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
