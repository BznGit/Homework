console.log('Its working!');
let app = Vue.createApp({
	data() { //используемые данные
		return {
			currTab:'cart',
			tabs: [
				{tb: 'favorite',    name:'Избранное'},
				{tb: 'catalog', name:'Каталог'},
				{tb: 'cart',    name:'Корзина'}
			],
		}
	},

	methods: { //действия, которые выполняются в приложении
			switchTab(tab){
			this.currTab = tab;
		}
		},
		
	computed:{
		currentTabComponent(){
		return this.currTab.toLowerCase();
		}
	}
	
});
 app.component('men',{
	props:['tabs'],
	
	template: `<ul class="menu">
					<li v-for="tab in tabs" 
					v-bind:key="tab" 
					v-on:click="handlerClickButton(tab.tb)">{{tab.name}}</li>
				 </ul>`,

	methods:{
		handlerClickButton(tab){	
	 		this.$emit('change-tab', tab);
		}
	}			 
 });
 
 app.component('catalog',{
	template: `	<ul class="cat">
					<li>Ноутбуки</li>
					<li>Телевизоры</li>
					<li>Телефоны</li>
					<li>Компьютеры</li>
				</ul>`,
});

app.component('cart',{
	template: `	<div>
					Корзина
				</div>`,
});

app.component('favorite',{
	template:  `<div>
					Избранное
				</div>`,
});

 app.mount('#app');


