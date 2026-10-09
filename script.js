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

 // 1. Función para mostrar los productos numerados
function logItems(arreglo) {
    arreglo.forEach(function(producto, indice) {
        console.log(indice + ": " + producto);
    });
}

// 2. Súper App interactiva
let comando = "";

while (comando !== "salir") {
    comando = prompt("¿Qué querés hacer? Escribí: nuevo, listar, borrar o salir");

    if (comando === null) {
        break;
    }

    comando = comando.toLowerCase();

    if (comando === "nuevo") {
        let producto = prompt("¿Qué producto querés agregar?");

        if (producto !== null && producto !== "") {
            listaDeSuper.push(producto);
            console.log("Producto agregado: " + producto);
        }

    } else if (comando === "listar") {
        logItems(listaDeSuper);

    } else if (comando === "borrar") {
        logItems(listaDeSuper);

        let indice = Number(prompt("Escribí el índice del producto que querés borrar"));

        if (Number.isInteger(indice) && indice >= 0 && indice < listaDeSuper.length) {
            let eliminado = listaDeSuper.splice(indice, 1);
            console.log("Producto eliminado: " + eliminado[0]);
        } else {
            console.log("Índice no válido");
        }

    } else if (comando === "salir") {
        console.log("Saliste de la Súper App");

    } else {
        console.log("Comando no válido. Escribí: nuevo, listar, borrar o salir");
    }
}