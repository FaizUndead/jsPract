/**
 * Лабораторная работа №5
 * <<Работа со списками>>
 * 
 * listExample - односвязный список, в котором есть два поля:
 * value - значение элемента списка,
 * next - ссылка на следующий элемент списка.
 * 
 * Для получения элементов списка необходимо двигаться по ссылкам,
 * для получения значения - обращаться к соответствующему полю value.
 * 
 * 
 * Задание:
 * 1. Написать функцию, которая будет выводить все значения списка.
 * Пример: function printValues(list) {} -> "1, 2, 30"
 * 
 * 2. Написать функцию, которая будет выводить нужный элемент списка по номеру(индексу).
 * Пример: function getValue(list, index) {} -> 1
 * Если обращение к несуществующему элементу -> вернуть -1
 * 
 * 3. Написать функцию, которая добавляет элемент в конец списка.
 * Пример: function addElement(list, value) {} -> Новый список с 4 элементами
 * 
 */


// пример списка
var listExample = {
  // первый элемент списка
  value: 1,
  next: {
    // второй элемент списка
    value: 2,
    next: {
      // третий элемент списка
      value: 30,
      next: null
    }
  },
};




// получение значения первого элемента списка
var value01 = listExample.value;
// получение значения второго элемента списка
var value02 = listExample.next.value;
// получение значения третьего элемента списка
var value03 = listExample.next.next.value;


// Задача №1 - Написать решение
function printValues2(list) {
  var str = '';
  for (var i = 0; true; i++) {
    var listVal = list.value;
    str = str + listVal + ', ';
    if (list.next !== null) {
      list = list.next;
    } else {
      break;
    }
  }
  console.log(str);

}

function printValues(list) {
  var str = '';

  function rec() {

    str = str + list.value + ', ';
    if (list.next) {
      list = list.next;
      rec();
    }
  }
  rec();

  str = str.slice(0, (str.length - 2));

  return str;
}

console.log(printValues(listExample));

// Задача №2 - Написать решение
function getValue(list, index) {

  for (var i = 0; i < index; i++) {
    list = list.next;
  }


  return list.value;

}

getValue(listExample, 2);

// Задача №3 - Написать решение
function addElement(list, val) {

  for (var i = 0; true; i++) {

    if (list.next !== null) {
      list = list.next;
    } else {
      list.next = {
        value: val,
        next: null
      }
      break;
    }
  }

}

printValues(listExample);



// Тест для задачи №1
function testPrintValues(comparedValue) {
  // Задание необходимы значений
  var val01 = '1, 2, 30';
  // Сравнение с нужным результатом
  if (val01 === comparedValue) {
    console.error("Тест пройден. Результат: " + comparedValue + " === " + val01);
    return;
  }
  throw new Error("Тест testPrintValues не пройден! " +
    comparedValue + " !== " + val01);
}
// Конец теста №1


// Тест для задачи №2
function testGetValue(comparedValue, neededValue) {
  if (comparedValue === neededValue) {
    console.error("Тест пройден. Результат: " +
      comparedValue + " === " + neededValue);
    return;
  } else {
    throw new Error("Тест testGetValue не пройден! " +
      comparedValue + " !== " + neededValue);
  }
}
// Конец теста №2


// Резльтат работы функции из задачи №1 -> в переменную
var resultPrintValues = printValues(listExample);
// Тестируем правильность возвращаемого значения
testPrintValues(resultPrintValues);


// Сохранение значения элемента списка в переменную
var resultgetValue00 = getValue(listExample, 0);
var resultgetValue01 = getValue(listExample, 1);
var resultgetValue02 = getValue(listExample, 2);
// Обращение к несуществующему элементу - должно вернуть -1 по условию
// Раскомментировать для проверки
// var resultgetValue10 = getValue(listExample, 10);


// Тестирование правильности получения значения елементов списка
testGetValue(resultgetValue00, 1);
testGetValue(resultgetValue01, 2);
testGetValue(resultgetValue02, 30);


// Вывод значений элементов в консоль
console.log("Значение первого элемента: " + value01);
console.log("Значение второго элемента: " + value02);
console.log("Значение третьего элемента: " + value03);