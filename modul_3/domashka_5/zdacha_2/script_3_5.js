console.log('Its working!');
let app = Vue.createApp({
	data() { //используемые данные
		return {
			idioms:[
				'"Устал от системы, от фальши и лжи? Добро пожаловать в бомжи!"',
				'"Не злите меня, и так трупы прятать некуда. Да, шучу я, шучу, мест еще много"',
				'"Глядя на некоторых людей, понимаешь, как сильно их корона сдавила им мозг"',
				'"Дела шли хорошо, но неизвестно куда."',
			],
		}
	},

	methods: { //действия, которые выполняются в приложении
	
		},
		
	computed:{
	
	}
	
});
 app.component('carousel',{
	props:['idioms'],
	data(){
		return{
			i:0,
			isActive: false,
		}
	},
	template: `<h1  v-bind:class={d:isActive}>{{idioms[this.i]}}</h1>`,

	methods:{
			updateList(){
			setInterval(() => {
				if (this.isActive) this.i++;
				this.isActive = !this.isActive;
				
				if (this.i == 3) this.i = 0;				
			}, 3000);
		},
	
	},
	mounted(){
		this.updateList()
	}


 });
 

 app.mount('#app');




