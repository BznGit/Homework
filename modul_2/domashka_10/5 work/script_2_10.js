console.log('Homework 10');
 //Задача 5* -------------------------------------------
////////////- УЧИТЕЛЬ -////////////////////////////		 
function Teacher(imya, vozrast){
	let name = imya;
	let age = vozrast;
	let discipline = null;
	let studentes = new Array();
	// Имя ---------------------
	this.setName = function(imya){
		name = imya;
	};
	this.getName = function(){
		return name;
	};
	// Возраст ---------------------
	this.setAge = function(vozrast){
		age = avozrast;
	};
	this.getAge = function(){
		return age;
	};
	// Дисциплина ---------------------
	this.setDiscipline = function(curs){
		discipline = curs;
	};
	// Получение дисциплины -----------------
	this.getDiscipline = function(){
		if (discipline == null) return "нет у него дисциплин!"; else 
		return discipline.toString();
	}.bind(Student);
	//  Добавление студента ---------------
	this.setStudent = function(student){
		studentes.push(student);
	};
	//  Устаговка дисциплины ---------------
	this.setDiscipline = function(curs){
		discipline = curs;
	};

	 // Поиск студентo по имени -----------------------
	this.getStudentByName = function(name){
		let ucheniki = "";
		let count = 1;
		let nalichie = false;
		for(let i = 0; i < studentes.length; i++){
			if (studentes[i].getName() == name) {
				ucheniki+= count + ". " + studentes[i].toSting() + "\n";
				count++
				nalichie = true;
			}
		}
		if (!nalichie) return `Ученика по имени "` + name + `" у "` + this.getName() + `" нет!`; else
		return ucheniki;
	};
	// Количество студентов ------------------
	this.getStudentesCount = function(){
		return  studentes.length;
	};
	this.toSting = function(){
		// Получить учителя -------------------
		let opisanie = "\nИмя: " + this.getName() + "\n" +
			"Возраст: " + this.getAge() + "\n" +
			"Дисциплина: " + this.getDiscipline();
			return opisanie;
		};


};
////////////- СТУДЕНТ -////////////////////////////	
function Student(imya, vozrast){
	Teacher.call(this, imya, vozrast);
	delete this.getStudensCount;
	delete this.setStudent;
	delete this.getStudenByName;
	delete this.getStudentesCount;
	delete this.getStudentes;
	let curs = null;
	let teacher = null;
	this.toString = function(){
		// Получить студента -------------------
		let opisanie = "Студент:\nИмя: " + this.getName() + "\n" +
			"Возраст: " + this.getAge() + "\n" +
			"Дисциплина: " + this.getDiscipline();
		return opisanie;
		};
	this.setTeacher = function(uchitel){
		teacher = uchitel;
	}
	this.getTeacher = function(){
		if (teacher == null) return "нет у него учителя!"; else 
			return teacher.toSting();
	}
	
};
////////////- ДИСЦИПЛИНА -////////////////////////////	
function Discipline(imya, v){
	Student.call(this, imya, v);
	let volume = v;
	this.toString = function(){
		// Получить студента -------------------
		let opisanie =  this.getName() + "\n" +
			"Объем: " + volume + " ак.ч."; 
		return opisanie//;
		};
}
// Проверка ---------------------------------
let student = new Student("Pavel", 18);
let prepod = new Teacher("Anna", 36);
let kypc = new Discipline("Физика", 180);
console.log("------------------------------------");

prepod.setDiscipline(kypc);
student.setTeacher(prepod);
student.setDiscipline(kypc);
console.log(prepod.getDiscipline());
prepod.setStudent(student);
console.log(prepod.getStudentByName("Pavel"));