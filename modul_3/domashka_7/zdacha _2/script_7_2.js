console.log('Its working!');
Vue.createApp({
	data() { //используемые данные
		return {
			pole: [],
			colors:["red", "magenta", "orange", "purple", "gold", "blue", "brown" ],
			fonts:["14px","16px", "18px", "20px", "22px"],
			startValue: 0,
			
		}
	},
	methods: { //действия, которые выполняются в приложении
		choose(e){
			let elem = e.target;	
			if (Number(elem.innerText) == this.startValue + 1) {
				elem.style.backgroundColor = "lightgreen";
				this.startValue++}
				 else {
					alert("Wrong order!");
				}
			if (this.startValue == 100) {
				alert("You win!");
				this.shuffle();
				this.startValue = 0;
			}	
				
		},
		shuffle() {
			this.pole.sort(()=>{
				return Math.random() * 2 - 1;
			});
		
		},
		restart(){
				this.shuffle();
				this.startValue = 0;
				let celles = document.querySelectorAll(".cell");
          		celles.forEach(cell=>{
          		cell.style.backgroundColor = "";
          	})
		}

	},
	mounted(){
		let count = 1;
		for (let i = 0; i < 100; i++){
				this.pole[i] = {
				value : count++,
				style : {
					color: this.colors[Math.floor(Math.random() * ((8-1) - 1 + 1)) + 1],
					fontSize: this.fonts[Math.floor(Math.random() * ((5-1) - 1 + 1)) + 1],	
				}		
			}
		}
		this.shuffle();
		
	},
	
}).mount("#app");
