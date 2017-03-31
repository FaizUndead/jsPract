function LinkedList(arr) {
  this.value = arr[0];
  arr.shift();

  if (arr[0])
    this.next = new LinkedList(arr);
  else
    this.next = null;
}

LinkedList.prototype.clear = function() {
  var list = this;

  function rec() {
    list.value = 0;
    if (list.next) {
      list = list.next;
      rec();
    }
  }
  rec();
}
LinkedList.prototype.getValue = function(index) {
  var list = this;

  for (var i = 0; i < index; i++) {
    list = list.next;
  }


  return list.value;
}
LinkedList.prototype.printValues = function(list) {
  //var list = this;

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
  console.log(str);
  return str;
}


var arr = [5, 10, 15];
var list = new LinkedList(arr);
var list2 = new LinkedList([4, 5, 6]);
LinkedList.prototype.printValues(list);
// list.clear();
// list.printValues();
// console.log(list.getValue(2));
// list2.printValues();
// console.log(list2.getValue(2));






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
  console.log(str);
  return str;
}