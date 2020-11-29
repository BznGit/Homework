console.log('Homework 6');
//alert(" Для проверки отмените коментирование задачи в коде");

// Задача 1 ----------------------------------------------------
let divy = document.getElementsByClassName("div");
for (let i = 0; i < divy.length; i++){
	divy[i].addEventListener("click", handlerFunction);
}
function handlerFunction(e){
	let elem = e.target;
	elem.classList.toggle("class"); 
}   
// Задача 2 ----------------------------------------------------
let button = document.querySelector(".button");
let i = 0;
button.addEventListener("click", onClick);
function onClick(e){
	let text = button.firstElementChild;
	text.innerText = i++;
}
// Задача 3 ----------------------------------------------------
let user = {
	name: "Алексей",
	avatar: "./avat.png",
}
let acsepter = document.querySelector(".coments");
let sender = document.querySelector(".bot");

sender.addEventListener("click", addCommit);
function addCommit(e){
	let comit = document.getElementById("comit");
	comit.style.display = "flex";
	let date = new Date();

	let item = document.createElement("div");
	item.classList.add("items");
	
	let avat = document.createElement("img");
	avat.src = user.avatar;
	avat .style.width = '50px';
	avat .style.height = '60px';
	avat.style.borderTopLeftRadius = '20px';
	avat.style.borderTopRightRadius = '20px';
	
	let imya = document.createElement("h5");
	imya.style.display = "inlineBlock";
	imya.style.margin = "0";
	imya.style.padding = "5px";
	imya.innerText = user.name + "\n" + (((date.getUTCHours()+3) < 10)? "0" + (date.getUTCHours()+3): (date.getUTCHours()+3))+":" +
	 ((date.getUTCMinutes() < 10)? "0" +date.getUTCMinutes(): date.getUTCMinutes()) +"\n"+  date.getUTCDate()  + "." +(date.getUTCMonth()+1) +
	 "." +date.getUTCFullYear()
		
	let commit = document.querySelector(".memo");
	let com = document.createElement("P");
	com.style.display = "inlineBlock";
	com.style.margin = "0";
	com.innerText = commit.value;

	item.appendChild(avat);
	item.appendChild(imya);
	item.appendChild(com);
	
	acsepter.appendChild(item);
}
// Задача 4 ----------------------------------------------------
let books = [{
	article : "печатные",
	autor: "А.С.Пушкин",
	name: "Пиковая дама",
	description: `Повесть Александра Сергеевича Пушкина с мистическими элементами,
				  послужившая источником сюжета одноимённой оперы П. И. Чайковского`,
	
},{
	article : "печатные",
	autor: "Л.Н.Толстой",
	name: "Война и мир",
	description: `В романе обилие глав и частей, большинство из которых имеют сюжетную законченность. 
				  Короткие главы и множество частей позволяют Толстому перемещать повествование во времени и пространстве
				  и благодаря этому уместить в одном романе сотни эпизодов.`, 
},{
	article : "печатные",
	autor: "Ф.М.Достаевский",
	name: "Идиот",
	description: `Являлся одним из самых любимых произведений писателя, наиболее полно выразившим 
				 и нравственно-философскую позицию Достоевского, и его художественные принципы в 1860-х годах.`,
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
	th2.classList.add("table");
	let th3 = document.createElement("th");
	th3.innerText = "Автор"; 
	th3.classList.add("table");
	let th4 = document.createElement("th");
	th4.innerText = "Название";
	th4.classList.add("table"); 
	let th5 = document.createElement("th");
	th5.innerText = "Описание"; 
	th5.classList.add("table");

	tabel.appendChild(caption);
	tabel.appendChild(th1);
	tabel.appendChild(th2);
	tabel.appendChild(th3);
	tabel.appendChild(th4);
	tabel.appendChild(th5);
	
	for (let i = 0; i< books.length; i++){
		
		let tr = document.createElement("tr");	
		tr.classList.add("table");
		
		let td1 = document.createElement("dt");
		td1.classList.add("table");
		td1.innerText = i+1;
		tr.appendChild(td1);

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