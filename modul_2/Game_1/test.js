
let conteiner = document.getElementById("container");
let content = document.getElementById("content");
let razmer = 4;
let countClick = false;
let count = 0;
let arr = new Array(razmer);
let colors = ["white","red", "yellow", "orange", "purple", "green", "blue", ];
let i1, j1, i2, j2;
let arrElem1, arrElem2;
let schet = 0;
let disp = document.getElementById("schet");
disp.innerText = "Счет: " + schet;

function createBoard() {
    for (let i = 0; i < razmer; i++) {
        arr[i] = new Array(razmer);
        let tr = document.createElement("div");
        content.appendChild(tr);
        tr.classList.add("tr");
        for (let j = 0; j < razmer; j++) {
            let td = document.createElement("div");
            tr.appendChild(td);
            td.classList.add("td");
            td.style.userSelect = "none"
            td.addEventListener("mousedown", onOneClick);
            td.addEventListener("mouseover", hover);
            if (razmer < 6 ) {
                td.style.height = "150px";
                td.style.width = "150px";
            };

            let randomColor = Math.floor(Math.random() * ((colors.length-1) - 1 + 1)) + 1;
            td.style.backgroundColor = colors[randomColor];
            td.style.borderColor = colors[randomColor];

            let x, y;
            if (i == 0) x = "0"; else x = i+'';
            if (j == 0) y = "0"; else y = j+''; 
            td.setAttribute("id", x + y);
            //Генерация игрового массива -------------------
            arr[i][j] = randomColor;
        }
    }
   if (proverka()){
       deletBoard();
       createBoard();
   } ;
}
function onOneClick(e){
console.log("dwwwdwd");
    let prav = false;
    let elem = e.target;
    countClick = true;
    i11 = Number(elem.id[0]);
    j11 = Number(elem.id[1]);
    console.log(i11, j11);
   
    if (arrElem1 == 0) return;
    elem.classList.add("choose");
     
    let elem1 = elem.cloneNode(true);
    elem1.style.position = 'absolute'; 
    moveAt(e);
    elem1.style.zIndex = 1000;
    
    function moveAt(e) {
        elem1.style.left = e.pageX - elem.offsetWidth / 2 + 'px';
        elem1.style.top = e.pageY - elem.offsetHeight / 2 + 'px';
    }
    document.body.appendChild(elem1);
    document.onmousemove = function (e) {
        moveAt(e);
    }
    elem1.onmouseup = function () {
        console.log("54546545646")
        document.onmousemove = null;
        elem1.onmouseup = null;
        document.body.removeChild(elem1);
        elem.classList.remove("choose");
        tclick = false;
      
    }
};

function hover(e){
    let elemt = e.target;
    if (countClick){
        i22 = Number(elemt.id[0]);
        j22 = Number(elemt.id[1]);
        console.log(i11, j11);
        console.log("v");
        console.log(i22, j22);
        console.log(arr[i22][j22]);
        if (arr[i22][j22] == 0) return;
        if (i22 == (i11-1) && j22 == j11) zamena(); 
        if (i22 == (i11+1) && j22 == j11) zamena(); 
        if (j22 == (j11-1) && i22 == i11) zamena(); 
        if (j22 == (j11+1) && i22 == i11) zamena();
        
        function zamena(){ 
            arrElem1 = arr[i11][j11];; 
            arrElem2 = arr[i22][j22];
            arr[i11][j11] = arrElem2;
            arr[i22][j22] = arrElem1;
            prav = true;
            console.log(arrElem1);
            console.log(arrElem2);
            console.log("успех");
            repaintBoard();
            proverka(); 
            
        } 
    }; 
    countClick = false;
 };


function repaintBoard(){ 
    for (let i = 0; i < razmer; i++) {
        for (let j = 0; j < razmer; j++) {
            let td = document.getElementById("" + i + j);
            td.style.backgroundColor = colors[arr[i][j]];
            
            td.style.borderColor = colors[arr[i][j]];
            td.classList.remove("choose");
        }
    }
};
function deletBoard(){
    start =false;
    schet = 0;
    let board =document.getElementById("content");
    let tr = document.getElementsByClassName("tr")
    disp.innerText = "Счет: " + schet;
    let count = tr.length;
    for (let i = 0; i < count; i++)
        board.removeChild(tr[0]);
}


function proverka(){
    console.log("proverka");
    let combi = false;
    // по вертикали
    for (let i = 0; i < razmer; i++) {
        for (let j = 2; j < razmer; j++) {
            if (arr[i][j] == arr[i][j-1] && arr[i][j] == arr[i][j-2]) {
                arr[i][j] = 0;
                arr[i][j-1] = 0;
                arr[i][j-2] = 0;
               animate(i, j, 0);
               combi = true;   
            }
        }
    };
    // по горизонтали
   for (let i = 2; i < razmer; i++) {
        for (let j = 0; j < razmer; j++) {
            if (arr[i][j] == arr[i-1][j] && arr[i][j] == arr[i-2][j]) {
                animate(i,j,1);
                arr[i][j] = 0;
                arr[i-1][j] = 0;
                arr[i-2][j]= 0;
                animate(i, j, 1); 
                combi = true;
            }
        }
    } 
return combi;
};

function animate(i, j, v){
    let scl = 1;
    if (v == 0) {
        let td1 = document.getElementById("" + i + j);
        let td2 = document.getElementById("" + i + (j-1));
        let td3 = document.getElementById("" + i + (j-2));
        td1.classList.add("active");
        td2.classList.add("active");
        td3.classList.add("active");
        td1.addEventListener("transitionend", dopol, {once: true})
    }; 
    if (v == 1) {
        let td1 = document.getElementById("" + i + j);
        let td2 = document.getElementById("" + (i-1) + j);
        let td3 = document.getElementById("" + (i-2) + j);
        td1.classList.add("active");
        td2.classList.add("active");
        td3.classList.add("active");
        td1.addEventListener("transitionend", dopol, {once: true})
    };
};

function dopol(){
        schet++;
        disp.innerText = "Счет: " + schet;
    for (let i = 0; i < razmer; i++) {
        for (let j = 0; j < razmer; j++) {
            if (arr[i][j] == 0){
                arr[i].unshift(arr[i][j]);
                let k=j+1;
                if (j != (arr[i].length-2)) {
                    for(k;k < arr[i].length-1; k++){
                        arr[i][k] = arr[i][k+1];
                         
                    }
                }
               arr[i].splice(arr[i].length-1, 1);
                let td = document.getElementById("" + i + j);
                td.classList.remove("active");
            }
        }
    } 


  for (let i = 0; i < razmer; i++) {
        for (let j = 0; j < razmer; j++) {
            if (arr[i][j] == 0){
                arr[i][j] = Math.floor(Math.random() * ((colors.length-1) - 1 + 1)) + 1;
                let td = document.getElementById("" + i + j);
                td.classList.remove("active");
            }
        }
    } 
    if (proverka()) dopol();
 
    repaintBoard();
}



let select =document.getElementById('select'); 
razmer = select.value;
createBoard();
select.addEventListener("change", selection);
function selection(e){
   razmer = select.value;
    deletBoard();
    createBoard(); 
        
}


 



