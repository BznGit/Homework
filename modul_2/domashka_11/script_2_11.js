console.log('Homework 11');
// Задача 1 ------------------------------------------
	// Шаблон товара//
/*function Good(){
	this.name;
	this.price;
};
	// Шаблон корзина//
function Basket(){
	this._goods = [];
	this.countGoods;
};
Basket.prototype.addGoods = function(position){
	this._goods.push(position);
};
Basket.prototype.getSum = function(){
		let sum = 0;
		for(let i = 0; i < this._goods.length; i++)
			sum += this._goods[i].price ;
		return sum;
}
Basket.prototype.getCount = function(){
		countGoods =  this._goods.length;
		return countGoods;
}

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
function Humen(){
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
Humen.prototype.getName = function(){
	return this.name;
} 

	// Шаблон "Студент" //
function Student(){
	Humen.call(this);
	this.study = "ИТМО";
	this.toString = function(){
		let info;
		return info = "Студент: " + this.name + ". Возраст: " + this.age + " лет. Пол: "
			+ this.sex + " Интересы: " + this.interests.join(", ") +". Учится в " + this.study + ".";  
	}
};
Student.prototype.__proto__= Humen.prototype;

	// проверка //
let men = new Humen();
console.log(men);
console.log(men.toString());
console.log(men.getName());


let stud = new Student();
console.log(stud);
console.log(stud.toString());
console.log(stud.getName());