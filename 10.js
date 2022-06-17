
// EJERCICIO 10
// Implementar la función insertAndSort que recibe un arreglo y un objeto y retorna
// un arreglo ordenado de menor a mayor con los números del array y con
// los números de los valores del objeto.
// Para el ordenamiento NO usar la función sort de JavaScript. Deben usar alguno de los
// algoritmos de ordenamiento que se vieron en clase.
// Ejemplo:
// insertAndSort([4,8,13], {a:2, b:1, c:5}) ----> Debería retornar [1, 2, 4, 5, 8, 13]

function insertAndSort(array, obj) {
  // Tu código acá
  for (const prop in obj) {
    array.push(obj);
  
    return bubbleSort(array);
  }
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  let swap = true;

  while (swap){
    swap = false;

    for ( let i = 0; i < array.length - 1; i++){
      if (array[i] > array[i+1]){
        let aux = array[i];
        array[i] = array[i+1];
        array[i+1] = aux;
        swap = true;
      }
    }
  }
  return array;
}

//⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = insertAndSort;
