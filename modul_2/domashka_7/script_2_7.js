console.log('Homework 6');
/*alert(" Для проверки отмените коментирование задачи в коде");*/
// Задача 1 ----------------------------------------------------
/*let div1 = document.createElement("div");
let timer = setInterval(clock, 1000);
function clock() {
	div1.style.display = 'flex';
	div1.style.marginLeft = 'auto';
	div1.style.marginRight= 'auto';
	div1.style.marginTop = '15%';
	div1.style.marginBottom= 'auto';
	div1.style.width = '1200px';
	div1.style.fontSize = "250px";
	div1.style.color = "red"
	document.body.append(div1);
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	if (min<10) min = "0" + min;
	if (sec<10) sec = "0" + sec;
	div1.innerText = hour + " : " + min + " : " + sec;
};*/
/*
// Задача 2 ----------------------------------------------------
let cars = [{
	image: "./Audi.jpg",
	brand : "Audi",
	model: "A3",
	mileage: 54000,
	year: 2018,
	price: 1547000 
},{
	image: "./BMW.jpg",
	brand : "BMW",
	model: "3 series",
	mileage: 68000,
	year: 2019,
	price: 238000 
},{
	image: "./C-class.jpg",
	brand : "Mercedes-Benz",
	model: "C-class",
	mileage: 25000,
	year: 2017,
	price: 1780000 
}, {
	image: "./Passat.jpg",
	brand : "Volkswagen",
	model: "Passat",
	mileage: 90000,
	year: 2017,
	price: 1420000 
}];

for (let i = 0; i< cars.length; i++){
	renderCars(cars[i]);
}

function renderCars(thing){
	let contener = document.createElement("div");
	contener.innerHTML =`<style>
							div:hover {transform: scale(1.1);}
						</style>`
	contener.style.display = 'inline-block';
	contener.style.margin = '20px';
	contener.style.width = '400px';
	contener.style.height = '500px';
	contener.style.borderRadius = '25px';
	contener.style.boxShadow = '10px 8px 11px 2px #000000';
	contener.style.fontFamily = 'Arial';
	contener.style.fontSize = '100%';
	document.body.append(contener);

	let  imgCar = document.createElement("img");
	imgCar.src = thing.image;
	imgCar.style.width = '400px';
	imgCar.style.borderTopLeftRadius = '25px';
	imgCar.style.borderTopRightRadius = '25px';
 	contener.appendChild(imgCar);

	let titel = document.createElement("h2");
	titel.style.marginLeft = "20px";
	titel.innerText = thing.brand;
	contener.appendChild(titel);

	let model = document.createElement("h3");
	model.style.marginLeft = "20px";
	model.innerText = thing.model;
	contener.appendChild(model);

	let about = document.createElement("p");
	about.style.marginLeft = "20px";
	about.innerText = "Год производства: " + thing.year 
		+ ". \nПробег: " + thing.mileage + " км.\n Цена: " 
		+ thing.price + " рублей";
	contener.appendChild(about);
	document.body.append(contener);
}*/

// Задача 4 --------------------------------------------
/*let colors = ["red", "yellow", "yellowgreen"];
for (let i = 0; i < colors.length; i++){
	setsvetofor('gray');
}
function setsvetofor(cvet){
	let  svetofor= document.createElement("div");
	svetofor.style.display = 'in-block';
	svetofor.style.marginLeft = 'auto';
	svetofor.style.marginRight = 'auto';
	svetofor.style.marginBottom = '20px';
	svetofor.style.width = '200px';
	svetofor.style.height = '200px';
	svetofor.style.borderRadius = '100px';
	svetofor.style.backgroundColor = cvet;
	document.body.append(svetofor);
}
let cvet = document.getElementsByTagName("div");
let i = 0;
let timer = setInterval(clock, 1000);
let down = true;
function clock() {
	if (down){
		for (let j = 0; j < cvet.length; j++) {cvet[j].style.backgroundColor = "gray";}
		cvet[i].style.backgroundColor = colors[i];
		i++;
		if ( i == 2) down = false;
	} else{
		for (let j = 0; j < cvet.length; j++) {cvet[j].style.backgroundColor = "gray";}
		cvet[i].style.backgroundColor = colors[i];
		i--;
		if ( i == 0) down = true;	
	}

}*/

// Задача 5 --------------------------------------------
let div1 = document.createElement("div");
let text = document.createElement("h2");
text .style.display = 'flex';
text .style.justifyContent = 'center';
let timer = setInterval(clock, 1000);
function clock() {
	div1.style.display = 'flex';
	div1.style.width= '100%';
	div1.style.justifyContent = 'center';
	div1.style.fontSize = "150px";
	div1.style.color = "red"
	document.body.append(div1);
	let date1 = new Date();
	let date2 = new Date(date1.getUTCFullYear()+1 , 0, 1, 0, 0, 0, 0);

	console.log(date2);
	let ost = date2 - date1;
	let month =Math.trunc(ost/2592000000);
	let temp = ost%2592000000;
	let day =Math.trunc(temp/86400000);
	temp = temp%86400000;
	let hour = Math.trunc(temp/3600000);
	temp = temp%3600000;
	let min = Math.trunc(temp/60000);
	temp = temp%60000;
	let sec = Math.trunc(temp/1000);
	if (min<10) min = "0" + min;
	if (sec<10) sec = "0" + sec;

	let strMonth, strDay, strHour;
	if (month < 5) strMonth = " месяца, "; else strMonth = " месяцев, ";
	if (month == 1) strMonth = " месяц, ";
	if (day < 5) strDay = " дня, "; else strDay = " дней, ";
	if (day == 1) strDay = " день, ";
	if (hour < 5) strHour = " часа, "; else strHour = " часов, ";
	if (hour == 1) strDay = " час, ";		
	
	text.innerText ="До Нового года осталось:\n" + month + strMonth +
	day + strDay +  hour + strHour + min + " м., " + sec + " с.";
	div1.append(text);
	
};

let  imgCar = document.createElement("img");
imgCar.src = "./елка.png";
imgCar.style.display = 'flex';
imgCar.style.marginLeft ="auto";
imgCar.style.marginRight ="auto";
imgCar.style.width ="1500px";
imgCar.style.borderTopLeftRadius = '25px';
imgCar.style.borderTopRightRadius = '25px';
document.body.appendChild(imgCar);