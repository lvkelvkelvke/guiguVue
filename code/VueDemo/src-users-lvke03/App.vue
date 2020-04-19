<template>
  <div class="container">
    <Search></Search>
    <UsersMain></UsersMain>
  </div>
</template>

<script>
  import Main from './components/main.vue'
  import Search from './components/Search.vue'
  import PubSub from 'pubsub-js'
  export default {
    components:{
      UsersMain:Main,
      Search
    }

  }
</script>

<style>

</style>
