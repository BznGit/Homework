console.log('Homework 6');
/*alert(" Для проверки отмените коментирование задачи в коде");*/
// Задача 1 ----------------------------------------------------
/*let a = {
	name: 'static',
	count: 0
	};
function foo(object, key, range) {
	let  b = [];
	for (i = 0;  i < range; i++)  {
		b[i] = {};
		for (let inKey in object){
			b[i][inKey] = object[inKey]
		}	
		b[i][key] = i; 
	}
	return b;
}
console.log(foo(a, 'count', 10));*/
// Задача 2 ----------------------------------------------------
/*function randRange() {
	let arr = [];
	let i = 1;
	let max = 100;
	let min = 1;
	 
	return function() {
		let a = 0;
		do {
		 a = Math.floor(Math.random() * (max - min + 1)) + min;
		} while ((arr.includes(a)))  
		arr.push(a);
		i++; 
		return a; // есть доступ к внешней переменной "count"
	};
  }
// прроерка -----------------------------------
 let rnd = randRange();
 let asd = [];
 for (let i = 0; i < 98; i++) {
	 asd[i] = rnd();
}
asd.sort((a, b)=>a-b);
console.log ("Проверка значений: " + asd);*/

// Задача 4 ----------------------------------------
/*let student = {
	name : "Иван",
	surname: "Смиронов",
	age: 25,
	hobby: ["футбол", "кино", "музыка", "аниме"],
	study: "ИТМО",
	getStudent: function() {
		return a = ("Студент " + this.name + " " + this.surname + ". Возраст: " + this.age +  ". Интересуется: " + this.hobby.join(", ") + ". Учится в " + this.study + ".");
	}
}
console.log(student.getStudent());  */

// Задача 4 ----------------------------------------
/*function factorial(n) {
	if (n == 0) return 1; else  return n*factorial(n - 1);
}
console.log(factorial(2));*/

// Задача 5 ----------------------------------------
let arr = [ { 'price' : 10, 'count' : 2 },
			{ 'price' : 5,  'count' : 5 }, 
			{ 'price' : 8,  'count' : 5 },
			{ 'price' : 12, 'count' : 4 },
			{ 'price' : 8,  'count' : 4 },];

// сортировка по "price" -------------
arr.sort(function(a, b){return a.price-b.price})
console.log(arr);
let asd = arr;
// сортировка по "count" -------------
for (i in arr){
	asd[i] = arr[i];
}
asd.sort(function(a, b){return a.count-b.count})
console.log(asd);

