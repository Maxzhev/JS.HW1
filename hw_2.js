// let i = 1;
// let result = 1;
// while (i < 11) {
//     result = result * 2;
//     i++
// }
// console.log(result); 

// const power = function(num) {
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result = result * 2;
//     }
//     return result
// }
// console.log(power(10))

// const power2 = function(num) {
//     return 2 ** num
// }
// console.log(power2(10))

// let word = ":)";
// let result2 = "";
// for (let i = 1; i <= 6; i++) {
//     result2 += word
//     console.log(result2)
// }

function printSmile(stroka, numberOfRows) {
    let result = "";
    for (let i = 1; i <= numberOfRows; i++) {
        result += stroka
        console.log(result)
    }
}

printSmile(";)", 5)