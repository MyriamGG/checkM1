const { LinkedList } = require('./DS');

// No modifiques nada arriba de esta linea //
/*
  EJERCICIO 1
   Agregar el método sortList al prototipo de LinkedList. Este método deberá 
   ordenar los elementos de nuestra lista enlazada de mayor a menor.
   Si la lista está vacía, debe retornar false;
   Ejemplo:
     Suponiendo que la lista actual es: Head --> [8] --> [12] --> [3] --> [16]
     LinkedList.sortList();
     Ahora la lista quedaría: Head --> [16] --> [12] --> [8] --> [3]
*/

LinkedList.prototype.sortList = function () {
  // Tu código aca:
  var arr = [];
  let current = this.head;
  let current2 = current;
 
  let i = 0;

  if (current === null) return false;

  while (current !== null){
    arr[i] = current.value;
    current = current.next;
    i = i + 1;
  }

  arr = selectionSort(arr);

  for (i = 0; i <= arr.length; i++){
    current2.value = arr[i];
    current2 = current2.next;
  }
};

function selectionSort(array) {

  for (let i = 0; i < array.length; i++){
    let max = i;
    for (let j = i+1; j <= array.length; j++){
      if (array[j] > array[max]){
          max = j;
      }
    }
    if (i !== max){
      let aux = array[i];
      array[i] = array[max];
      array[max] = aux;
    }
  }
  return array;
}

// No modifiques nada debajo de esta linea //

module.exports = {
  LinkedList
};