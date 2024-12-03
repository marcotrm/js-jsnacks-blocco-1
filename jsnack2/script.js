const invitati = ["marco", "riccardo", "alessandra", "alessandro", "domenico"];

 let userName = prompt("inserisci il tuo nome");

 userName = userName.toLowerCase();

 let finded = false;

 for (let i = 0; i < invitati.length; i++) {
    if (invitati[i] === userName) {
        finded = true;
    }
 }

 if (finded) {
    alert((`Benvenuto/a ${userName} alla festa di Gatsby!.`));
    console.log(`Benvenuto/a ${userName} alla festa di Gatsby!.`);
} else {
    alert((`Mi dispiace, ${userName}, non sei invitato/a.`));
    console.log(`Mi dispiace, ${userName}, non sei invitato/a.`);
}
