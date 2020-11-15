// Задача 1 ----------------------------
console.log("Задача 1");
let A = [12, 4, 3, 10, 1, 20];
let B = [-3, -7, -100, -33];
console.log(A.concat(B));
console.log(B.concat(A));
console.log("");
// Задача 2 ----------------------------
console.log("Задача 2");
let area = [ null, null, null, null, null, null, null, null, null ];
let mainStartDiv = "<div style='display: flex; flex-direction: column; margin-left: auto; margin-right: auto; width: 1249px'>";
let rowStartDiv = "<div style='display: flex; flex-direction: row; '>";
let imgstartDiv = "<div style='display: flex; flex-direction: row; border: 1px solid black'>";
let imgX = "<img src ='./X.png' >";
let imgO = "<img src ='./O.png' >";
let imgEmpty = "<img src ='./empty.png' >"
let endDiv = "</div>";
let len = area.length-1;
let count = 0;
document.write(mainStartDiv +
(for (let i = 1; i<=3; i++){
	rowStartDiv + 
	(for (let j = 1; j<=3; i++) {
		imgstartDiv +
			(if (area[count] == 1) imgX
			if (area[count] == 0) imgO
			if (area[count] == null) imgO
		count++;
	+endDiv}
	+endDiv}
+ endDiv);