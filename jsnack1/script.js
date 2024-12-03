let numero1 = prompt("inserisci il primo numero:")

let numero2 = prompt("inserisci il secondo numero:")

if (numero1 > numero2) {
    console.log(`il numero più grande è  ${numero1}`);
} else if (numero2 > numero1) {
    console.log(`il numero più grande è  ${numero2}`);
} else {
    console.log("i numeri sono uguali")    
}