document.addEventListener("DOMContentLoaded", ready);
function ready(){
	console.log("Script is ready!");
	// Задача 1 (проверка)-----------------------------
	let ass = [1,2];
	console.log(myArr.average(ass));
	// Задача 4 ---------------------------------------
	let razmer = prompt("Ведите размерность игрового поля:");
	let bomby  =prompt("Ведите сложность (1-10):");
	//let razmer = 4;
	bomby = bomby/10;
	let bombCount = Math.trunc(razmer*razmer * bomby);
	function game(n){
	
		let div = document.createElement("div");
		div.style.display = "flex";
		div.style.marginLeft = "auto"
		div.style.marginRight = "auto";
		(n < 10)? div.style.width = (200*n) + 
		"px" : div.style.width = (100*n) + "px" ;
		
		
		console.log(bombCount); 
		let arrBomb = [];
		arrBomb.length = n*n;
		for (k = 0; k < arrBomb.length ; k++) arrBomb[k] = 0;
		console.log(arrBomb); 
		for (k = 0; k < bombCount ; k++){
			let s = Math.floor(Math.random() * (n*n - 1 + 1)) + 1;
			arrBomb[s] = 1;
		}
		console.log(arrBomb); 


		let table = document.createElement("table");
		
		let caption = document.createElement("caption");
		caption.style.textAlign = "center";
		caption.style.fontSize = "30px";
		caption.style.color = "red";
		caption.style.fontFamily = "Tahoma";

		let countBob = 0;
		let b = 0;
		for (let i =0; i < n; i++){
			let tr = document.createElement("tr");
			table.appendChild(tr);	
			for (let j = 0; j < n; j++){
				//let bombCount = Math.floor(Math.random() * (n - 1 + 1)) + 1;
				
				let td = document.createElement("td");
				td.style.backgroundColor = "lightblue";
				td.style.textAlign = "center";
				td.style.color = "green";
				
				if (n < 10) {
					td.style.height = "200px";
					td.style.width = "200px"; 				
				} else {
					td.style.height = "100px";
					td.style.width = "100px"; 
				}
				if (arrBomb[b] == 1) {
					countBob++
					let img = document.createElement("img");
					img.src = "./bomb.png";
					img.style.width = "50px";
					img.style.display = "none"
					td.appendChild(img);		
				}
				td.addEventListener("click", onClick, true);
				tr.appendChild(td);
				b++;
			}
		}		
	
		caption.innerText = "САПЕР\n" + "всего бомб: " + (countBob) + " шт.";
		table.appendChild(caption);
		div.appendChild(table)

		document.body.append(div);
	};
	let count = 0;
	let explosion = false; 
	function onClick(e){
		console.log(count);
		if (explosion == true) return;
		let elem = e.target;
		count++ ;
		elem.style.backgroundColor = "white";
		elem.style.border = "1px solid green";
		let img = elem.childNodes;
		
		if (img.length == 1) {
			img[0].style.display = "block";
			img[0].style.marginLeft = "auto";
			img[0].style.marginRight = "auto";
			elem.style.border = "1px solid red";
			explosion = true; 
			let botton = document.createElement("div");
			let div = document.getElementsByTagName("div");
			botton.style.height = "50px";
			botton.style.width = "300px"
			botton.style.marginLeft = "auto";
			botton.style.marginRight = "auto";
			botton.style.marginTop = "20px";
			botton.style.backgroundColor = "lightgreen";
			botton.style.textAlign = "center";
			botton.style.fontFamily = "tahoma";
			botton.style.fontSize = "20px"
			botton.style.paddingTop = "30px";
			botton.addEventListener("click", allBobs);
		
			botton.innerText = "Показать все бомбы";
			div[0].appendChild(botton);
			document.body.append(botton);
		};

		function allBobs(e){
			elem = e.target;
			elem.style.backgroundColor = "rgb(240, 93, 93)";
			let allImg = document.querySelectorAll("img");
			console.log(allImg);
			for (let i =0; i < allImg.length; i++){
				allImg[i].style.display = "block";
				allImg[i].style.marginLeft = "auto";
				allImg[i].style.marginRight = "auto";
				
			}
		}
	}
	game(razmer, bomby); 

	//Задача 3 --------------------------------------------------------
	
	
	
	let line1 = {
		x:[],
		y:[],
		type:'scatter'
	};

	function calcY(x){
		if(x >= 1) {
			return 5/x;
		} else {
			return x*x - 4*x;
		}
	}

	for(let i = -5; i < 5; i=i+0.01){
		line1.x.push(i);
		line1.y.push(calcY(i));
	}

	let layout = {
		title: 'График',
		xaxis: {
			title: 'X',
			showgrid: true,
			zeroline: true,
			
		},
		yaxis: {
			title: 'Y',
			showline: false
		}
	}

	Plotly.newPlot('graph', [line1], layout);
}


// конец скрипта ---------------------------------------

