<template>
  <div class="todo-footer">
    <label>
<!--      <input type="checkbox" v-model="checkAll"/>-->
        <slot name="checkboxSlot"></slot>
    </label>
    <span>
<!--      <span>已完成{{completeSize}}</span> / 全部{{todos.length}}-->
      <slot name="countSlot"></slot>
    </span>
      <!--    <button class="btn btn-danger" v-show="completeSize" @click="deleteTodos">清除已完成任务</button>-->
      <slot name="cleanSlot"></slot>
  </div>
</template>

<script>
    export default {
        props:{
          // todos:Array,
          // deleteCompleteTodos:Function,
          // selectAllTodos:Function
        },
        // computed:{
        //   completeSize () {
        //     return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete?1:0) ,0)
        //   },
        //   checkAll:{
        //     //决定是否勾选。取值为当前完成数量与总数量是否相等，如果相等则为true
        //     get(){
        //       return this.completeSize===this.todos.length && this.todos.length!=0
        //     },
        //     //根据是否选中来更新所有复选框的值
        //     set(value){
        //       this.selectAllTodos(value)
        //     },
        //   }
        // },
        methods:{
          // deleteTodos(){
          //   if(window.confirm(`确定要删除已完成吗？`)){
          //     this.deleteCompleteTodos()
          //   }
          // }
        }
    }
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
