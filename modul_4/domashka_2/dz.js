/*1*Генератор случайных паролей. Требуется реализовать генератор
(function*) случайных паролей указанной длины. В пароле можно 
использовать любые символы в верхнем и нижнем регистре. 
Например: password_generator(16), вернет случайный пароль 
длиной 16 символов.*/
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
function* generateSequence(min, max) {
     yield getRandomIntInclusive(min, max);
  }
 
 function passGen(range){
    let str = ''; 
    for (let i=0; i<Math.trunc(range/4)+1; i++){
        function* generateAlphaNum() {
            // 0..9
            yield* generateSequence(48, 57);
            // A..Z
            yield* generateSequence(65, 90);
            // a..z
            yield* generateSequence(97, 122);
            // 0..9
            yield* generateSequence(48, 57);
        }
        for(let code of generateAlphaNum()) {
            str += String.fromCharCode(code);
        }
    }
    
    let pass='';node dz.js
    for (let i=0; i<range; i++)
        pass+=str[i];
    return pass;
} 
console.log(passGen(5));
console.log(passGen(16));
console.log(passGen(21));
/*Работа с файлами. Файл "data.txt" заполнен случайными целыми числами, 
числа разделены одним пробелом.
Сформировать файл "out-1.txt" из элементов файла "data.txt", делящихся 
без остатка на 2. Сформировать файл "out-2.txt" из элементов файла "data.txt", 
возведенных в степень 3. Тестовый набор данных для тестирования можно 
скачать отсюда: https://yadi.sk/d/s7Gz7ypi3XCBXP 
Для записи текстовых файлов воспользуйтесь функцией 
writeFile описанной в документации: 
https://nodejs.org/dist/latest-v8.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback
или в русской версии: 
https://js-node.ru/site/article?id=23#fs_fs_writefile_file_data_options_callback */

const fs = require('fs');
let arr=[]; 
const writeStream = fs.createWriteStream('out-2.txt');
const writeStream_2 = fs.createWriteStream('out-1.txt');
fs.readFile('data.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('Ошибка чтения файла\n');
    } else {
        console.log(`Файл прочитан\n`);   
        arr = data.split(' ');
        arr.forEach(value=>{
            if (Number(value)%2==0) writeStream_2.write(`${value} `);
            value = String(Math.pow(Number(value),3));          
            writeStream.write(`${value} `);     
        });       
    }
    writeStream.end()
    writeStream_2.end()
});

/*3*. Необходимо реализовать шаблон позволяющий: 
- регистрировать события с использованием функции on(eventName, function);
- генерировать событие с помощью функции emit(eventName) и по наступлению события запускать функции обработчики.

Задача доделать код, чтобы он работал как ожидается:
/* eventsObj объект хранения в виде ключ (название события) / значение (массив 
функций обработчиков, привязанных к данному событию) 
*/
const eventsObj = {};

on('eat', stringData => {
    console.log('Первым: Я кушаю  ' + stringData + '.');
});

on('eat', stringData => {
    console.log('Вторым: Я кушаю  ' + stringData + '.');
});

setTimeout(() => {
    emit('eat', 'бутерброд');
    
}, 3000);

setTimeout(() => {
    emit('eat', 'мясо');
    
}, 2000);

setTimeout(() => {
    emit('eat', 'яблочко');
    
}, 500);

function on(eventName, callback) {
    //Инициализируем пустой массив обработчиков у регистрируемого события
    eventsObj[eventName] = eventsObj[eventName] || [];
    //Здесь нужно положить функцию обратного вызова в соответствующий массив
    //Здесь нужен ваш код
    eventsObj.eat.push(callback);      
}


function emit(eventName, stringData) {
    //Здесь необходимо запустить каждую функцию обработчик относящиеся к данному событию
    //Здесь нужен ваш код
    eventsObj[eventName].forEach((callback) => {
        return callback(stringData); 
    });
 
}
