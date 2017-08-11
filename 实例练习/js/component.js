var bus=new Vue()


Vue.component("toggle-btn",{
	template:'\
		<button class="btn btn-info"\
			@click="emmitToggle">Toggle Box</button>\
	',
	methods:{
		emmitToggle:function(){
//			this.$emit("toggled")
			bus.$emit("toggled")
		}
	}
})

Vue.component('listener',{
	template:'<h5>sibling component</h5>',
	mounted:function(){
		bus.$on('toggled',function(){
			console.log(22)
			app.showBox=!app.showBox
		})
	}
})
var app=new Vue({
	el:"#app",
	data:{
		showBox:true
	},
	methods:{
		toggleBox:function(){
			this.showBox=!this.showBox
		}
	}
})
