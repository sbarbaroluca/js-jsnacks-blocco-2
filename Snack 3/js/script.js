// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
// La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

function numericompresi (arr, min, max) {
    
    for (var i = min; i < max - 1; i++) {
        arr.push(i + 1);
    }
    
    return arr;
}

var numeri = [];
numericompresi (numeri, 1, 50);

console.log(numeri);
