//1. МАССИВЫ
//3:04
//  const cars = ['Мазда','Форд','БМВ','Мерседес']
//  const fib = [1, 1, 2, 3, 5, 8, 13, '21', true]
 //Методы массивов
//  console.log(cars) //в прото скрыты методы массива. Мы их можем использовать.
 //во вложенном методе --proto-- видно что это объект. У него уже нет метода proto - потому что это базовый объект.

 //Method
 //метод добавления в конец нового элемента ["Мазда", "Форд", "БМВ", "Мерседес", "Рено"]
 //cars.push('Рено') //МЕТОДОМ в языке считается - если функция добавляется через точку к переменной. Иначе это ФУНКЦИЯ

 //function
//  function addItemToEnd() {

//  }
//  cars.unshift('Волга') //["Волга", "Мазда", "Форд", "БМВ", "Мерседес", "Рено"] //добавленние в начало массива
//  cars.shift() //["Мазда", "Форд", "БМВ", "Мерседес", "Рено"] - удаляется первый элемент из массива
 //он как удаляет, так же возвращает этот элемент - в консоли выведет - "Волга" - поэтому можно еще с ним работать
//  const firstItem = cars.shift() //["Форд", "БМВ", "Мерседес", "Рено"]
//  console.log(firstItem) //"Мазда" 
// const lastItem = cars.pop() //["Форд", "БМВ", "Мерседес"]
// console.log(lastItem) // "Рено"
//console.log(cars)
//console.log(cars.reverse()) //["Мерседес", "БМВ", "Форд", "Мазда"] - переварачивает массив

//console.log(cars.indexOf('БМВ')) //2. Второй индекс по очереди (0,1,2) - третяя по очереди. indexOf - использовали в поиске индекса строки. Если не находил соответствие -1 выдавал.
// const index = cars.indexOf('БМВ')
//console.log(cars[index]) //БМВ - получили по индексу - значение индекса.
// cars[index] = 'Porshe' //Замена БМВ на Porshe 
// console.log(cars) //["Мазда", "Форд", "Porshe", "Мерседес"]

//сложный массив
// const people = [
//     {name2: 'Rasul', budget: 4200},
//     {name2: 'Elena', budget: 3500},
//     {name2: 'Victoria', budget: 1700}
// ]
//требуется найти человека у кого бюджет 3500. С помошью indexOf - не получится это найти
// const index = people.findIndex(function(person) {
//     console.log(person)
// })
// person вернет:
//{name2: "Rasul", budget: 4200}
//{name2: "Elena", budget: 3500}
//{name2: "Victoria", budget: 1700}

// const index = people.findIndex(function(person) {
//     return person.budget === 3500
// })
// console.log(people[index]) //{name2: "Elena", budget: 3500}

//можно индекс не искать - а сразу получить человека
// const person = people.find(function(person) {
//     return person.budget === 3500
// })
// console.log(person) //{name2: "Elena", budget: 3500} - без индекса сразу получили результат
//3,25




//Задача 1
//const text = 'Привет, мы изучаем JavaScript'
//const reverseText = text.split(',') //["Привет", " мы изучаем JavaScript"] - делит текст по указанному символу - у нас символ "," запятая - поэтому делит до запятой и после
//const reverseText = text.split(' ') //["Привет,", "мы", "изучаем", "JavaScript"] - по пробелу делит
//const reverseText = text.split('') //["П", "р", "и", "в", "е", "т", ",", " ", "м", "ы", " ", "и", "з", "у", "ч", "а", "е", "м", " ", "J", "a", "v", "a", "S", "c", "r", "i", "p", "t"] //каждый символ делит
//const reverseText = text.split('').reverse() //["t", "p", "i", "r", "c", "S", "a", "v", "a", "J", " ", "м", "е", "а", "ч", "у", "з", "и", " ", "ы", "м", " ", ",", "т", "е", "в", "и", "р", "П"] - наоборот символы
//const reverseText = text.split('').reverse().join() //t,p,i,r,c,S,a,v,a,J, ,м,е,а,ч,у,з,и, ,ы,м, ,,,т,е,в,и,р,П //join() - объединяет Массив в строки - по умолчанию через запятые
//const reverseText = text.split('').reverse().join('') //tpircSavaJ меачузи ым ,тевирП //получим перевернутую строку. Если ходим объединить не через запятые - нужно это указывать.
// const reverseText = text.split('').reverse().join('-') //t-p-i-r-c-S-a-v-a-J- -м-е-а-ч-у-з-и- -ы-м- -,-т-е-в-и-р-П
// console.log(reverseText) 


//3.19
const cars = ['Мазда','Форд','БМВ','Мерседес']

const index = cars.indexOf('БМВ')
//console.log(index) //выдаст - 2
//console.log(cars[index]) //выдаст - БМВ
cars[index] = 'Porshe'
console.log(cars) //['Мазда', 'Форд', 'Porshe', 'Мерседес']


