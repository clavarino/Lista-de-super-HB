// 1. Crear un arreglo vacío
let listaDeSuper = [];

// 2. Agregar 3 productos directamente por índice
listaDeSuper[0] = "sal";
listaDeSuper[1] = "azucar";
listaDeSuper[2] = "yerba";

// 3. Imprimir en consola el primer elemento
console.log(listaDeSuper[0]);

// 4. Calcular la posición del último elemento
let ultimoElemento = listaDeSuper.length - 1;

// Mostrar el último producto en consola
console.log(listaDeSuper[ultimoElemento]);

// 5. Acceder al último elemento usando la variable ultimoElemento
console.log(listaDeSuper[ultimoElemento]);


// NUEVOS PASOS

// 1. Agregar 2 productos nuevos al final
listaDeSuper.push("leche");
listaDeSuper.push("pan");

// 2. Agregar 2 productos nuevos al principio
listaDeSuper.unshift("arroz");
listaDeSuper.unshift("fideos");

// 3. Imprimir la cantidad total de productos
console.log(listaDeSuper.length);

// 4. Remover el último producto y guardarlo en noHabia
let noHabia = listaDeSuper.pop();

// 5. Remover el primer producto y guardarlo en comprado
let comprado = listaDeSuper.shift();

// 6. Mostrar el tamaño final de la lista
console.log(listaDeSuper.length);