console.log('Its working!');
Vue.createApp({
	data() { //используемые данные
		return {
			services:[
				{
					titel: "Замена масла",
					cost: 500,
					 
				},
				{
					titel: "Замена антифриза",
					cost: 1000, 
				},
				{
					titel: "Замена тормозной жидкости",
					cost: 800, 
				},
				{
					titel: "Змена фильтров",
					cost: 300, 
				},
			],
			totalCost: [],		
		}
	},
	mounted(){

	},
	computed:{
		summ: function(){
			let sum = 0;
			for(let i = 0; i < this.totalCost.length; i++){
				sum += this.totalCost[i];
			};	
			return sum;
		},
	
	
	},
	
}).mount("#app");
