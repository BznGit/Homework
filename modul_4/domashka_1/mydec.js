
// Zadacha 1-----------------------------
function ass(){
    console.log('Функция выполнилась с задержкой в 2 секунды!')
};

function paused(func, int){
    let delay = int*1000;
    return  setTimeout(func, delay)
}
paused(ass, 2);

// Zadacha 1-----------------------------

function mas(){   
    return [1,2,3,4];
}

function check(func,...name){
    let mass=func();
    let obj={};
    for (let i=0; i<mass.length; i++)
        obj[name[i]]=mass[i];   
    return obj;
}
console.log(check(mas,'a','b', 'c', 'd')); 