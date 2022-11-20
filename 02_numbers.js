// 1.ЧИСЛА
// const num = 42 //integer
// const float = 42.30 //float
// const pow = 10e3 //валидное число 10 000.

// console.log('Number.MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER) //максимальное целое число в программе = 9 007 199 254 740 991

// console.log('Math.pow(2, 53) - 1', Math.pow(2, 53) - 1) //математическая функция получения max целого числа
// console.log('Number.MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER) //-9007199254740991
// console.log('Number.MAX_VALUE', Number.MAX_VALUE) //впринципе max возможное число в JS. Но числа можно использовать только до 9 007....
// console.log('Number.MIN_VALUE', Number.MIN_VALUE)
// console.log('Number.POSITIVE_INFINITY', Number.POSITIVE_INFINITY) //позитивная бесконечность
// console.log('Number.NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY) //отрицательная бесконечность
// console.log(100 / 0) //если число делить на 0 - выдает бесконечность infinity
// console.log(Number.NaN) // выдает число (фиолетовый цвет) NaN - Not A Number
// console.log(typeof NaN) // 'Number' - тип NaN - число
// const weird = 2 / undefined //Вернет NaN - не число
// console.log(isNaN(weird)) // проверка - это NaN или нет, в данном случае true
// console.log(isNaN(42)) //false - т.е нормальное это число
//     //isFinite - это объект, заранее созданный в самом языке
// console.log(Number.isFinite(Infinity)) //конечно ли - бесконечность - false
// console.log(Number.isFinite(42)) //конечно ли число 42 - true

// const stringInt = '40'
// const stringFloat = '40.40'
// console.log(stringInt + 2) //по логике должно быть 42 - но получится 402 - поскольку это строка
//     //как привести это к числу
// console.log(Number.parseInt(stringInt) + 2) //Получаем из строки число - парсим число - теперь получим 42
// console.log(parseInt(stringInt) + 2) //Number - можно не использовать
// console.log(Number(stringInt) + 2) //2 вариант парсинга. Итог = 42
// console.log(+stringInt + 2) // 3 вариант - поставив + мы говорим системе что число будет дальще
// console.log(parseInt(stringFloat) + 2) //будет 42. Функция работает только с целыми числами поэтому в 40.42 -отметает дробь = 40 + 2
// console.log(parseFloat(stringFloat) + 2) //для дробных чисел используем спец функцию для работы с дробными числами
// console.log(+stringFloat + 2) //так тоже можно. В основном все используют parse

// console.log(0.4 + 0.2) //выдаст 0,6000000000000001 вместо 0,6 - особенность
    //для решения можно перевести на целочисленные значения
// console.log((2 / 5) + (1 / 5)) //не помогло - то же самое получили
// console.log((0.4 + 0.2).toFixed(2)) //toFixed() - количество знаков после запятых, 4 знака. получим 0,6000 - остальные обрезали с округлением по математическим правилам
    //typeof((0.4+0.2).toFixed(4))
    //"string" - это будет строка 0,6000
// console.log(parseFloat((0.4 + 0.2).toFixed(2))) //возврат - число с запятой - 0,6 - хотя по логике 0,06 -но parseFloat - обрезает нули
// console.log(parseFloat(0.4 + 0.2)) //выводит 0.6000000000000001, т.е toFixed - нужен обязательно, он еще и округляет математически, по умолчанию
// console.log(parseFloat((0.42 + 0.23).toFixed(1))) //вернет 0,7, поскольку округлит 0,65 до 0,7 - поскольку только одна цифра после запятой

// 2.BIGINT - новый тип данных в JS. Ввели что бы могли работать с числами которые больше чем MAX_SAFE_INTEGER.
// console.log(Number.MAX_SAFE_INTEGER) //max число в  9007199254740991
// console.log(9007199254740991999) //добавим вконец числа - получим значение с которым нельзя взаимодействовать и оперировать
//console.log(typeof 9007199254740991999) //number - логично
// console.log(typeof 9007199254740991999998n) //ставим вконец n - слитно. bigint - тип числа. Смогли сохранить после отключения плагина - JS-CSS-HTML Formatter
    //typeof 9007199254740991999999n
    //"bigint"
// console.log(9007199254740991999999n - 9007199254740991999998n) //1n - расчет идет. В Хроме такие числа зеленым выделяются, а не синим как обычные числа.
// console.log(-9007199254740991999998n - 9007199254740991999999n) //отрицмтельный bigInt получим.
//console.log(9007199254740991999998.1254n) //err - только с целочисленнными можно делать вычисления.

//console.log(10n - 4) //err. bigInt нельзя миксовать с другими типами
// console.log(parseInt(10n)-4) //6 - bigInt лисло нужно через парсерИнт превратить в обычное число
// console.log(10n - BigInt(4)) //6n - переводим все числа в bigInt и дальше считаем.
// console.log(5n/2n) //2n - должно быть 2.5 - но поскольку дробную часть отсекли - получаем 2
//сonsole.log(parseFloat(5n/2n)) //err - не работает это

// 3.MATH
//Константы
console.log(Math.E) //2.718281828459045 экспонента
console.log(Math.PI) //3.141592653589793 Чило Пи

console.log(Math.sqrt(25)) //5 - квадратный корень
console.log(Math.pow(5, 2)) //25 - возвести 5 в степень 2
console.log(Math.abs(-7)) //7 - модуль числа. Меняет - на +. Отсекаем негативную часть
console.log(Math.max(42, 55, 13, 425)) // 425 - max число из списка
console.log(Math.min(42, 55, 13, 425)) // 13 - min число из списка
console.log(Math.floor(11.99)) // 11 - округление в нижнюю сторону
console.log(Math.ceil(11.01)) //12 - округление в большую сторону
console.log(Math.round(11.49)) //11 округляет по математическим правилам.
console.log(Math.trunc(11.49)) //11 Просто удаляет дробную часть - без округления
console.log(Math.random()) // 0.39529148327556474 Выдает рандомное значение числа. Пр обновлении страницы -обновляет число

//4. Example
//Функция выводит число между min и max
function getRandomBetween(min, max) {
    return Math.floor(Math.random()*(max - min+1) + min)
}
console.log(getRandomBetween(10, 42)) // 34.21329599621303


