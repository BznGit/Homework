console.log('Its working!');

 // компоненты, которые обрабатывают пути

const Menu = { 
	template: `<ul >
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
		template: '<h2>Catalog Page</h2>'
	};

const Cart = {
		template: '<h2>Cart Page</h2>'
	};

const Signin= {
		template: '<h2>Sign-in Page</h2>'
	};

const NotFound = { 
		template: '<h2>Page Not Found</h2>' 
	};

 // маршруты, сопотавленные с компонентами
 const routes = [
	 { path: '/', component: Home },
	 { path: '/catalog', component: Catalog },
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
	 components:{
		 'menucmp': Menu,
		}
 })
 app.use(router);
 app.mount('#app');



