<template>
    <ul>
      <li>id: {{$route.params.id}}</li>
      <li>title: {{detail.title}}</li>
      <li>content: {{detail.content}}</li>
    </ul>
</template>

<script>
    const messageDetails = [
      {id: 1, title: 'Message001', content: 'message content00111....'},
      {id: 2, title: 'Message002', content: 'message content00222....'},
      {id: 3, title: 'Message003', content: 'message content00333....'}
    ]
    export default {
        data(){
          return{
            detail :{}
          }
        },
        mounted () {// 改变当前路由组件参数数据时, 不会重新创建组件对象, mounted不会重新执行
          const id = this.$route.params.id
          this.detail = messageDetails.find(detail => detail.id===id*1)
        },
      watch:{
        $route:function(){
          const id = this.$route.params.id
          // const id = this.$attrs.id
          this.detail = messageDetails.find(detail => detail.id === id*1)
        }
      }
    }
</script>

<style scoped>

</style>
