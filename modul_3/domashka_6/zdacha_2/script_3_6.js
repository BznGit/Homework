console.log('Its working!');

 // компоненты, которые обрабатывают пути

const Menu = { 
	template: `<ul>
					<li><router-link to="/">Home</router-link></li>
					<li ><router-link to="/catalog">Catalog</router-link></li>
					<li ><router-link to="/cart">Cart</router-link></li>
					<li ><router-link to="/signin">Sign-in</router-link></li>
	 			</ul>` 	
	};

const Home = { 
		template: `<h2>Home page</h2>`	
	};

const Catalog = {
		props:['categories','phones', 'computers'],
		/*template:`` <ul>
						<li  v-for="category in categories" :key="category">
							<router-link to="/catalog/phones">{{category}}<router-link>
						</li>
					</ul>`*/
		template:`
				<ul>
					<li>
						<router-link to="/catalog/phones">{{categories[0]}}</router-link>
					</li>
					<li>
						<router-link to="/catalog/computers">{{categories[1]}}</router-link>
					</li>
				</ul>
				<router-view class="products" :phones="phones" :computers="computers" ></router-view>`

	};

const Cart = {
		template: '<h2>Cart Page</h2>'
	};

const Signin= {
		template: '<h2>Sign-in Page</h2>'
	};

const Phones = {
		props:['phones'],
		template: `	<div class="card"  v-for="phone in phones" :key="phone">
						<span>
						 	<h2><router-link :to="{name:'item1', params:{id: phone.id}}">{{phone.name}}</router-link></h2>
							<p>Цена {{phone.coast}} руб.</p>
						</span>
						<img :src="phone.src[0]"  style="float:right" width="70">
					</div>
					<router-view :phones="phones"></router-view>`,
			methods:{
			
			}
		};
const Computers = {
		props:['computers'],
		template: `	<div class="card"  v-for="computer in computers" :key="computer">
						<span>
							<h2><router-link :to="{name:'item2', params:{id: computer.id}}">{{computer.name}}</router-link></h2>
							<p>Цена {{computer.coast}} руб.</p>
						</span>	
						<img :src="computer.src[0]" style="float: right" height="120">
					</div>
					<router-view :computers="computers"></router-view>`
			};

const  Phone = {
	props:['phones'],
	template: `	<div class="item">
					<span>
						<h2>{{phones[$route.params.id-1].name}}</h2>
						<p>Цена {{phones[$route.params.id-1].coast}} руб.</p>
						<p>{{phones[$route.params.id-1].description}}</p>
						<p>Количество: {{phones[$route.params.id-1].count}} шт.</p>
					</span>	
					<img :src="phones[$route.params.id-1].src[0]" style="float: right" height="500">
				</div>`
}			

const  Computer = {
	props:['computers'],
	template: `	<div class="item">
					<span>
						<h2>{{computers[$route.params.id-1].name}}</h2>
						<p>Цена {{computers[$route.params.id-1].coast}} руб.</p>
						<p>{{computers[$route.params.id-1].description}}</p>
						<p>Количество: {{computers[$route.params.id-1].count}} шт.</p>
					</span>	
					<img :src="computers[$route.params.id-1].src[0]" style="float: right" height="500">
				</div>`
}

const NotFound = { 
		template: '<h2>Page Not Found</h2>' 
	};

 // маршруты, сопотавленные с компонентами
 const routes = [
	 { path: '/', component: Home },
	 { path: '/catalog:', component: Catalog, 
	 	children:[
			{path: 'phones', component: Phones,
				children:[{path: '/:id', component: Phone, name: 'item1'}]},
			{path: 'computers', component: Computers,
				children:[{path: '/:id', component: Computer, name: 'item2'}]},
		]},
	 { path: '/cart', component: Cart },
	 { path: '/signin', component: Signin },

	 { path: '/:pathMatch(.*)*', component: NotFound }
 ];
 // создаем объект маршрутизатора
 	const router = VueRouter.createRouter({
	 history: VueRouter.createWebHashHistory(),
	 routes: routes
 });

 const app = Vue.createApp({
	 data(){
		return{
			phones:[
				{
					id : 1,
					name: 'Samsung A 21',
					src: ['./img/smga21_1.jpg', './img/smga21_2.jpg', './img/smga21_3.jpg'],
					description: 'Хороший телефон',
					coast: 20000,
					count: 10,
				},
				{
					id : 2,
					name: 'Samsung A 31',
					src: ['./img/smga31_1.jpg', './img/smga31_2.jpg', './img/smga31_3.jpg'],
					description: 'Очень хороший телефон',
					coast: 25000,
					count: 4,
				},
				{
					id : 3,
					name: 'Samsung A 41',
					src: ['./img/smga41_1.jpg', './img/smga41_2.jpg', './img/smga41_3.jpg'],
					description: 'Лучший телефон',
					coast: 30000,
					count: 2,
				},
			],
			computers:[
				{
					id : 1,
					name: 'Asus ZenBook 510',
					src: ['./img/asus1.png', './img/asus2.png', './img/asus3.png'],
					description: 'Хороший комьютер',
					coast: 45000,
					count: 3,
				},
				{
					id : 2,
					name: 'Apple MacBook Pro',
					src: ['./img/apple1.png', './img/apple2.png', './img/apple3.png'],
					description: 'Средний компьютер',
					coast: 120000,
					count: 4,
				},
				{
					id : 3,
					name: 'Lenovo G560',
					src: ['./img/len1.png', './img/len2.png', './img/len3.png'],
					description: 'Нормальный компьютер',
					coast: 50000,
					count: 2,
				},
			],
			categories:[
				'Телефоны',
				'Ноутбуки'
			]	
		}
	},

	 components:{
		 'menucmp': Menu,
		 
		}
 })
 app.use(router);
 app.mount('#app');



