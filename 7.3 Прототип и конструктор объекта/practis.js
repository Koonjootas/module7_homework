// Задание 1.
/*
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение.
*/

// const USER = {
//     name: "Ivan",
//     sex: "man",
//     city : "SPb",
// }

// const NEW_USER = Object.create(USER)
// NEW_USER.owncity = "Moscow"
// function showKey (obj) {
//     for (let key in obj) {

//         if (obj.hasOwnProperty(key)) {
//             console.log(key);
//         } 
//     }
// };

// showKey(NEW_USER)

// Задание 2.
/*
Написать функцию, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
*/

// const USER = {
//         name: "Ivan",
//         sex: "man",
//         city : "SPb",
//     }

// function getKeyCheck(obj, str){
//     for (let key in obj) {
//         if (key == str){
//             console.log(true)
//             return true
//         }
//     }
// }

// getKeyCheck(USER, "sex")


// Задание 3.
/*
Написать функцию, которая создает пустой объект, но без прототипа.
*/

function createNewObj() {
    const newObj = Object.create(null);
    return newObj
}


console.log(createNewObj())
