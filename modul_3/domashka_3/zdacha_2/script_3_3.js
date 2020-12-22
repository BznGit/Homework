console.log('Its working!');
Vue.createApp({
	data() { //используемые данные
		return {
			text:"Здесь можно редактировать текст",
			vis: false,
			
			
			

		}
	},
	methods: { //действия, которые выполняются в приложении
			
		},
	computed:{
		sz: function(){ 
				    return this.text.length;
				   
			},
	}
	
}).mount("#app");
