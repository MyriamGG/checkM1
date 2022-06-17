const { LinkedList } = require('./DS');
// No modifiques nada arriba de esta linea //
  
/*
EJERCICIO 2
Agregar el método simplifyList al prototipo de LinkedList. Este método deberá 
filtrar los elementos repetidos de nuestra lista enlazada y crear una nueva lista
 con los elementos 
extraídos para finalmente reemplazar la lista original.
Si la lista está vacía, debe retornar false
Ejemplo:
    Suponiendo que la lista actual es: Head --> [2] --> [5] --> [1] --> [5] --> [7] --> [2] --> null
    lista.simplifyList();
    Ahora la lista resultante es: Head --> [2] --> [5] --> [1] --> [7] --> null
ACLARACIÓN: Se debe reemplazar la lista original por la nueva.
Pista: Podes usar el metodo search() ya incorporado dentro del prototype de LinkedList
  */

LinkedList.prototype.simplifyList = function () { 
  // Tu código aca:
  // crear una lista nueva
  var nuevalista = new LinkedList();
  var nuevoNodo = new Node();

  let current = this.head;
  let current2 = nuevalista.head;

  // antes de agregar un nuevo nodo a la lista se debe verificar que no exista, usando search
  while (current !== null){
    let datobuscado = LinkedList.search(current.value);
    if (datobuscado === null) {
        //if está vacía

        if (current2 === null){
           this.head = nuevoNodo;
         }
          else {
            // Si no está vacía

            while (current2.next){
               current2 = current2.next;
            }
            current2.next = nuevoNodo;
          }
      }
      current = current.next;
  }
  return nuevalista;
}



 



// No modifiques nada debajo de esta linea //
module.exports = {
  LinkedList
};