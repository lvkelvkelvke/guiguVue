<template>
  <div>
    <ul>
      <li v-for="m in messages" :key="m.id">
        <router-link :to="`/home/message/messageDetail/${m.id}`">{{m.title}}</router-link>
        <button @click="pushButton(m.id)">push跳转</button>
        <button @click="replaceButton(m.id)">replace跳转</button>
      </li>
    </ul>
    <button @click="$router.back()">back</button>
    <hr>
    <router-view :id="2"></router-view>
  </div>
</template>

<script>
    export default {
        data(){
          return{
            messages : []
          }
        },
      mounted() {
          setTimeout(()=>{
            const message = [
              {id: 1, title: 'Message001'},
              {id: 2, title: 'Message002'},
              {id: 3, title: 'Message003'}
            ]
            this.messages = message
          },1000)
      },
      methods:{
          pushButton(id){
            this.$router.push(`/home/message/messageDetail/${id}`);
          },
          replaceButton(id){
            this.$router.replace(`/home/message/messageDetail/${id}`);
          }
      }
    }
</script>

<style>

</style>
