<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to='/'>首页</router-link>
    <router-link to='/params/198/jspang website is very good'>params</router-link>
    <router-link to='/params/84894/zhaolei 重新定向'>重新定向</router-link>
    <router-link to="/bieming/12138/lalal 重新定向">别名的使用</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
