// 1. Length doir misollar
// 1-misol
// let number = [1,2,3,4,5];
// console.log(number.length);

// 2-misol
// let text = "hello";
// console.log(text.length);

// 3-misol
// let num = [11,12,13,14,15,16];
// console.log(num[num.length-1]);

// ### 2. Concat doir misollar
// 1-misol
// let num1 = [1,2,3,4,5];
// let num2 = [5,6,7,8,9,10];
// console.log(num1.concat(num2));

// 2-misol
// let text1 = "hello ";
// let text2 = "world! ";
// let text3 = "How are you?";
// let res = text1.concat(text2, text3)
// console.log(res);

// 3-misol
// let num1 = [1, 2, 3, 4, 5];
// let num2 = [6, 7, 8]
// let res = [9, 10];
// let natija = num1.concat(num2, res)
// console.log(natija);

// ### 3. Includes doir misollar
// 1-misol
// let number = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// let elementToFind = 15;
// let res = number.includes(elementToFind);
// console.log(res);

// 2-misol
// let text = "salom dunyo ";
// let wordToFind = "dunyo";
// let res = text.includes(wordToFind);
// console.log(res);

// 3-misol
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
// let hasGreaterThanTen = false;
// for (let i = 0; i < number.length; i++) {
//     if (number[i] > 10) {
//         hasGreaterThanTen = true;
//         break
//     }
// }

// if (hasGreaterThanTen) {
//     console.log("Massiv ichida 10 dan katta son mavjud");
// } else {
//     console.log("Massiv ichida 10 dan katta son mavjud emas");
// }

// ### 4. IndexOf, LastIndexOf doir misollar
// 1-misol
// let numbers = [1,12,13,14,15,16,20];
// let elementToFind = 13;

// let index = numbers.indexOf(elementToFind);
// console.log(index);

// // 2-misol
// let num = [12, 19, 20, 21, 24, 28];

// let elementToFind = 19;
// let lastIndex = num.lastIndexOf(elementToFind);
// console.log(lastIndex);

// 3-misol
// let string = "salom";
// let letterToFind = "a";
// let firstIndex = string.indexOf(letterToFind)
// let lastIndex = string.lastIndexOf(letterToFind)
// console.log(`"${letterToFind}" harfi birinchi marta ${firstIndex}-indexda paydo bo'ldi.`);
// console.log(`"${letterToFind}" harfi oxirgi marta ${lastIndex}-indexda paydo bo'ldi.`)

// ### 5. Sort doir misollar
// 1-misol
// let numbers = [1, 2, 3, 4, 88, 129, 102, 89, 726, 297];
// numbers.sort((a, b) => a - b)
// console.log(numbers);

// 2-misol
// let words = ["uch", "besh", "on", "olti"]
// words.sort()
// console.log(words);

// 3-misol
// let num = [100, 200, 938, 211, 872, 998, 1];
// num.sort((a, b) => b - a)
// console.log(num);

// ### 6. Reverse
// 1-misol
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// num.reverse();
// console.log(num);

// 2-misol
// let text = "hello";
// let res = text.split("").reverse().join("");
// console.log(res);

// 3-misol
// let numbers = [10, 20, 30, 40, 50];
// let res = numbers.reverse()
// console.log(res);

// ### 7. ToString doir misollar
// 1-misol
// let num = [20, 30, 40, 50, 55];
// let res = num.toString();
// console.log(res);

// 2-misol
// let text = ["hello", "two"];
// let res = text.toString();
// console.log(res);

// 3-misol
// let num = [10, 20, 30, 40, 90]
// let res = num.toString(", ")
// console.log(res);

// ### 8. Join doir misollar
// 1-misol
// let num = [11, 12, 90, 12, 19];
// let res = num.join("-");
// console.log(res);

// 2-misol
// let text = ["hello", "world!"];
// let res = text.join(" ");
// console.log(res);

// 3-misol
// let meva = ["olma", "apelsin", "xurmo"];
// let res = meva.join("|");
// console.log(res);

// ### 9. Push, Shift doir misollar
// 1-misol
// let num = [1, 2, 3];
// num.push("4");
// console.log(num);

// 2-misol
// let text = ["salom", "ismiz nima"];
// text.shift();
// console.log(text);

// 3-misol
// let text = ["salom", "ismingiz nima", "dasturlash sohasini qayi yonalishi yoqadi"];
// text.push("javascript");
// text.shift();
// console.log(text);

// ### 10. Unshift, Pop
// 1-misol
// let cars = ["BMW", "Merc", "Tesla"];
// cars.unshift("Onix");
// console.log(cars);

// 2-misol
// let number = [20,30,40,50];
// number.pop()
// console.log(number);

// 3-misol
// let fruits = ["Apple", "Banana", "Cherry"]
// fruits.push("uzum");
// console.log(fruits);
// let lastFruit = fruits.pop()
// console.log("O'chirilgan oxirgi element", lastFruit);
// console.log("Oxirgi element o'chirilgandan keyin", fruits);

// ### Qiyinroq masalalar:
// 1-misol
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let length = number.length;
// if (length % 2 == 1) {
//     const middleIndex = Math.floor(length / 2);
//     number.splice(middleIndex, 1);
//     console.log(number);
// } else {
//     let mid = length / 2;
//     let firstHalf = number.slice(0, mid);
//     let secondHalf = number.slice(mid);
//     console.log(firstHalf, secondHalf);
// }

// 3-misol
// let num = [1, 23, 2, 5, 6, 7, 8, 10];
// let searchElement = 10;
// let res = num.indexOf(searchElement)

// if (res !== -1) {
//     num.splice(res, 1);
//     console.log("Elementt olib tashlandi:", num);
// } else {
//     num.push(searchElement);
//     console.log("Element qoshildi", num);
// }

// 4-misol
// let number = [89, 98, 12, 64, 87, 723, 8764, 887, 8];

// let searchElement = 98;
// let firstIndex = number.indexOf(searchElement);
// let lastIndex = number.lastIndexOf(searchElement)

// if (firstIndex !== -1 && lastIndex !== -1) {
//     let newNum = number.slice(firstIndex, lastIndex + 1)
//     console.log("Yangi massiv", newNum);
// } else {
//     console.log("Elment topilmadi");
// }

// 6-misol
// let num = [1, 2, 3, 4, 5];
// let doubledArray = [];
// for (let i = 0; i < num.length; i++) {
//     doubledArray[i] = num[i] * 2;
// }

// let res = doubledArray.join(", ")
// console.log(res);

// 7-misol
// let array1 = ['a', 'b', 'c']
// let array2 = ['d', 'e', 'f']
// let array3 = ['g', 'h', 'j']
// let combineArray = array1.concat(array2, array3);
// let res = combineArray.join("-");

// res = res.toUpperCase()
// console.log(res);


// 8-misol
// let text = ['a', 'b', 'c', 'd', 'e'];

// text.splice(0, 1);
// text.splice(text.length - 1, 1);

// let result = text.join(":");

// console.log(result);

// 9-misol
// let num = [5, 6, 7, 8, 9];
// num.unshift(4);
// num.push(10);
// num.sort(function (a, b) {
//     return a - b;
// })

// let lastThreeElements = num.slice(-3);
// console.log(lastThreeElements);

// 10-misol
// let numbers = [5, 3, 8, 1, 9, 2, 6];
// numbers.reverse()
// numbers.slice(0, 2);
// numbers.slice(numbers.length - 3, 3);

// numbers.sort(function (a, b) {
//     return a - b;
// })
// console.log(numbers);