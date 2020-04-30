/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/


var a = [3,5,10,2,8];

var somma = 0

for(i=0; i<a.length; i++){
  somma+=parseInt(a[i]);
  }

var media = somma/ a.length

console.log(media);


console.log("valori minori = " + a.filter( a => a<=5));


