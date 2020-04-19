<!--1.页面模板-->
<template>

</template>


<!--2.JS 模块对象-->
<script>
  import Item from './Item.vue'
  export default {
    // 组件中data必须是函数
    data() {return {}},
    methods: {},
    computed: {},
    // 引入子组件使用,Item就是子组件名
    components: {Item},

    // 与父组件通信的属性接收
    // 方式一：
    props:{
      //指定属性名和属性值的类型，comment是属性名，Object是属性值
      comment:Object
    },
    // 方式二：
    // 声明式接受属性，此属性就会成为组件对象的属性。只指定属性名
    // props:['comments']
  }
</script>

<!--3.样式定义-->
<style scoped>

</style>
