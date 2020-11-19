console.log('Homework 4');
/*alert(" Для проверки отмените коментирование задачи в коде");*/

// Задача 1 --------------------------
/*let number = "563";
let sum = 0;
for (let i =0; i < number.length; i++) sum += parseInt(number[i])
console.log(sum);*/

// Задача 2 --------------------------
/*let str = "addsdshdeds";
let str_char = "s";
let temp = "";
for (let i =0; i < str.length; i++)	if (str_char == str[i]) temp+=str[i]+str_char; else temp+=str[i]
console.log(temp);*/

// Задача 3 --------------------------
/*let password = null;
while (!password) {
	let good = true;
	password = prompt("Введите пароль");
	// проверка длинны ----------------------
	if (password.length < 9) {
		alert("Количество символов < 9!") ;
		good = false;
	} 
	// проверка заглавных букв----------------------
	regExp = /([А-Я]|[A-Z])/g;
	if (!regExp.test(password)){
		alert("Нет заглавных букв!") ;
		good = false;	
	}
	// проверка ппрописных букв----------------------
	regExp = /([а-я]|[a-z])/g;
	if (!regExp.test(password)){
		alert("Нет прописных букв!") ;
		good = false;	
	}
	// проверка двух цифр ----------------------
	regExp = /\d{3}/g;
	if (!regExp.test(password)){
		alert("Нет трех цивр!") ;
		good = false;	
	}
	// проверка символов ------------------------
	regExp = /(@|!|#|%|-|_|\.|\?|\$|)/g; 
	if (!regExp.test(password)){
		alert("Нет специальных символов:\n !, @, #, $, %, ^, &, *, ., -, _, |,?") ;
		good = false;	
	}
	if (good == false) password = null; 
}
alert("Ваш пароль соответсвует требованиям безопасности!")*/
// Задача 4 --------------------------
let week ="Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье";
let str = prompt("введите день недели: ");
let temp = "";
regExp = /пн|ПН/ig
if  (regExp.test(str)) temp = "понедельник";
regExp = /вт|Вт/ig
if  (regExp.test(str)) temp = "втроник";
regExp = /ср|СР/ig
if  (regExp.test(str)) temp = "среда";
regExp = /чт|ЧТ/ig
if  (regExp.test(str)) stemp = "четверг";
regExp = /пт|ПТ/ig
if  (regExp.test(str)) temp = "пятница";
regExp = /сб|СБ/ig
if  (regExp.test(str)) temp = "суббота";
regExp = /вс|ВС/ig
if  (regExp.test(str)) temp = "воскресенье";

let regexp = new RegExp(temp, "ig");
let result = week.match(regexp);
console.log(result);



