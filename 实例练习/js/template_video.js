Vue.component("page",{
	template:'\
		<div v-show="selected">\
			<slot></slot>\
		</div>\
	',
	props:{
		name:{required:true},
		link:{required:true},
		active:{default:false}
	},
	data:function(){
		return{
			selected:this.active
		}
	}
})
Vue.component('page-nav',{
	template:'\
		<div>\
			<div class="btn-group btn-group-justified"\
			role="group">\
				<a class="btn"\
					v-for="page in pages"\
					:class="{\'btn-default\':!page.selected,\
					\'btn-info\':page.selected}"\
					@click="selectNav(page)"\
					>\
					{{page.name}}\
				</a>\
			</div>\
			<div class="page-detail">\
				<slot></slot>\
			</div>\
		</div>\
	',
	data:function(){
		return {
			pages:[]
		}
	},
	methods:{
		selectNav:function(page){
			this.pages.forEach(function(item,index){
				item.selected=(item.name===page.name)
			})
		}
	},
	created:function(){
		this.pages=this.$children;
	}
})
var app=new Vue({
	el:"#app"
})
