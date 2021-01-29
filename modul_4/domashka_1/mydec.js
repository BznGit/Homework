
// Zadacha 1-----------------------------
let mainF = function(){
    console.log('Функция выполнилась')
};

function paused(func){    
    return function(delay){ 
        setTimeout(func, delay*1000);        
    }  
}
mainF = paused(mainF);
mainF(3)

// Zadacha 2-----------------------------

let mas = function (){   
    return [1,2,3,4];
}

function return_object(func,...name){
    let mass=func();
    let obj={};
    if (Array.isArray(mass)){
        return function(){       
            for (let i=0; i<mass.length; i++)
                    obj[name[i]]=mass[i];   
            return obj;
        }
    } else return func() 
}

let r = return_object(mas, 'q','w','e', 'r')
console.log(r());



