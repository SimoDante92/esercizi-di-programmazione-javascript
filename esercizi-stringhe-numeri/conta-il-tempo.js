/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

var secTot = 12560;

var ore = secTot/3600;

ore = Math.floor(ore);

var minuti = (secTot - (ore * 3600))/60;

minuti = Math.floor(minuti);

var secondi = (secTot - (ore * 3600) - (minuti * 60));

console.log(ore + " ore, "+ minuti + " minuti, " + secondi + " secondi.");