<template>
<!--
  onmouseover、nmouseout：鼠标移动到自身时候会触发事件，同时移动到其子元素身上也会触发事件
  onmouseenter、onmouseleave：鼠标移动到自身是会触发事件，但是移动到其子元素身上不会触发事件-->
  <li @mouseenter="handEnter(true)" @mouseleave="handEnter(false)" :style="{'background-color': bgColor}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem()">删除</button>
  </li>
</template>

<script>
  import Pubsub from "pubsub-js"
    export default {
        props:{
          todo:Object,
          index:Number,
          deleteTodo:Function
        },
      data(){
          return {
            bgColor:'white',
            isShow:false
          }
      },
      methods:{
          handEnter(isEnter){
             if(isEnter){
               this.bgColor='#aaaaaa',
               this.isShow= true
             }else{
               this.bgColor='white',
               this.isShow= false
             }
          },
        deleteItem(){
            const {todo,index,deleteTodo} = this
          if(window.confirm(`确认删除${todo.title}吗？`)){
              // deleteTodo(index)
            PubSub.publish('deleteTodo', index)

          }

        }
      }
    }
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    /*line-height: 36px;*/
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    /*display: none;*/
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
</style>
