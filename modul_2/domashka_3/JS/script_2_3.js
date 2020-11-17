console.log('Homework 2');
/*alert(" Для проверки отмените коментирование задачи в коде");

// Задача 1 ----------------------------
/*console.log("Задача 1");
let A = [12, 4, 3, 10, 1, 20];
let B = [-3, -7, -100, -33];
console.log(A.concat(B));
console.log(B.concat(A));
console.log("");*/

// Задача 2 ----------------------------
/*console.log("Задача 2");
let area = [ 1, null, 1, 1, 0, 1, 1, null, 1 ];
let mainStartDiv = "<div style='display: flex; flex-direction: column; margin-left: auto; margin-right: auto; width: 1249px'>";
let rowStartDiv = "<div style='display: flex; flex-direction: row; '>";
let imgstartDiv = "<div style='display: flex; flex-direction: row; border: 1px solid black'>";
let imgX = "<img src ='./X.png' >";
let imgO = "<img src ='./O.png' >";
let imgEmpty = "<img src ='./empty.png' >"
let endDiv = "</div>";
let len = area.length-1;
let count = 0;
let body = "";

for (let i = 1; i<=3; i++){
	body+=rowStartDiv; 
	for (let j = 1; j<=3; j++) {
		body+=imgstartDiv + ((area[count] == 1)?  imgX : "") + ((area[count] == 0)? imgO : "") + ((area[count] == null)? imgEmpty : "") + endDiv;
		count++;
	}
	body+=endDiv;
}
console.log(body);
document.write(mainStartDiv + body + endDiv);*/

// Задача 3 ----------------------------
/*let area = [12,4,3,10,1,20];
let len = area.length-1;
let min = null, max = null;
for (let i = 0; i<=len; i++) {
	(area[i] < area[i+1])? min = area[i] : max = area[i];
}
alert( area + "\n" + "min = " + min + ", max = " +   max);*/

// Задача 4* ----------------------------
/*let len = 999999;
let bilet=[];
let mass=[];
let count = 0;
let A = null, B = null;
for (let i = 1; i<=len; i++) {
	if (i < 10) bilet[i-1] = "00000" + i;
	if (i < 100 && i >= 10) bilet[i-1] = "0000" + i;
	if (i < 1000 && i >= 100) bilet[i-1] = "000" + i;	
	if (i < 10000 && i >= 1000) bilet[i-1] = "00" + i;
	if (i < 100000 && i >= 10000) bilet[i-1] = "0" + i;
	if (i < 1000000 && i >= 100000) bilet[i-1] = "" + i;
	mass = bilet[i-1].split("");
	A = parseInt(mass[0]) + parseInt(mass[1]) + parseInt(mass[2]);
	B = parseInt(mass[3])+ parseInt(mass[4])+parseInt(mass[5]);
	if (A==B) count++;
	
}

alert("Число счастливых билетиков\n в рулоне от 000001 до 999999 равно: " + count);*/








