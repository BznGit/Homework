console.log('Its working!');
let app = Vue.createApp({
	data() { //используемые данные
		return {
			images: [
				{  src: './Audi.jpg',    name:'Ауди', del: false},
				{  src: './BMW.jpg',     name:'БМВ', del: false},
				{  src: './C-class.jpg', name:'Мерседес', del: false},
				{  src: './Passat.jpg',  name:'Фольксваген', del: false}
			],			
		}
	},
		methods: { //действия, которые выполняются в приложении
			handlerVis(id){
				this.images[id].del = !this.images[id].del;
			},
		
			handlerDelete(id){
				this.images.splice(id, 1);
				
			},
			handlerAdd(im, pth){
				console.log(im, pth);
				this.images.push({src:pth, name: im, del:false});
				
			},
			
		},	
	
});

app.component('gallary',{
	data(){
		return{
			src:"./add.png"	,
			isVis: false,	
			path:'',	
			imya:'',
		}
	},
	template: `<img class="add" @click="isVis=!isVis" v-bind:src="src">
				<div v-if=isVis class="modal">
					<input  v-model="imya" type ="text" max = "200" placeholder="Введите название какртинки">
					<input type ="text" v-model="path" placeholder="Введите путь до картинки c именем">
					<button @click="add">Добавить</button>
					<button @click="this.isVis=false">Закрыть</button>
				<div>`,

	methods:{
		add(){
			this.$emit('add-it', this.imya, this.path);
			this.isVis=false;
			this.path='';
			this.imya='';
			console.log(this.imya, this.path);
		},
			
	}
 });

 app.component('oneimage',{
	props:['images'],
	data(){
		return{
			delImg:'./del.png',
			isActive: false,
			currentId:-1,
			
		}
	},
	template:  `<div class="rel" v-for="image in images" v-bind:key="image">
					<h4>{{image.name}}</h4>
					<img v-bind:id="images.indexOf(image)" class="item" @click="handlerclick"   v-bind:src="image.src">
					<img v-if = image.del class="del" @click="dlt" v-bind:src="delImg">
				</div>`,

	methods:{
		handlerclick(e){
			let id = e.target.id
			this.$emit('del-vis', id);
			this.currentId=id;
		},

		dlt(e){
			let id = e.target.id
			this.$emit('delet-item', this.currentId);
		}			
	},
	mounted(){
	
	}


 });
 

 app.mount('#app');




