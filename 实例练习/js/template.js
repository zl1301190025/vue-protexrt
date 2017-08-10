Vue.component("one",{
	template:'<div>组件尝试</div>'
})
Vue.component('two',{
	template:'<div>{{listitem.name}}</div>',
	data:function(){
		return {
			listitem:window.games[0]
		}
	}
})
Vue.component('three',{
	template:'<div><slot>外面没内容则会显示</slot></div>'
})
Vue.component('four',{
	template:
	'<div>\
		<div class="top-nav">\
			<slot name="header"></slot>\
		</div>\
		<div class="main">\
			<slot name="content"></slot>\
		</div>\
	</div>\
	'
})


Vue.component('five',{
	props:['userName'],
	template:'<div>{{ uppercaseName }}</div>',
	computed:{
		uppercaseName:function(){
			return this.userName.trim().toUpperCase()
		}
	}
})

Vue.component('six',{
	template:
	'<div>\
	<three v-for="game in games" :key="game.id">{{game.name}}</three>\
	</div>',
	data:function(){
		return {
			games:window.games
		}
	}
})


var app = new Vue({
		el:"#app",
		data:{
			userInput:""
		}
})