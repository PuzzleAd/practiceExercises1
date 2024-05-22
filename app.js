// ! 1 Exercise


// function oddEven (element) {
//     if(element % 2 === 0)
//         return "even"
//     else
//         return "odd"
// }

// console.log(oddEven(1065426165));


// ! 2 Exercise


// let userName = prompt("Enter UserName");
// let password = prompt("Enter Password");

// function adminChecker (user, pass) {
//     if(user === "admin" && pass === "1234") {
//         return "Hello Admin";
//     }else {
//         return "Hello Guest";
//     }
// }

// alert(adminChecker(userName, password));


// ! 4 Exercise

// const numbers = [1, 2, 3, 4, 5, 6];

// function sumArray (array) {
//     let sum = 0
//     for(let i = 0; i < array.length; i++){
//         sum += array[i];
//     }
//     return sum
// }

// console.log(sumArray(numbers));

//! 5 Exercise

// function stringLength (p1, p2) {
//     sump1 = 0
//     sump2 = 0

//     for(let i = 0; i < p1.length; i++){
//         sump1 ++ ;
//     }
//     for(let j = 0; j < p2.length; j++){
//         sump2 ++ ;
//     }

//     if(sump1 === sump2) return true
//     else return false
// }


// console.log(stringLength("12345", "1235"))


// ! bonus Exercise

// const numbers = [1, 2, 2, 3, 4, 4, 5, 8888, 8888]; 



// function removeDuplicates(array) {

//     return array.filter(function (element, index, array) {
//         return array.indexOf(element) === index;
//     });
// }




// console.log(removeDuplicates(numbers))