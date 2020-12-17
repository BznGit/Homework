console.log('Its working!');
Vue.createApp({
	data() { //используемые данные
		return {
			product:{
				id: 1,
				type: "Notebook",
				company: "Asus",
				model: "VivoBook Pro",
				image: "./gorgeous.png",
				year: 2017,
				price: 30000,
			},

		}
	},
	methods: { //действия, которые выполняются в приложении
		
		}
	
}).mount("#app");
