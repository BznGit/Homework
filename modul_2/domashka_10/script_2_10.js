console.log('Homework 10');
// Задача 1 ------------------------------------------
	// Шаблон товара//
/*function Good(){
	this.name;
	this.price;
};
	// Шаблон корзина//
function Basket(){
	let goods = [];
	let countGoods;

	this.addGoods = function(position){
		goods.push(position);
	};
	this.getSum = function(){
		let sum = 0;
		for(let i = 0; i < goods.length; i++)
			sum += goods[i].price ;
		return sum;
	}
	this.getCount = function(){
		countGoods =  goods.length;
		return goods;
	}
	
};
	// проверка //
let good1 = new Good();
good1.name = "dboll";
good1.price = 12121;
console.log(good1);

let good2 = new Good();
good2.name = "qass";
good2.price = 10000;
console.log(good2);

let bk = new Basket();
bk.addGoods(good1);
bk.addGoods(good2);
console.log(bk.getSum());
console.log(bk.getCount());*/

// Задача 2 ------------------------------------------
	// Шаблон "Человек" //
/*function Humen(){
	this.name = "Иван";
	this.age = 25;
	this.sex = "мужской";
	this.interests = [
		"музыка",
		"спорт",
		"программирование",
	];
	this.toString = function(){
		let info;
		return info = "Человек: " + this.name + ". Возраст: " + this.age + " лет. Пол: "
			+ this.sex + " Интересы: " + this.interests.join(", ") + ".";  
		 
	};
};
	// Шаблон "Студент" //
function Student(){
	Humen.call(this);
	this.study = "ИТМО";
	this.toString = function(){
		let info;
		return info = "Человек: " + this.name + ". Возраст: " + this.age + " лет. Пол: "
			+ this.sex + " Интересы: " + this.interests.join(", ") +". Учится в " + this.study + ".";  
	}
}
	// проверка //
let men = new Humen();
console.log(men);
console.log(men.toString());

let stud = new Student();
console.log(stud);
console.log(stud.toString());*/

// Задача 3 ------------------------------------------	
function User(imya){
	this.name = imya;
	this.age = 25;
	this.toString = function(){
		return this.name;		
	}
};

User.anonim = function(imya){
	let user = new User();
	if (imya == undefined || imya == "") user.name = "Аноним";
	return user;
}

User.new = function(men){
	let user = new User();
	user.name = men.name;
	user.age = men.age;
	return user;
}

let user = new User("Алекс", 25);
console.log(user.name);

let user1 = new User.anonim("");
console.log(user1.name);

let user2 = new User.new({name: "Паша", age: 16});
console.log(user2.name);

// Задача 4 ------------------------------------------
			/*1*/
/*Свойство только для чтения sessionStorageобращается к Storageобъекту сеанса для текущего источника . sessionStorage 
похож на localStorage; разница в том, что, хотя localStorageсрок хранения данных не истекает, данные в нем sessionStorageочищаются 
при завершении сеанса страницы .
	- Сеанс страницы длится, пока открыт браузер, и сохраняется после перезагрузки и восстановления страницы.
	- Открытие страницы в новой вкладке или окне создает новый сеанс со значением контекста просмотра верхнего уровня, который отличается от того, как работают файлы cookie сеанса.
	- Открытие нескольких вкладок / окон с одним и тем же URL-адресом создает sessionStorageдля каждой вкладки / окна.
	- Закрытие вкладки / окна завершает сеанс и очищает объекты внутри sessionStorage.

*/
//основнй пример ----------------
// Save data to sessionStorage
sessionStorage.setItem('key', 'value');

// Get saved data from sessionStorage
let data = sessionStorage.getItem('key');
console.log(data);
// Remove saved data from sessionStorage
sessionStorage.removeItem('key');

// Remove all saved data from sessionStorage
sessionStorage.clear();


// второй пример ----------------
//Сохранение текста между обновлениями
//В следующем примере автоматически сохраняется содержимое текстового поля, и,
// если браузер обновляется, восстанавливается содержимое текстового поля, так что запись не теряется.

// Get the text field that we're going to track
/*let field = document.getElementById("field");
 console.log(field);
// See if we have an autosave value
// (this will only happen if the page is accidentally refreshed)
if (sessionStorage.getItem("autosave")) {
  // Restore the contents of the text field
  field.value = sessionStorage.getItem("autosave");
};
 
//Listen for changes in the text field
field.addEventListener("change", function(){
  // And save the results into the session storage object
sessionStorage.setItem("autosave", field.value);
});*/


			/*2*/
/*Свойство localStorage позволяет получить доступ к Storage объекту. localStorage аналогично свойству sessionStorage.
 Разница только в том, что свойство sessionStorage хранит данные в течение сеанса (до закрытия браузера), в отличие от данных,
   находящихся в свойстве localStorage, которые не имеют ограничений по времени хранения и могут быть удалены только с помощью JavaScript.
   */
  // Пример ---------------------
//Следующий код показывает пример доступа к локальному объекту Storage для текущего домена и добавляет данные в него с помощью
 /* localStorage.setItem('myCat', 'Tom');
//Считывать данные из localStorage для определенного ключа, можно следующим образом:
let cat = localStorage.getItem('myCat');
console.log(cat);

//Удалять данные можно так:
localStorage.removeItem('myCat'); // вернёт undefined

//Для удаления всех записей, то есть полной очистки localStorage, используйте:
localStorage.clear();*/



			/*3*/
//Window.find(); //Метод находит строки в окне.

//Синтаксис
//window.find(aString, aCaseSensitive, aBackwards, aWrapAround,
 //           aWholeWord, aSearchInFrames, aShowDialog);
/*aString
Текстовая строка, которую нужно искать.
aCaseSensitive
Boolean. Если trueзадает поиск с учетом регистра.
aBackwards
Boolean. Если trueзадает обратный поиск.
aWrapAround
Boolean. Если true, задает циклический поиск.
aWholeWord Нереализованный
Boolean. Если true, задает поиск по всему слову. Это не реализовано; см. ошибку 481513 .
aSearchInFrames
Boolean. Если true, определяет поиск по кадрам.
Возврат
trueесли строка найдена; в противном случае false.*/
// Пример --------------


findString = function findText(text) {
	alert("String \x22" + text + "\x22 found? " + window.find(text));}

	/*4*/
//selection = window.getSelection();
//Метод возвращает объект Selection, представленный в виде диапазона текста, который пользователь выделил на странице.
function foo() {
		var selObj = window.getSelection(); 
		alert(selObj);
		var selRange = selObj.getRangeAt(0);
		// вернет диапазон Range
	};

	
	/*5*/
//Window.crypto дает доступ к интерфейсу Crypto. Этот интерфейс предоставляет веб-странице доступ к встроенным в браузер возможностям криптографии.
// Интерфейс Crypto представляет базовые криптографические функции, доступные в общеупотребительном контексте. Он позволяет получить доступ к криптографически 
//сильному генеретору случайных чисел и к криптографическим примитивам.
//Объект с этим интерфейсом доступен в Web-контексте через свойство Window.crypto.

//тот интерфейс реализует свойства, объявленные в RandomSource.
//озволяет вам получать криптографически стойкие числа. Массив, переданный как параметр, заполняется случайными числами (случайными в криптографическом смысле).
//Пример
var array = new Uint32Array(10);
window.crypto.getRandomValues(array);

console.log("Ваше счастливое число:");
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
	/*6*/ 
//Window.history является свойством только для чтения, ссылающимся на объект History, который предоставляет интерфейс для манипулирования историей сессии 
//браузера (страницы, посещенные в текущей вкладке или фрейме, который был загружен на текущей странице).
//Смотрите Управление историей браузера для примеров и подробностей. В частности, та статья объясняет особенности 
//безопасности методов pushState() и replaceState(), о которых вы должны быть в курсе перед их использованием.history.back();     // эквивалент клика по кнопке назад

history.back();// эквивалент клика по кнопке назад
history.go(-1);     //// эквивалент history.back();

	/*7*/
//window.frame() - Возвращает само окно, являющееся объектом в виде массива, распечатывая элементы текущего окна.
//Пример -------
var frames = window.frames;
console.log(frames.length);
	
	/*8*/
// Window.parent - Ссылка на родительский объект window или родительский iframe.
//Если у объекта window нет родителя, то свойство parent данного объекта будет ссылаться на сам объект.
//Если window загружен внутри <iframe>, <object>, или <frame>, то его parent - это объект window с элементом содержащим данный window.
if (window.parent = window.top) {
	alert('мы находимся неглубже чем один уровень');
  }

	/*9*/
 // window.top - озвращает ссылку на корневое окно в иерархии окон.
//  Если свойство window.parent возвращает ссылку именно на родительское окно текущего окна,
//  то  window.top возвращает ссылку на самое верхнее окно в текущей иерархии окон.
// Это свойство полезно, когда вы имеете дело с окном (фреймом), которое находится в подкадре родителя или родителей,
// и вы хотите получить ссылку на верхний уровень всего набора окон.
// пример -------------------
var topWindow = window.top;
console.log(topWindow.visualViewport.width);

	/*10*/
//Свойство screen объекта Window возвращает ссылку на экран обьекта, который содержит информацию об экране пользователя.
 //Похожий по смыслу, объект screen, который имплементирует интерфейс  Screen представляет собой совокупность свойств экрана пользователя.
 console.log(window.screen.orientation.type);

 //Задача 5* -------------------------------------------
 		// Учитель
function Teacher(imya, vozrast, curs){
	let name = imya;
	let age = vozrast;
	let disciplina = curs;		
	let students = new Array();
	this.setName = function(imya){
		name = imya;
	}
	this.setAge = function(vozrast){
		age = avozrast;
	}
	this.setStudent = function(student){
		students.push(student);
	};
	this.setDisciplina = function(curs){
		Disciplina = curs;
	};
	this.getStudenByName = function(name){
		for(let i = 0; students.length; i++){
			if (students[i].name == name) return  students[i]
		}
	};
	this.getStudensCount = function(){
		return  students.length;
	};
};
		// Студент
function Student(imya, vozrast, curs){
	Teacher.call(imya, vozrast, curs);

		
};

let ass = new Teacher("Anna", 36, "ТОЭ");
console.log(ass);