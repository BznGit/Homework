console.log('Its working!');
Vue.createApp({
	data() { //используемые данные
		return {
			articles:[
				{
					titel: "Во что играл британский математик Джон Конвей",
					url: "https://zen.yandex.ru/media/nplus1/vo-chto-igral-britanskii-matematik-djon-konvei-5e994b703f96c7546c7a28a3",
					image: "https://avatars.mds.yandex.net/get-zen_doc/198554/pub_5e994b703f96c7546c7a28a3_5e994b8fc0181e4d79c352a4/scale_1200",
					description:`С кем "играл" Конвей и каким запомнился коллегам, рассказывают математики Виктор Клепцин и Михаил Раскин`
				},
				{
					titel: "Теория игр. Искусство стратегического мышления в бизнесе и жизни",
					url: "https://zen.yandex.ru/media/id/5a36b95179885ecd8830b12e/teoriia-igr-iskusstvo-strategicheskogo-myshleniia-v-biznese-i-jizni-5a36bde95f4967207c88521a",
					image: "https://avatars.mds.yandex.net/get-zen_doc/42056/pub_5a36bde95f4967207c88521a_5a36be497ddde8d17c5ca754/scale_1200" ,
					description:`Стратегия игры: как найти оптимальное решение и убедить соперников, что вы игрете всерьез.`
				},
				{
					titel: "Куда приводит антропный принцип",
					url: "https://zen.yandex.ru/media/id/5a6df3dc3c50f7f6447b3420/kuda-privodit-antropnyi-princip-5d835fc134808200ad2fc625",
					image: "https://avatars.mds.yandex.net/get-zen_doc/1889495/pub_5d835fc134808200ad2fc625_5d8360acdf944400aec16adb/scale_1200",
					description: `Времени не существует.Именно так я хотел начать статью о том, как время можно вывести из антропного принципа.`
				},
			],
			isActive: false,
			
		}
	},
	mounted(){

	},
	computed:{
		search:function(){
			
		}
	},
	
}).mount("#app");
