//3)Construir una función que sume los elementos de una lista de enteros recursivamente.
function recursiva (n){
if(n.length ===1){
    return n [0];
} else{
    return n.pop(0) + recursiva(n);
}
}
console.log(recursiva([43,9,23,66]));