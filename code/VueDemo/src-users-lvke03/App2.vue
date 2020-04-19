<template>
  <div>
    <div v-if="!repoUrl">loading</div>
    <div v-else>most start repo is <a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
      data(){
        return{
          repoName:'',
          repoUrl:''
       }
      },
    mounted() {
      const url = 'https://api.github.com/search/repositories?q=vu&sort=stars'
      axios.get(url)
        .then(response => {
          const result = response.data
          const mostRepo = result.items[0]
          this.repoName = mostRepo.name
          this.repoUrl = mostRepo.html_url
          console.log(response.data) // 得到返回结果数据
        })
        .catch(error => {
          console.log(error.message)
        })
    }
  }
</script>

<style scoped>

</style>
