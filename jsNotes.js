'use strict';
//console.log("Hello world!"); важно умение правильно абстагироваться
/* Если имя св недопустимое имя переменной или получаеться путем вычисления то obj["John Doe"] или можно подставить переменные, код ниже наглядно это иллюстрирует */
var obj1 = {
  "John Doe": "hello",
  2: 2,
  "1": 3,
  privet: "zdarova"
}
var array = [1, 2, 3, 4, 5];
var privet = "John Doe";
//console.log(obj1[privet]);

/* обьвление через var fun = function(arg){}; - func expression, или function fun(arg){}; - func declaration, function(arg){}; - анонимная функция \\\\\\Замыкание*/
function multiply(factor) {
  return function(number) {
    return factor * number;
  }
}
var twice = multiply(2);
//console.log(twice(5));
var array = [2, 3, 1, 6, 5];
var array2 = [2, 3, 1, 6, 5, 10, 16, 19, -4];
var arrayDiv = [-2, -1, 0, 1];
var array1 = [];
// .....Переборы массивов(функция, анонимная которая выполнить после выполнения какого-либо дей) arr.forEach(callback(item,i,arr){}) - простой перебор элементов, поочереди получает значения элементов

//arr.filter(callback(item,i,arr){})- метод возвращает массив,состоящий из элементов arr при чтении(проходе по) которых callback вернул true. item -элемент,i -индекс, arr -arr

//arr.map(callback(item,i,arr){}) -возвращает массив, состоящий из того что возвращает callback

// методы every/some вернут true если каждый\хотябы_один элемент вернет true

//самое крутое это reduce reduceRight arr.reduce(callback(previousValue, currentItem, index, arr){}, initialValue); проходит по массиву и на каждой итерации  определяет что будет в previousValue
// проходя по массиву текущий элемент -currentItem, его index и arr в котором он нааходиться, в конце метод вернет последний previousValue
//initial определяет что будет в previous в начале, если не задам то отсчет идет со второго эл а в previous будет первый элемент

// console.log(array.reduce(function(a,b) {
// 	console.log(a);
// 	console.log(b);
// 	return "zdarova" //примеры странные но зато показательные, нормальные можно найти в интернете
// },"ku"));

// function getSums(arr) { // задачка с reduce
// 	var newArray = [];
// 	var last = arr.reduce(function(prev,curr) {
// 		newArray.push(prev);
// 		return prev + curr;
// 	});
// 	newArray.push(last);
// 	return newArray;
// }
// console.log(getSums(arrayDiv));

// console.log(array.map(function(argument) {
// 	return "ku"; //странный пример зато понятно как работает метод,return argument.length; вернет массив состоящий из длинн элементов arr
// }));
// array.forEach(function(number){
// 	//console.log(number);
// });
// console.log(array.filter(function(number) {
// 	return false; //в массив ни один элемент не будет добавлен, если return number > 0то метод вернет массив состоящ из полож эл-тов
// }));
//console.log(array1);
//var ku = null;
// (ku == null)?
// 	console.log(true):
// 	console.log(false); - тоже самое что и структура if else
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Родители разрешили?');
//   }
// }
// function checkAge(age) {
// 	return(age>18)? true: false;
// };
// checkAge(12);

// Рекурсия, вся суть в стеке вызовов Ниже примеры рекурсий

function power(a, b) {
  if (b == 1) {
    return a;
  }
  if (b > 0) {
    return power(a, b - 1) * a;
  } else {
    return power(a, b + 1) * 1 / a;
  }

}

// сдесь мне вроде неплохо получилось воплотить цикл через рекурсию, пытался сделать его как for
function toLog(start, finish) {
  // указаваеться начало счета и конец далее идет цикл через рекурсию

  function f() {

    if (start > finish) return 1;
    console.log(start);
    start++;
    f();
  }
  f();
}


function sumToRe(n) {
  if (n != 1) {
    return n + sumToRe(n - 1);
  } else {
    return n;
  }
};
//console.log(sumToRe(100));
function factorial(n) {
  if (n != 1) {
    return n * factorial(n - 1);
  } else {
    return n;
  }
};
//console.log(factorial(5));
// нахождение нного числа фибоначчи
function fib(n) {
  if (n > 2) {
    return fib(n - 2) + fib(n - 1)
  } else {
    return 1
  }
}



function fibCy(n) {
  var zero = 0;
  var start = 1;
  var count = 0;
  for (var i = 1; i < n; i++) {
    count = zero + start;
    zero = start;
    start = count;
  };
  return count
};
// для понимания замыкания важны lexicalEnvironment и [[Scope]]
function makeCounterO() {
  var currentCount = 0;

  return { // возвратим объект вместо функции
    getNext: function() {
      return ++currentCount;
    },

    set: function(value) {
      currentCount = value;
    },

    reset: function() {
      currentCount = 0;
    },
    info: function() {
      return currentCount;
    }
  };
}

function makeCounter() {
  var currentCount = 0;

  // возвращаемся к функции
  function counter() {
    return ++currentCount;
  }

  // ...и добавляем ей методы!
  counter.set = function(value) {
    currentCount = value;
  };

  counter.reset = function() {
    currentCount = 0;
  };

  counter.info = function() {
    return currentCount;
  };
  counter.dwarf = "DWARF";


  return counter;
}
var counterT2 = makeCounterO();
var counterT = makeCounter();
// console.log(counterT.info;

// console.log(counterT2.getNext());
function makeBuffer() {
  var currentStr = '';

  // возвращаемся к функции
  function buffer(str) {
    if (str == undefined) {
      str = '';
    }
    currentStr = currentStr + str;
    return currentStr;
  }

  // ...и добавляем ей методы!

  buffer.clear = function() {
    currentStr = '';
  };



  return buffer;
}
var bufferT = makeBuffer();
// bufferT(0);
// bufferT(1);
// bufferT(0);
// console.log(bufferT());

// bufferT.clear();
// console.log(bufferT());
// console.log(bufferT());
// console.log(bufferT());

// универсальная сортировка,  проходит по массиву, если функция вернет true или положительное число число меняет элементы местами, в начале a - перый элемент b - второй
array.sort(function(a, b) {
  // if (a < b) return true;
  if (b == 3) return true;
});
//console.log(array);

//интересная задача на замыкания
var users = [{
  name: "Борка",
  surname: 'Иванов',
  age: 20
}, {
  name: "Борис",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Яна",
  surname: 'Медведева',
  age: 18
}];

function byField(field) {
  return function(a, b) {
    return a[field] > b[field] ? 1 : -1;
  }
}
// users.sort(byField('name'));
// users.forEach(function(user) {
//   console.log(user.name);
// }); // Вася, Маша, Петя

function filter(arr, func) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    if (func(val)) {
      newArr.push(val);
    }
  }
  return newArr;
}

function inBeetwen(flour, ceil) {
  return function(a) {
    if (a >= flour && a <= ceil) {
      return true;
    }
  }

}

function inArray(arr) {
  return function(a) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == a) {
        return true;
      }
    }

  }

}

// console.log(filter(array2, function(a) {
//   return a % 2 == 0
// }));
// console.log(filter(array2, inBeetwen(2, 2)));
// console.log(filter(array2, inArray([2, 5, 6, 99])));

function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++) {
    function shooter(ind) { // функция-стрелок
      return function() {
        console.log(ind);
      }
    }
    shooters.push(shooter(i));
  }

  return shooters;
}
var army = makeArmy();


var obj2 = {
  name: "Kukuy"
};

function sayHi() {
  console.log("Hello I'm " +
    this.name);
}

var calc = {
  read: function(arg1, arg2) {
    this.arg1 = arg1;
    this.arg2 = arg2;
  },
  sum: function() {
    console.log(this.arg1 + this.arg2);
  },
  mul: function() {
    console.log(this.arg1 * this.arg2);
  }
};

var ladder = {
  step: 0,
  up: function() { // вверх по лестнице
    this.step++;
    return this;
  },
  down: function() { // вниз по лестнице
    this.step--;
    return this;
  },
  showStep: function() { // вывести текущую ступеньку
    console.log(this.step);
  }
};

//интересная реализация замыкания и кастомного toString
function sum(a) {

  var currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}
// console.log(+sum(5)(6)(5)(10));


function Calculator1() {
  var value1 = 0;
  var value2 = 0;

  this.read = function(v1, v2) {
    value1 = v1;
    value2 = v2;

  };
  this.sum = function() {
    return value1 + value2;
  }
  this.mul = function() {
    return value1 * value2;
  }

}

//Достаточно непростая задачка на конструктор
function Calculator() {
  var v1 = 0;
  var v2 = 0;

  //еще можно заранее создать служебный обьект в который и будем помещать методы
  this.addMethod = function(name, func) {
    this[name] = func;
  };

  this.calculate = function(str) {
    var str1 = '';
    var str2 = '';
    var method = '';
    for (var i = 0, acc = ''; i < str.length; i++) {
      if (str.charAt(i) == ' ') {
        acc += str.charAt(i);
        continue;
      }
      if (acc == '') {
        str1 += str.charAt(i);
      } else if (acc == ' ') {
        method += str.charAt(i);
      } else if (acc == '  ') {
        str2 += str.charAt(i);
      }


    }
    v1 = +str1;
    v2 = +str2;
    return this[method](v1, v2);
  };

}

var cal = new Calculator();

cal.addMethod("+", function(a, b) {
  return a + b;
});
cal.addMethod("*", function(a, b) {
  return a * b;
});
cal.addMethod("/", function(a, b) {
  return a / b;
});
cal.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});
//console.log(cal.calculate('2 ** 3'));

//ГЕТТЕРЫ И СЕТТЕРЫ
//get возвращает рез своей ф-ции в свойстве для которого обьявлен
//set задает значение для свойства, через параметр, который передается внутрь функции. т.е обьявленая через set доллжна принимать аргумент
// и она получит этот арг через =
// пример для литерала
var user = {
  firstName: "Вася",
  surname: "Петров"
}

Object.defineProperty(user, "fullName", {

  get: function() {
    return this.firstName + ' ' + this.surname;
  },

  set: function(value) {
    var split = value.split(' ');
    this.firstName = split[0];
    this.surname = split[1];
  }
});

user.fullName = "Петя Иванов";
// console.log(user.firstName); // Петя
// console.log(user.surname); // Иванов

//Статические методы и свойства и фабричные методы
//даже когда мы declaration функцию мы уже создаем объект, и в этот обьект можно что-то добавить(свойство, метод, и даже функцию конструктор)
// по сути фабричный метод этот функция(метод) которая вернет обьект
function Article() {
  Article.count++;

  //...
}
Article.count = 0;

Article.showCount = function() {
  console.log(this.count); // (1)
}

// использование
// Article();
// Article();
// Article();
// Article();
// Article.showCount(); // (2)


// call apply. func.call(context, arg1, arg2, ...) context становиться this для функции
// можно одалживать методы
function prArgs() {
  var join = [].join;
  var str = join.call(arguments, " "); //arguments это обьект в контексте которого будет вызван join
  console.log(str);

}
//prArgs(5, 10, 15);
//apply тоже самое что и call только принимает вторым арг массив из аргуметов а не просто перечисление
function sumArgs() {
  var reduce = [].reduce;
  var args = [].slice.call(arguments);
  return reduce.call(args, function(a, b) {
    return a + b;
  });
}
//console.log(sumArgs(1, 2));
//интересная реализация обоих
function applyAll(func) {
  return func.apply(this, [].slice.call(arguments, 1));
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}
//console.log(applyAll(mul, 2, 3, 4));


// bind привязывает функцию к контексту создавая обертку(замыкание) и это можно сохранить в переменную
// var wrapper = func.bind(context[, arg1, arg2...]); аргументы если их указать то станут перед передаваемыми непосредственно обертке
//в отличие от call apply не вызывает функцию а только создает обертку с привязкой
//заранее задавать аргументы для функции(частично или полностью) называеться каррированием
"use strict";

function ask(question, answer, ok, fail) {
  var result = "1234"
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: 'Василий',
  password: '12345',

  loginOk: function() {
    console.log(this.login + ' вошёл в сайт');
  },

  loginFail: function() {
    console.log(this.login + ': ошибка входа');
  },

  checkPassword: function() {
    ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
  }
};

// user.checkPassword();
// var vasya = user;
// user = null;
// vasya.checkPassword();

//Декораторы, главные черты декоратора я выделю, создание замыкания(обертки), во внутренней ф-ции используеться f.apply(this, arguments);
// помимо этого производяться еще какие либо действия например с аргументами
//функцию обычно следует отдекорировать, в переменную в которой когда-то было тело функции передать вызов декоратора над этой функцией
// function checkNumber(value) {
//   return typeof value == 'number';
// }
// // декоратор, проверяющий типы для f
// // второй аргумент checks - массив с функциями для проверки
// function typeCheck(f, checks) {
//   return function() {
//     for (var i = 0; i < arguments.length; i++) {
//       if (!checks[i](arguments[i])) {
//         alert("Некорректный тип аргумента номер " + i);
//         return;
//       }
//     }
//     return f.apply(this, arguments);
//   }
// }

// function sum(a, b) {
//   return a + b;
// }

// // обернём декоратор для проверки
// sum = typeCheck(sum, [checkNumber, checkNumber]); // оба аргумента - числа

// // пользуемся функцией как обычно
// alert(sum(1, 2)); // 3, все хорошо

// // а вот так - будет ошибка
// sum(true, null); // некорректный аргумент номер 0
// sum(1, ["array", "in", "sum?!?"]); // некорректный аргумент номер 1

function makeLogging(f, log) {
  function wrapper() { // еще можно создать обертку вот так
    for (var i = 0; i < arguments.length; i++) {
      log.push(arguments[i]);
    }
    return f.apply(this, arguments);
  }
  return wrapper;
}

function work(a) {
  return a;
}
var log = [];
work = makeLogging(work, log);
work(1, 2); // 1, добавлено в log
work(5);
work(5);
//console.log(log);
function fRan(x) {
  return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {
  var cArg = null;
  var cRes = null;

  return function wrapper(arg) {
    if (arg == cArg) {
      return cRes;
    }
    cArg = arg;
    cRes = f.call(this, arg);
    return cRes;
  }
}
// fRan = makeCaching(fRan);

// var a, b;

// a = fRan(1);
// b = fRan(1);
// console.log(a);
// console.log(b);

// b = fRan(2);
// console.log(b);
// b = fRan(2);
// console.log(b);


//setTimeout setInterval работают асинхронно
var timerId = setTimeout(function tick() {
  console.log("тик");
  timerId = setTimeout(tick, 2000);
}, 2000);
console.log('test');