  // Задание 6
  // Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
  // Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let numArr = [21, 33, 21, 44, 88, 22, 21];
let check = numArr[0];
numArr.forEach(function(item, index, numArr) {
if(item == check) {
console.log(`true`);
} else  {
console.log(`false`); 
}
}) 
