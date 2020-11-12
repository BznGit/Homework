console.log('Homework!');
console.log("");

// Задача 1 -------------------------------------
console.log("Задача 1"); 
let Ssot = 10; // сотки
let shirina = 15, dlina= 25;  // метры 
let Sm2; // 1 сотка=100м2
Sm2 = Ssot*100;
let Sost = Sm2 - shirina*dlina; //остакток в м2
console.log("Площадь остатка равна: " + Sost + " m2");
console.log("");  

// Задача 2 -------------------------------------
console.log("Задача 2");
let S1dm2 = 15;  // 1dm2 = 100cm2
let S2sm2 = 600;
(S1dm2 * 100) < 600? console.log("Площадь равна " + (S2cm2 - S1dm2 * 100) +  " см2:"): console.log("Площадь равна " + (S1dm2 * 100 - S2sm2) +  " см2:");
console.log(""); 

// Задача 3 ------------------------------------
console.log("Задача 3");
let a = 6;
let b = 4;
let c = 3;
let min;
console.log("Ряд чисел: " + a +", " + b+", " + c);
a < b? min =a : min = b;
min < c? min = min : min = c;
console.log("Минимальное число равно: " + min);
console.log(""); 

// Задача 4 ------------------------------------
console.log("Задача 4");
let m = 10.5;
let n = 11.45;
let blijnee;
console.log("Ряд чисел: " + n +", " + m );
(m%10) < (n%10)? blijnee = m : blijnee = n;
console.log("Ближнее число к 10 равно: " + blijnee);
console.log(""); 

// Задача 5 ------------------------------------
console.log("Задача 5");
let A = [5, 0, 3];
let B = [1, 0, 3];
let C = [1, 3, 3];
console.log("A(" + A + ")");
console.log("B(" + B + ")");
console.log("C(" + C + ")");
let dlinaAB = ((B[0] - A[0])**2 + (B[1] - A[1])**2 + (B[2] - A[2])**2)**0.5;
let dlinaBC = ((B[0] - C[0])**2 + (B[1] - C[1])**2 + (B[2] - C[2])**2)**0.5;
let dlinaCA = ((C[0] - A[0])**2 + (C[1] - A[1])**2 + (C[2] - A[2])**2)**0.5;
console.log(dlinaAB);
console.log(dlinaBC);
console.log(dlinaCA);

(dlinaAB**2 + dlinaBC**2) == (dlinaCA**2) ? console.log("ABC - прямоугольный треугольный") :console.log("ABC - непрямоугольный треугольник");
		
