/* Задание 6.

Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.*/

const a = [1, 1, 1, 1, 1, 1, 1];

function similarity(arr) {

let firstItem = arr[0];

  return arr.filter(elements => elements == firstItem).length != arr.length ? false : true;
}


console.log(similarity(a));
