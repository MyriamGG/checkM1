const { LinkedList } = require('./DS');

// No modifiques nada arriba de esta linea //
/* 
  EJERCICIO 3
  Implementar el método count dentro del prototype de LinkedList que deberá retornar la suma de todos los
  valores dentro de la lista.
  
  Ejemplo:
  Dada esta lista: [4] --> [2] --> [7] -- > null
  LinkedList.count() --> 13
*/

LinkedList.prototype.count = function() {
  // Tu código aca:
 
  let actual = this.head;

  // En caso de que la lista esté vacía, retornar 0
 
  if (actual === null) return 0;

   // si no está vacía regresar la suma de los valores
  let sum = 0;

  while (actual !== null){
    sum += actual.value;
    actual = actual.next
  }

  // regresar la suma
  return sum;
}

// No modifiques nada debajo de esta linea //

module.exports = LinkedList;