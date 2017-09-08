<template>
	<div class="app">
		<button @click="goback">后退</button>
<br />
<button @click="goHome">回到首页</button>
	</div>
</template>

<script>
	export default{
		name:"app",
		methods:{
			goback(){
				this.$router.go(-1);
			},
		    goHome(){
		      this.$router.push('/');
		    }
		}
	}
</script>

<style>
</style>