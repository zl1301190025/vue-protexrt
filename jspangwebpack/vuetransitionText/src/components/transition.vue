<template>
	<div class="hello">
		 <h1>{{msg}}</h1>

	</div>
</template>

<script>
	export default{
		name:"h1",
		data(){
			return {
				msg:"动画切换效果"
			}
		},
		methods:{
			goback(){
				this.$router.go(-1);
			}
		},
		beforeRouteEnter:(to,from,next)=>{
			console.log("准备进入路由");
			next();
		},
		beforeRouteLeave:(to,from,next)=>{
			console.log("准备离开路由模板");
			next();
		}
	}
</script>

<style scoped>
.hello h1{
	color: yellow;
}
</style>