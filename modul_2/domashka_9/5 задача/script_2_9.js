console.log('Homework 6');
//alert(" Для проверки отмените коментирование задачи в коде");

// Задача 5 ----------------------------------------------------
let books = [{
	article : "12",
	autor: "А.С.Пушкин",
	name: "Пиковая дама",
	description: `Повесть Александра Сергеевича Пушкина с мистическими элементами,
				  послужившая источником сюжета одноимённой оперы П. И. Чайковского`,
	price: "123"
	
},{
	article : "6",
	autor: "Л.Н.Толстой",
	name: "Война и мир",
	description: `В романе обилие глав и частей, большинство из которых имеют сюжетную законченность. 
				  Короткие главы и множество частей позволяют Толстому перемещать повествование во времени и пространстве
				  и благодаря этому уместить в одном романе сотни эпизодов.`, 
	price: "500"
},{
	article : "8",
	autor: "Ф.М.Достаевский",
	name: "Идиот",
	description: `Являлся одним из самых любимых произведений писателя, наиболее полно выразившим 
				 и нравственно-философскую позицию Достоевского, и его художественные принципы в 1860-х годах.`,
	 price: "320"
}];


function renderBooksTable(thing){
	let tabel = document.createElement("tabel");
	let caption = document.createElement("caption");
	caption.style.fontSize = "30px";
	caption.style.fontFamily = "Tahoma";
	caption.innerText = "Таблица книг";
	
	let th1 = document.createElement("th");
	th1.innerText = "№"; 
	th1.classList.add("table");
	
	let th2 = document.createElement("th");
	th2.innerText = "Артикул"; 
	let id2 = document.createAttribute("id");
	id2.value = "th2";
	th2.attributes.setNamedItem(id2);
	console.log(th2);
	th2.addEventListener("click", sort);
	th2.classList.add("table");
	
	let th3 = document.createElement("th");
	th3.innerText = "Автор";
	let id3 = document.createAttribute("id");
	id3.value = "th3";
	th3.attributes.setNamedItem(id3);
	console.log(th3);
	th3.addEventListener("click", sort); 
	th3.classList.add("table");

	let th4 = document.createElement("th");
	th4.innerText = "Название";
	let id4 = document.createAttribute("id");
	id4.value = "th4";
	th4.attributes.setNamedItem(id4);
	console.log(th4);
	th4.addEventListener("click", sort);
	th4.classList.add("table"); 

	let th5 = document.createElement("th");
	th5.innerText = "Описание"; 
	let id5 = document.createAttribute("id");
	id5.value = "th5";
	th5.attributes.setNamedItem(id5);
	console.log(th5);
	th5.addEventListener("click", sort);
	th5.classList.add("table");

	let th6 = document.createElement("th");
	th6.innerText = "Цена, руб"; 
	let id6 = document.createAttribute("id");
	id6.value = "th6";
	th6.attributes.setNamedItem(id6);
	console.log(th6);
	th6.addEventListener("click", sort);
	th6.classList.add("table");

	tabel.appendChild(caption);
	tabel.appendChild(th1);
	tabel.appendChild(th2);
	tabel.appendChild(th3);
	tabel.appendChild(th4);
	tabel.appendChild(th5);
	tabel.appendChild(th6);
	
	for (let i = 0; i< books.length; i++){
		
		let tr = document.createElement("tr");	
				
		let td1 = document.createElement("td");
		td1.innerText = i+1;
		tr.appendChild(td1);
		td1.classList.add("table");
		
		for (key in thing[i]){
			let td = document.createElement("td");
			td.classList.add("table");
			td.innerText = thing[i][key];
			tr.appendChild(td);
		}	
		tabel.appendChild(tr);
	}
	document.body.append(tabel);	
}
renderBooksTable(books);

function sort(e){
	let elem = e.target;
	if (elem.id == "th2"){
		books.sort((a, b) => a.article - b.article);
		console.log(elem.id);
	}
	if (elem.id == "th3"){
		books.sort(function (a, b){if (a.autor < b.autor)	return -1;
	  					if ( a.autor > b.autor) return 1; return 0});
		console.log(elem.id);
	}
	if (elem.id == "th4"){
		books.sort(function (a, b){if (a.name < b.name)	return -1;
			if ( a.name > b.name) return 1; return 0});
		console.log(elem.id);
	}
	if (elem.id == "th5"){
		books.sort(function (a, b){if (a.autor < b.autor)	return -1;
			if ( a.description > b.description) return 1; return 0});
		console.log(elem.id);
	}
	if (elem.id == "th6"){
		books.sort((a, b) => a.price - b.price);
		console.log(elem.id);
	}
	let tr = document.getElementsByTagName("tr");
	for (let i = 0; i < books.length; i++){
		let td = tr[i].children;
		console.log(tr[i]);
		let j = 1;
		for (key in books[i]){
			td[j].innerText = books[i][key];
			tr[i].replaceChild(td[j], td[j]);
			j++;
		}
		
	}

}
