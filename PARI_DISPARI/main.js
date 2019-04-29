// - L’utente sceglie pari o dispari e un numero da 1 a 5.
// Poi generiamo un numero random (sempre da 1 a 5) per il computer e dichiariamo chi ha vinto.

var scelta = prompt('Pari o dispari?');
var num_utente = +(prompt('Dimmi un numero da 1 a 5!'));
var num_pc = +(Math.floor(1+(Math.random()*5)));
var somma = +(num_utente + num_pc);


if ((somma % 2 == 0) && (scelta == 'pari')) {
  console.log('Hai vinto!');
} else if ((somma % 2 != 0) && (scelta == 'dispari')) {
  console.log('Hai vinto!');
} else {
  console.log('Hai perso!');
}

console.log('La tua scelta è stata: ' + scelta);
console.log('Il numero che hai scelto è: ' + num_utente);
console.log('Il pc ha scelto il numero: ' + num_pc);
console.log('Il totale è ' + somma + ' ed è ' + scelta + '!');
