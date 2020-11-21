console.log('Homework 5');
/*alert(" Для проверки отмените коментирование задачи в коде");*/

// Задача 1 --------------------------
/*let mass_1 = [12, 24, 434, 44];
let mass_2 = [12, 24, 434, 44];

function compare(arrA, arrB){
	let res1 = Array.isArray(arrA);
	let res2 = Array.isArray(arrB);
	if (!res1) {console.log("Массив 1 - не массив"); return };
	if (!res2) {console.log("Массив 2 - не массив");return };
	if (arrA.length == arrB.length) return "Длины массивов равны";  else return  "Длины массивов неравны";
}
let asa = compare(mass_1, mass_2)
console.log(asa);

// Задача 2 --------------------------
function range(begin, end, shag){
	let arr = [];
	if (shag == undefined) shag = 1;
	for (let i = begin; i <= end; i+=shag) arr.push(i);
	return arr;
}
console.log( range(2, 90,10));*/
// Задача 3 --------------------------
let student = {
	mame : "Вася",
	surname : "Васильев",
	age : 30,
	interests : [
		"JavaScript", 
		"html",
		"CSS",
		"Delphi"
	],
	studyPlace : "ИТМО" 
}
console.log(student);
function whoIs(object) {
	for (let key in object) console.log(key +": " + object[key]);
}
whoIs(student);
// Задача 4* ----------------------------------------------------
/*let word = []; 
let glasnye = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"];
let gl = glasnye.length-1;
let soGlasnye = ["б", "в", "г", "д", "ж", "з", "й", "к", "л", "м", "н", "п", "р", "с", "т", "ф", "х", "ц", "ч", "ш","щ"];
let sogl = soGlasnye.length-1;
function range(max, min) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

word.length = range(8, 3);
console.log(word.length);
if (range(2, 1)%2  == 0) word[0] = glasnye[range(gl, 0)]; else	word[0] = soGlasnye[range(sogl, 0)]; 
for (let i = 1; i < word.length; i++){
	if (soGlasnye.includes(word[i-1])) word[i] = glasnye[range(gl, 0)]; else word[i] = soGlasnye[range(sogl, 0)];
}
console.log(word);
let slovo = word.join("")
console.log(slovo);*/
