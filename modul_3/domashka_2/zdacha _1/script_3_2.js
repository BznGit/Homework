console.log('Its working!');
Vue.createApp({
	data() { //используемые данные
		return {
			lection:{
				id: 1,
				name: "Элементы электрических цепей постоянного тока и их параметры",
				quastions: `
				Вопросы<br>
					1. Электрическая цепь. Основные понятия и определения<br>
					2. Положительное направление ЭДС напряжений и токов<br>
					3. Пассивные элементы электрических цепей<br>
					4. Активные элементы электрических цепей
				`,
				content: "Электрической цепью называют совокупность устройств, предназначенных для передачи, распределения и взаимного преобразования электрической и других видов энергии и информации. Свое назначение цепь выполняет, если в ней обеспечены условия для протекания электрического тока. Электромагнитные процессы в цепи могут быть описаны с помощью известных из физики интегральных понятий: тока, напряжения (разности потенциалов), электродвижущей силы, сопротивления, электрического заряда, электрической емкости, магнитного потока, индуктивности и взаимной индуктивности.",
				visible: false, 
			},

		}
	},
	methods: { //действия, которые выполняются в приложении

		}
	
}).mount("#app");
