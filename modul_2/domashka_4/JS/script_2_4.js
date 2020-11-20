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
	// проверка трех цифр ----------------------
	regExp = /(\d.*\d.*\d.*)/g;
	if (!regExp.test(password)){
		alert("Нет трех цивр!") ;
		good = false;	
	}
	// проверка символов ------------------------
	regExp = /(@|!|#|%|-|_|\.|\?|\$)/g;
 	if (!regExp.test(password)){
		alert("Нет специальных символов:\n !, @, #, $, %, ^, &, *, ., -, _, |,?") ;
		good = false;	
	}
	if (good == false) password = null; 
}
alert("Ваш пароль соответсвует требованиям безопасности!");
// Задача 4 --------------------------*/
let week ="Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье";
//let str = prompt("введите день недели: ");
let str = "подельник";
let temp_reg = [];
let word = "";
for (let i = 0; i<str.length; i++){
	temp_reg = str.split("");
	let regexp = new RegExp(temp_reg[i]+temp_reg[i+1], "ig");
	if (regexp.test(week)){
		 word += (temp_reg[i] + temp_reg[i+1])+"!";
		 i++;
	}
}
	let prom = word.split("!");
	console.log(prom);
	word = "";
	for (let i = 0; i<prom.length-1; i++) word+="[" + prom[i] + "]*";
	console.log(word);
	let regexp2 = new RegExp(word, "ig");
	let result = week.match(regexp2);
	console.log(result);