const { BinarySearchTree } = require("./DS");
//⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

// EJERCICIO 09
// Implementar el método insertWord en el prototype de BinarySearchTree
// El método será similar al método insert ya implementado, pero en lugar
// de agregar valores numéricos al árbol, se encargará de insertar palabras
// que tomarán posición basándose en la cantidad de caracteres que posean.
//
// EJEMPLO:
//
// Iniciando con el árbol llamado arbolDePalabras:
//
//                          "Palabra"
//                            /    \
//
// Ejecutamos el método arbolDePalabras.insertWord("Perro")
//
//                          "Palabra"
//                            /    \
//                       "Perro"
//
// La palabra "Perro" se insertó en el nodo de la izquierda por tener una cantidad
// de caracteres menor a "Palabra".
//
// Ejecutamos el método arbolDePalabras.insertWord("Murciélago")
//
//                          "Palabra"
//                            /    \
//                       "Perro"  "Murciélago"
//
// Siguiendo la misma lógica, la palabra se insertó a la derecha por tener una
// cantidad de caracteres mayor.
//
// RESPUESTAS!:
// ✔️ Si el método recibe un string vacío, debe retornar false
// ✔️ Si el método recibe una palabra de tamaño igual a una palabra
// ya existente, debe retornar false.
// ✔️ La palabra debe insertarse en el lugar correspondiente y, de ser así,
// retornar el string que ha sido insertado

BinarySearchTree.prototype.insertWord = function (palabra) {
  // Tu código acá
  if (palabra.length === 0) return false;
  if (palabra.length === this.value.length) return false;
  if (palabra === this.value) return false;

  if (palabra.length > this.value.length){ // va a derecha
    if (this.right !== null){ // pregunta si el nodo tiene algo
       this.right.insertWord(palabra);
    } else { // la rama esta vacia
       this.right = new BinarySearchTree(palabra); //creo un nuevo arbol y lo pongo en la derecha
    }
   }
   if (palabra.length < this.value.length){ // va a izquierda
     if (this.left !== null){
      this.left.insertWord(palabra)
     } else {
       this.left = new BinarySearchTree(palabra); //creo un nuevo arbol y lo pongo en la izquierda
     }
   }
};

//⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = { BinarySearchTree };
