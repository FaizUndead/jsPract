function SelectionSort(A) {
  var n = A.length;
  for (var i = 0; i < n - 1; i++) {
    var min = i;
    for (var j = i + 1; j < n; j++) {
      if (A[j] < A[min]) min = j;
    }
    var t = A[min];
    A[min] = A[i];
    A[i] = t;
  }
  return A; // На выходе сортированный по возрастанию массив A.
}

function InsertionSort(A) // A - массив, который нужно
{ // отсортировать по возрастанию.
  var n = A.length;
  for (var i = 0; i < n; i++) {
    var v = A[i],
      j = i - 1;
    while (j >= 0 && A[j] > v) {
      A[j + 1] = A[j];
      j--;
    }
    A[j + 1] = v;
  }
  return A; // На выходе сортированный по возрастанию массив A.
}
// Сортировка шелла
function ShellSort(A) {
  var n = A.length,
    i = Math.floor(n / 2);
  while (i > 0) {
    for (var j = 0; j < n; j++) {
      var k = j,
        t = A[j];
      while (k >= i && A[k - i] > t) {
        A[k] = A[k - i];
        k -= i;
      }
      A[k] = t;
    }
    i = (i == 2) ? 1 : Math.floor(i * 5 / 11);
  }
  return A;
}

//шейкерная 
function CocktailSort(A) //Также называют ShakerSort.
{
  var i = 0,
    j = A.length - 1,
    s = true,
    t;
  while (i < j && s) {
    s = false;
    for (var k = i; k < j; k++) {
      if (A[k] > A[k + 1]) { //менять тут
        t = A[k];
        A[k] = A[k + 1];
        A[k + 1] = t;
        s = true;
      }
    }
    j--;
    if (s) {
      s = false;
      for (var k = j; k > i; k--) {
        if (A[k] < A[k - 1]) { //и тут
          t = A[k];
          A[k] = A[k - 1];
          A[k - 1] = t;
          s = true;
        }
      }
    }
    i++;
  }
  return A;
}

var array = [5, 7, 3, 6, 2, 1, 8];
CocktailSort(array);

console.log(array);