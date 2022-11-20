//alert('1')
//1.ПЕРЕМЕННЫЕ
// var name = "Vladilen" //- это устарело. Можно менять name="Lid"
// name = "hren"
// const lastName = "Rasul" //string. это константа - менять ее нельзя в процессе разработки. Только для чтения. Если не планируете менять - лучше ее использовать
// let age = 26 //number тоже что и var. Можно менять значения. Var - лучше не использовать. используется - если планируете ее менять
// const isProgrammer = true //boolean
// age = "same string"
// age = false //может любым переменным стать
//age = 40
//camelCase - 2 слова пишем вместе - не через нижнее подчеркивание, а через Большое слово
//const firstName = "Tazhutdinov"
// точку с запятой можно не писать, а можно писать. Лучше не писать - читать лучше
//const _private = 'private' // так можно. 
//const _ = 'private' // так тоже можно писать
//const $ = 'some value' //так итоже можно
//const if = 'lilu' нельзя использовать зарезервированные слова if в качестве переменной
//const perem5 = 5 //так можно словва с цифрами
// const 5num = 5 переменные с числа нельзя начинать - это ошибка
//ковычки можно использовать и одинарные и двойные - но, нужно одинаковые везде их использовать. Лучше одинарные - лаконично.

// 2. МУТИРОВАНИЕ
//console.log('Имя человека: ' + firstName + ' ,возраст человека:' + age.toString())
//console.log(age)
// age.toString() - Этим методом мы преобразовываем в строку число. Программа по умолчанию меняет на строку age - потому
// .. что стоит знак '+' и с лева строка
//alert - не конструкция js - это команда браузера
//    alert('Имя человека: ' + firstName + ' ,возраст человека:' + age.toString())
//const liuName = prompt('введите фамилию')
//alert(firstName + ' ' + liuName)

// 3. ОПЕРАТОРЫ
//let currentYear = 2021
//const birdhYear = 1981
//let age2 = currentYear + birdhYear //const - для  age2 вроде не обязательно, вроде без него работает
//console.log(age2)
//const a = 10
//const b = 5

//let c = 32
//c = c + a
//c += a // аналогично с = с + а
//c -= a // c = c - a
// c *= a // c = c * a
// c /= a // c = c / a

//console.log(a + b)
//console.log(a - b)
//console.log(a * b)
//console.log(a / b)
//console.log(currentYear++) //увеличивает значение на 1, но поскольку вконце стоит выведет  2021
//console.log(currentYear) // здесь уже выведет +1 в итоге 2022
//console.log(currentYear) // здесь тоже 2022
//console.log(++currentYear) // здесь 2023 - потому что в начале стоит
//console.log(--currentYear) // 2022 - отнимет 1 от 2023
//console.log(c)

// 4. ТИПЫ ДАННЫХ
//const isProgrammer = true
//const name2 = 'Tazhutdinov'
//const age = 40
//let x

//console.log(typeof isProgrammer) //typeof - тип данных показывает boolean
//console.log(typeof name2) //string
//console.log(typeof age) //number
//console.log(typeof x) //undefined - 
//console.log(typeof null) //object - это баг языка, возвращает не то что нужно.
//console.log(null) //null
//всего 5 примитовов основных. Есть еще 3 правда.
//можно в самой консоли играться с typeof - он будет выводить тип данных

//5. ПРИОРИТЕТ ОПЕРАТОРА
//const fullAge = 40
//const birthYear = 1981
//const currentYear = 2021
// > < >= <=
//const isFullAge = currentYear - birthYear <= fullAge //40 >= 40
// поисковый запрос = mdn operator precedence
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// Там есть таблица приоритетов - у кого больше приоритет - тот первый расчитывается
//console.log(isFullAge)
// 6. УСЛОВНЫЕ ОПЕРАТОРЫ
// const courseStatus = 'pending' //ready, fail, pending
// if (courseStatus === 'ready') {
//     console.log('курс готов - его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('курс находится в процессе разработки')
// } else {
//     console.log('курс не получился')
// }

//const isReady = false
// if (isReady === true) { // можно писать просто if(isReady) - то же самое
//     console.log('все готово')
// } else {
//     console.log('все не готово')
// }
//Тернарные выражения
//isReady ? console.log('Все готово') : console.log('Все не готово') //сокращенно. Заменяет текст выше. Для простых условии можно использовать.

//const num1 = 42 //number
//const num2 = '42' //string
//console.log(num1 == num2) //true - 2 равно - приводит к одному типу данных - строке. Что не есть хорошо
//console.log(num1 = num2) // ошибку выдаст - разные типы данных
//console.log(num1 === num2) //false - проверка по типу данных и по значению. Всегла лучще это использовать

// 7. БУЛЕВАЯ ЛОГИКА
// mdn logical operators - в Гугле набить
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators

// оператор И "&&" Только если оба вариаента правильные - вернет - Правда
// true && true -  true
// true && false -  false
// false && true -  false
// false && false -  false

// оператор ИЛИ '||' -  если хоть один вариант правильный - вернет - Правда
// true || true - true
// true || false - true
// false || true - true
// false || false - false

// Оператор НЕ - '!'
// true - true
// !true - false
// !false - true
// !!true - true // можно несколько раз применять оператор отрицания - результат будет меняться
// !!false - false

// 8. ФУНКЦИИ
// что бы не дублировать код
// function calculateAge(year) {
//     return 2021 - year
// }
// const myAge = calculateAge(1981) //Выдаст 40 - можно в консоли получить введя - myAge
// console.log(calculateAge(1981))
// console.log(calculateAge(1956))
// console.log(calculateAge(1951))
// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
//     if (age > 0) {
//         console.log('Человек по имени ' + name + ', сейчас имеет возраст ' + age)
//     } else {
//         console.log('год из будущего')
//     }

// }
// logInfoAbout('Расул', 2041) //Человек по имени Расул, сейчас имеет возраст 40
//logInfoAbout('rasul',1981) - можно это и в консоле лога вбить вручную
//app.js:142 Человек по имени rasul, сейчас имеет возраст 40

// 9. МАССИВЫ
// const cars = ['Мазда', 'Мерседес', 'Форд'] //лучще использовать такой вариант
//     //const cars = new Array('Мазда', 'Мерседес', 'Форд') - не лучщий вариант
// console.log(cars[3]) //обращение по индексу\
// console.log(cars.length) //Говорит сколько элементов внутри массива - 3 -элемента (0,1,2)
// cars[0] = 'Порще' //Меняет по 0 индексу - значение массива 
// cars[3] = 'Мазда' //Добавим в индекс - элемент
// cars[cars.length] = 'Субару' //Добавляет после последней строки - новый элемент = ["Порще", "Мерседес", "Форд", "Мазда", "Субару"]
// //..потому что длина массива было 4 строки а элементы массива 0,1,2,3
// console.log(cars)

// 10.Циклы
//const cars = ['Мазда', 'Мерседес', 'Форд', 'Порще']
// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(i) //*/0, 1, 2
//     console.log(car) // Мазда, Мерседес, Форд - выведет
// }
// - новый синтаксис цикла появился в последней версии
// for (let car of cars) {
//     console.log(car)
// }

// 11. ОБЪЕКТЫ
// гРуппируют какую то модель, чем можно описывать что то
// const person = {
//         firsName: 'Tazhutdinov',
//         lastName: 'Rasul',
//         year: 1981,
//         Languages: ['Ru', 'En', 'Avar'],
//         hasWife: true,
//         greet: function() {
//             console.log('greet from person')
//         }
//     }
//console.log(person.firsName)
//person.greet() // все сушности в JS сформированны таким образом что есть объекты у которых есть разные войства.
// Можно в консоли написать:
//person.Languages
//(3) ["Ru", "En", "Avar"] - выйдет это
//console.log(person['lastName']) //Так тоже можно обращаться - но нужно ставить ''
//значение по ключу можно получить - заглавные одинаково должны быть написанны
// const key = 'year' //
// console.log(person[key])
// person.hasWife = false //можно менять значение
// person.isProgrammer = true // добавили новый ключь в Объект
// console.log(person)