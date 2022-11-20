// 1. ФУНКЦИИ
// этмо скрипт 6 - появился в 2015 году.

//function Expression - создаем функцию и вкладываем ее в переменную
// const greet2 = function greet2(name2) {
//     console.log('Привет 2 - ', name2)
// }
//  greet('Лена') //Привет - Лена
// greet2('Лена') //Привет - Лена - только ниже чем инициализация функции должна быть


//function Declaration - можно обращаться к ней, когда захотим. Можно вызвать выше чем находится функция
// function greet(name2){
//     console.log('Привет -',name2)
// }

// console.log(typeof greet) //function - хотя в JS нет такого типа данных - это хак.
//2,46
// console.dir(greet) //видим что greet - это объект, т.е функции - на самом деле объекты
//__proto__: ƒ () - прототип классов - __proto__: Object 
//JS - язык прототипированный. Все строится на прототипах.

//2. АНОНИМНЫЕ ФУНКЦИИ
//Вызов функции не в данный момент - а через время- setInterval и setTimeout
// let counter  = 0
// setInterval(function(){
//     console.log(++counter)
// },1000) // 1000 мс = 1 сек.
//через каждую секунду увеличивает интервал на 1.
//1
//2
//3 и т.д
//Изменим функцию что бы интервал прервался при значении = 5
// let counter  = 0
// const interval = setInterval(function(){
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// },1000)
//есть еще функция setTimeout - она через определденныфй период времени вызывает Функцию 1 раз.
//..будет 1 в логе и все.

//3. СТРЕЛОЧНЫЕ ФУНКЦИИ
//Посявился в ЭкноСкрипт 6 и улучшает работу с функциями.
// greet('Лена') 
// function greet(name2){
//     console.log('Привет -',name2) //Привет - Лена
// }

// const arrow = (name2, name3) => { //если несколько параметров - то перечисляем их в скобках. Если параметров нет - круглые скобки по любому ставим
//     console.log('Привет3 -',name2, name3) //Привет3 - Rasul
// }
// arrow('Rasul')

// //можно так сократить если 1 параметр и 1 строка кода внутри
// const arrow2 = name2 => console.log('Привет4 - ', name2) //Привет4 -  Rasdag
// arrow2('Rasdag')

// // const pow2 = num => {
// //     return num ** 2 //Можно так же возвести во 2 степень, не обязательно черех Math.pow
// // }
// const pow2 = num => num ** 2 // в одну строчку закинули текст выше. return - автоматом понимает что там есть
// console.log(pow2(5)) //25 - 5 в степени 2

//4.ПАРАМЕТРЫ ПО УМОЛЧАНИЮ
// const sum = (a, b) => a + b
// //console.log(sum(51, 1)) //52
// console.log(sum(51)) //NaN

//что бы не было NaN - можно передать параметр по умолчанию b=1
// const sum = (a, b=1) => a + b
// console.log(sum(51)) //52
// console.log(sum(51,3)) //54 - если задать данные - то параметр по умолчанию игнорируется.

//  const sum = (a = 10, b = a * 2) => a + b
//  console.log(sum()) // 30. Если параметры не указали по по умолчанию цифры посчитаются. b = 10 * 2. и 10+20.

//  function sumAll(...all) { //функция принимающая в себя неограниченное количество чисел
//     console.log(all) //возвращает Массив  [1, 2, 3, 4, 5]
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
//  }
 //sumAll(1, 2, 3, 4, 5) 
// const res = sumAll(1, 2, 3, 4, 5, 6, 7) 
// console.log(res) // 28. Просуммировала все строки

//5. ЗАМЫКАНИЕ
// из одной функции возвращаем другую функцию.
function createMember(name4) {
    return function(lastName) {
        console.log(name4 + lastName)
    }
}
const logWithLastName = createMember('Rasul')
//console.log(logWithLastName) // ƒ (lastName) { //возвращает функцию
                             // console.log(name4 + lastName)
                              //}
console.log(logWithLastName('Tazhutdinov')) // RasulTazhutdinov в 96 строке выйдет. В 103 выйдет - undefined
console.log(logWithLastName('Ivanow')) // RasulIvanow в 96 строке выйдет. В 103 выйдет - undefined //т.е Rasul остается и при вызове добавляется фамилия
//Все это используется в основном что бы создать приватные переменные. Поскольку в JS нет типового механизма для этого.









