// 1. СТРОКИ
// const name = 'Расул'
//console.log(typeof(name)) //тип строки - string
// const age = 40
// function getAge() {
//     return age
// }
//const output = 'Привет, меня зовут ' + name + ' и мой возраст: ' + age + ' лет'
//const output = `Привет, меня зовут ${name} и мой возраст ${age} лет` //новая конструкция в JS - пришел с ЭтноСкрипт 6. Лучще так делать.
//const output = `Привет, меня зовут ${name} и мой возраст ${getAge()} лет` //функцию тоже можно использовать - она возвращает число
//в таких выражениях нельзя использовать if, но можно использовать тернарные выражения условии 
//const output = `Привет, меня зовут ${name} и мой возраст ${age < 20 ? 'малолетка': 'нормальный'} лет` //функцию тоже можно использовать - она возвращает число
//console.log(output) //вывордить можно так, не обязательно все в консоле писать

//Так можно сохранить текст
// const output = `
// <div>This is div</div>
//   <p>this is p</p>
// `
// console.log(output)
//Просто выводит текст - косые черточки работают так - как комментарии все выводится
//<div>This is div</div>
//<p>this is p</p>

// const name2 = 'расул'
// console.log(name2.length) //5 строк - длина символа (имя name - видать зарезервированное - лучше такое не использовать)
// console.log(name2.toUpperCase()) // РАСУЛ - верхний регистр
// console.log(name2.toLowerCase()) // расул - нижний регистр
// console.log(name2.charAt(2)) //0,1,2 - на индекс 2 - у нас приходит символ = "с"
// console.log(name2.indexOf('асул')) //если нет совпадении = "-1", если есть - то номер символа начального совпадения //1
// console.log(name2.startsWith('расул')) //false, Стартует ли строка с этого символа-true или false.Синтаксис проверяет.
// console.log(name2.startsWith('Рас')) //true
// console.log(name2.toLowerCase().startsWith('рас')) //true. Сперва в нижний регистр перевели - потом проверили начало символов.
// console.log(name2.endsWith('ул')) //true
// console.log(name2.repeat(3)) //расулрасулрасул, повтор символов указанное количество раз.
// const string = '    password    '
// console.log(string) //получаем -    password     . К символу пробела - относится как к обычному символу
// console.log(string.trim()) //password. Выводит строку без пробела
// console.log(string.trimLeft()) //'password    ' - убирает пробелы слева
// console.log(string.trimRight()) //'     password' - убирает пробелы справа

function logPerson(s, name3, age) { //первый параметр - массив s[] s=Имя:,, Возраст: ,!
    //console.log('s='+s+',name3='+name3+',age='+age)
    if (age<0) {
        age = 'Еще не родился'
    }
    return `${s[0]}${name3}${s[1]}${age}${s[2]}` //новый синтаксис JS
}
const personName = 'Расул'
const personAge = 40
const personName2 = 'Степан'
const personAge2 = -5


const output = logPerson `Имя:${personName}, Возраст: ${personAge}!` 
const output2 = logPerson `Имя:${personName2}, Возраст: ${personAge2}!` 
console.log(output)
console.log(output2)
