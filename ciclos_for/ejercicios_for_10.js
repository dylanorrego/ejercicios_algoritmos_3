//Búsqueda de índice: Dado un arreglo de elementos, utiliza un ciclo para encontrar en qué posición (índice) se encuentra un valor específico y detén la búsqueda una vez hallado.
 
let numeros = [10, 20, 30, 40, 50, 60, 70, 80];
let buscado = 40;

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] === buscado) {
       console.log("Numero encontrado en el indice: " + i);
    }
}