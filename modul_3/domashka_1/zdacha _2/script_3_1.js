console.log('Its working!');
Vue.createApp({
	data() { //используемые данные
		return {
	
			user:{
				id: 1,
				name: "Михаил",
				lastName: "Светлов",
				login: "Svetlyi",
				password: "123456",
				avatar: "./avat.png",
				age: 30,
			
			}
		}
	},
	methods: { //действия, которые выполняются в приложении
		
		}
	
}).mount("#app");
