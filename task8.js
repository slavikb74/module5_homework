// Задание 8
// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.

let fruits = new Map();
   fruits.set('зеленая','груша');
   fruits.set('red', 'apple');
   fruits.set('blue', 'слива');
  for (let [key, value] of fruits) {
    console.log(`ключ - ${key}, значение - ${value}`)
  }
