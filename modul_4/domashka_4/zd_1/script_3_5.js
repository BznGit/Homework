console.log('Its working!');
let app = Vue.createApp({
	data() { //используемые данные
		return {
			images:null			
		}
	},
		methods: { //действия, которые выполняются в приложении
			handlerVis(id){
				let elem =  this.images.find(item=>item.id == id);
				let index = this.images.indexOf(elem);
				console.log('******'+id);
				console.log(index);
				this.images[index].del = !this.images[index].del;
				
			},
		
			handlerDelete(id){
				this.images.splice(id, 1);
				
			},
			handlerAdd(im, pth){
				console.log(im, pth);
				this.images.push({src:pth, name: im, del:false});
				
			},
		},

		created(){
			var xhr = new XMLHttpRequest();
			xhr.open('GET', 'images.json', true); //true - запрос синхронный
			xhr.send();
			var that = this;
			xhr.onreadystatechange = function() {
				if (xhr.readyState != 4) return;
				if (xhr.status != 200) {
				alert( xhr.status + ': ' + xhr.statusText ); // обработать ошибку
			} else {
				var img =JSON.parse(xhr.responseText);				
				that.images = img;
				console.log(this.images);
				}
			}
		},

	});

app.component('gallary',{
	data(){
		return{
			src:"./add.png"	,
			delImg:'./del.png',
			isVis: false,	
			fl: null,
			name:null,
			ch: false,
			nm:false,
		}
	},
	template: `<img class="add" @click="isVis=!isVis" v-bind:src="src">
				<div v-if=isVis class="modal">
					<input id="fll" type="file" @change="change" placeholder="Выберети файл"/>
					<input type="text" v-model="name" placeholder="Введите название картинки"/>
					<img v-if = isVis class="close" @click="isVis=!isVis" v-bind:src="delImg">
					<button @click="add">Сохранить</button>
					
				<div>`,

	methods:{
		change(e){
			
			this.fl = e.target.files[0];
			let n = this.fl.name;
			console.log(n.indexOf('%'));
			if (n.indexOf('%') !== -1) {
				alert('Недопустимый символ "%" в названии файла');
				let a = document.getElementById(fll);
				fll.value=null
				
				return;
			}; 
		},
		add(){
			var file = this.fl;
			if (file==null){
				alert('Выбирете файл!');
				return;
			} 
			var name = this.name;
			if (name==null ||name==''){
				alert('Укажите название');
				return;
			}
			$.ajax({
				type: 'POST',
				url: file.name + '?'+name,
				data: file,
				processData: false,
				success: function(response) {
					//alert(response.data ); //ответ от сервера
				}
			});
			location.reload();
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
					<img v-bind:id="image.id" class="item" @click="handlerclick"   v-bind:src="image.src">
					<img v-if = image.del class="del" @click="dlt" v-bind:src="delImg">
				</div>`,

	methods:{
		handlerclick(e){
			let id = e.target.id;
			this.$emit('del-vis', id);
			this.currentId=id;
		},

		dlt(e){
			let id =this.currentId;
			console.log('--------> '+id);
			//this.$emit('delet-item', this.currentId);
			var xhr = new XMLHttpRequest();
			xhr.open('GET', 'delet?'+ id, true); //true - запрос синхронный
			xhr.send();
			xhr.onreadystatechange = function() {
				if (xhr.readyState != 4) return;
				if (xhr.status != 200) {
				alert( xhr.status + ': ' + xhr.statusText ); // обработать ошибку
			} else {
				alert('КАРТИИНКА УДАЛЕНА!');
				}
			}
			location.reload();
		}			
	},
	


 });
 

 app.mount('#app');




