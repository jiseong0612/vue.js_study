<template>
  <div class="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link> |
  </div>
</template>

<script>
export default {
  name:'ToolBar',
} 
</script>

<style scoped>
.header{
  color : white;
  background-color: #42b883;
  display: flex;
  padding : 8px;
}
.header a{
  color : white;
}
.header .router-link-exact-active{
  color: #35495e;
}
</style>