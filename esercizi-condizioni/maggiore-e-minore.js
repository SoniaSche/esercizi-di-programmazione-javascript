/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  http://www.imparareaprogrammare.it
*/

let a = prompt('Inserisci il primo numero');
let b = prompt('Inserisci il secondo numero');
let c = prompt('Inserisci il terzo numero');
let d = prompt('Inserisci il quarto numero');

let max = Math.max(a, b, c, d);
let min = Math.min(a, b, c, d);

console.log(`Il numero maggiore è ${max}, il numero minore è ${min}`);