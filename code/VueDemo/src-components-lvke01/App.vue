<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment"></Add>
      <List :comments="comments" :deleteComment="deleteComment"></List>
    </div>
  </div>
</template>

<script>
  import Add from './components/Add'
  import List from './components/List'

  export default {
      components:{
        Add,
        List
      },
      data(){
        return {
          comments:[//数据在哪个组件，更新数据的行为就应该在哪个组件
            {name:"name1",content:"我是name1"},
            {name:"name2",content:"我是name2"},
            {name:"name3",content:"我是name3"}
          ]
        }
      },
    methods:{
        addComment(comment){
          //将comment追加到数组最前
          this.comments.unshift(comment)
        },
        deleteComment(index){
          // 删除指定下标的评论
          this.comments.splice(index,1)
        }
    }
  }
</script>

<style scoped>

</style>
