<template>
<div>
  <img src="./assets/logo.png" alt="我是图片">
  <p>{{msg}}</p>
  <HelloWorld></HelloWorld>
</div>
</template>

<script>
  import HelloWorld from './components/HelloWorld'
  export default {
    name:'app',
    components: {HelloWorld},
    data() {//在 组件里必须写函数
        return {
          msg:'我是msg'
        }
      }
  }
</script>

<style>

</style>
