console.log('Homework 2');
alert(" Для проверки отмените коментирование задачи в коде");
/*
// Задача 1 -------------------------------------
console.log("Задача 1"); 
	let Nmonth = null;
	 while (!Nmonth) {
		Nmonth = parseInt(prompt("Введите номер месяца:"));
		if (Nmonth > 12 || Nmonth <1 ) Nmonth = null; 	
	}
		
	switch (Nmonth) {
		case 12 :
		case 1  :
		case 2  : 
			alert("Это зима");
			break;
		case 3  :
		case 4  :
		case 5  : 
			alert("Это весна");
			break;
		case 6  :
		case 7  :
		case 8  : 
			alert("Это лето");
			break;
		case 9   :
		case 10  :
		case 11  : 
			alert("Это зима");
			break;
			
	}
	//location.reload();

console.log("");  
*/
/*	
// Задача 2 -------------------------------------
console.log("Задача 2");
let dlina = null;
	 while (!dlina) {
		dlina = parseFloat(prompt("Введите длину отрезка:"));
		if (dlina < 0) dlina = null; 	
	}
let edinica = null;
	 while (!edinica) {
		edinica = parseInt(prompt("Введите единицу измерения 1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр:"));
		if (edinica < 0 || edinica > 6) edinica = null; 	
	}
		switch (edinica) {
			case 1 : 
				dlina = dlina * 0.1;
				alert("Длина рана " + dlina + " м");
				break;
			case 2 : 
				dlina = dlina * 1000;
				alert("Длина рана " + dlina + " м");
				break;
			case 3 : 
				dlina = dlina;
				alert("Длина рана " + dlina + " м");
				break;
			case 4 : 
				dlina = dlina * 0.001;
				alert("Длина рана " + dlina + " м");
				break;
			case 5 : 
				dlina = dlina * 0.01;
				alert("Длина рана " + dlina + " м");
				break;			
	}
	*/
/*
// Задача 3 ------------------------------------
console.log("Задача 3");
	let chislo = null;
	while (!chislo) {
		chislo = parseFloat(prompt("Введите число от -999 до +999:"));
		if (chislo < -999 || chislo > 999) chislo = null; 	
	}
	let onvet = "";
	if (chislo < 0) otvet = " - это число отрицательное"
		else otvet = "- это число положительное";
	if (chislo == 0) otvet = "Это число нулевое";
	if (chislo<10 && chislo>-10) otvet += " однозначное" 
	else {
		if (chislo<100 && chislo>-100) otvet += " двузначное" 
			else {if (chislo<1000 && chislo>-1000) otvet += " трехзначное" }
		};
	alert(chislo + otvet);
	
*/

/*
// Задача 4 ------------------------------------
console.log("Задача 4");
for (let i = 1; i <= 100; i++) {
	if (i%3 == 0 && i%5 == 0) console.log("ThreeFive") 
		else {
		if (i%3 == 0) console.log("Three") 
			else {
				if (i%5 == 0) console.log("Five")
					else console.log(i)
				} 			
			}
	
}

*/
/*
// Задача 5* ------------------------------------
console.log("Задача 5*");

let god = null;
while (!god) {
	god = parseInt(prompt("Введите год в формате XXXX:"));
	if (god < 0) god = null; 	
}

if (god % 4 == 0) {
	if (god % 100 == 0) { 
		if (god % 400 == 0) alert(god + " - високосный год")
			else alert(god + " - не високосный год");}
	else alert(god + " -  високосный год"); }
else alert(god + " -  не високосный год"); 


*/

// Задача 6 ------------------------------------
console.log("Задача 6");
let tarelki = null;
	 while (!tarelki) {
		tarelki = parseInt(prompt("Введите число тарелок:"));
		if (tarelki < 0) tarelki = null; 	
	}
let sredstvo = null;
	 while (!sredstvo) {
		sredstvo = parseInt(prompt("Введите количество моющего средства, грамм:"));
		if (sredstvo < 0) sredstvo = null; 	
	}
	let ostatok = sredstvo
	for (let i = 1; i <= tarelki; i++) {
		ostatok = sredstvo-i*0.5;
		if (ostatok <0) break;
		console.log("тарелок: " + i + " остаток средства - " +ostatok + " грамм");	
	
	}
	
	
	
