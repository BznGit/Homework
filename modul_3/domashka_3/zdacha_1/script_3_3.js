console.log('Its working!');
Vue.createApp({
	data() { //используемые данные
		return {
			wallet: "1KnJEthTLWamQDepU4nqndEQHtigL23Az9",
			times :[],
		}
	},
	mounted(){
		fetch('http://sha256.p2p-spb.xyz:9338/web/graph_data/miner_hash_rates/last_hour')
		.then((response) => {
			return response.json();
		})
		.then(function(data){
			this.times = new Array(data.length);
			for(let i = 0; i < data.length; i++){
				let sc = new Date((data[i][0])*1000); 
				this.times[i] = {
					min: sc.getMinutes(),
					sec: sc.getSeconds(),
					hash:	data[i][1][this.wallet],	
				}
			}
			this.times.reverse();
		});
	},
	methods:{
	
	},
	
}).mount("#app");
