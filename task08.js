/*Задание 8.
Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в 
виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.*/

let myMap = new Map();
myMap.set('X', 'Y');
myMap.set(1, 'blou');
myMap.set(2, 'red');
myMap.set(3, 'yellow');
myMap.set(true, 'p');

for (let name of myMap.keys()) { //ключи массива
	console.log(name);
}
myMap.forEach((value, key) => { //Вывод в консоль всех значений в виде «Ключ — Х, значение — Y»
	console.log(`Ключ - ${key}, значение - ${value}`);
});
