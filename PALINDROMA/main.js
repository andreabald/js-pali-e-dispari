// - Capire se la parola inserita dall’utente è palindroma o no (e quindi output di conseguenza)

var parola = prompt('Dimmi una parola');

var caratteri = [];
caratteri = parola.split('');

var normale = '';
var inversa = '';

for (var i = 0; i < caratteri.length; i++) {
  normale += caratteri[i];
}
for (var j = (caratteri.length - 1); j >= 0; j--) {
  inversa += caratteri[j];
}

if (normale == inversa) {
  console.log('la parola è palindroma');
} else {
  console.log('La parola non è palindroma');
}

console.log(normale);
console.log(inversa);
