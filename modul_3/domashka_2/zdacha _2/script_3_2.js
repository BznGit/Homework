console.log('Its working!');
Vue.createApp({
	data() { //используемые данные
		return {
	
			catalog:{
				visible: true,			
			}, 
			cart:{
				visible: false,			
			},
			favorite:{
				visible: false,			
			},
		}
	},
	methods: { //действия, которые выполняются в приложении
			change: function(event){
				let elem = event.target;
				console.log(elem.id);
				if (elem.id == 1) {
					this.catalog.visible = true;
					this.cart.visible = false;
					this.favorite.visible = false;
				};
				if (elem.id == 2) {
					this.catalog.visible = false;
					this.cart.visible = true;
					this.favorite.visible = false;
				};
				if (elem.id == 3) {
					this.catalog.visible = false;
					this.cart.visible = false;
					this.favorite.visible = true;
				};

			}
		},
	computed:{
	
	}
	
}).mount("#app");
