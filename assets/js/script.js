/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const nome = "Lorenzo";
const cognome = "Melis";

console.log(`Ciao, mi chiamo ${nome} ${cognome}`);

/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 10;
let b = 3;

console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);
console.log(`${a} ** ${b} = ${a ** b}`);

/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const annoNascita = 1997;
const annoCorrente = 2026;

console.log(`Oggi hai ${annoCorrente - annoNascita} anni.`);
console.log(`Tra 10 anni avrai ${annoCorrente - annoNascita + 10} anni.`);
console.log(`5 anni fa avevi ${annoCorrente - annoNascita - 5} anni.`);

/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let minEta = 18;

console.log(`Età: 25 - Maggiorenne: ${minEta >= 18}`);

/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myString = "Pippo";
let myNumber = 7;
let myBoolean = true;
let vuoto =
  null; /* typeof null ha valore intenzionale e si usa quando non sappiamo quando arriverà questo valore. Inoltre,occupa uno stack di memoria. */
let nonDefinito;

console.log(`testo è di tipo: ${typeof myString}`);
console.log(`numero è di tipo: ${typeof myNumber}`);
console.log(`true è di tipo: ${typeof myBoolean}`);
console.log(`null è di tipo: ${typeof vuoto}`);
console.log(`nonDefinito è di tipo: ${typeof nonDefinito}`);

/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = 5;
let stringa = "5";

console.log(
  `numero == stringa: ${numero == stringa}`,
); /* questo mi ritorna true perche' il doppio segno di uguale, prende come riferimento il valore e non il tipo, perciò essendo il valore in entrambi i casi 5, allora mi ritornerà true. */
console.log(
  `numero === stringa ${numero === stringa}`,
); /* questo mi ritorna false invece, perche' il triplice segno di uguale, prende come riferimento sia il valore che il tipo, perciò essendo il valore in entrambi i casi 5, ma uno è di tipo number e l'altro di tipo string, allora mi ritornerà false. */

/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3
   - "5" - 3
   - true + 1
   - "10" * "2"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*"5" + 3 = 53;
"5" - 3 = 2;
true + 1 = 2;
"10" * "2" = 20;
*/

console.log("5" + 3);
console.log("5" - 3);
console.log(true + 1);
console.log("10" * "2");

/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n = 12;

console.log(`n è pari: ${n % 2 === 0}`);
console.log(`n è divisibile per 3: ${n % 3 === 0}`);
console.log(`n è pari E divisibile per 3: ${n % 2 === 0 && n % 3 === 0}`);

/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let A = 10;
let B = 10;
let C = 10;

const perimetro = A + B + C;
let triangle;

if (A === B && B === C) {
  triangle = "equilatero";
} else if (A === B || A === C || B === C) {
  triangle = "isoscele";
} else {
  triangle = "scaleno";
}

console.log("Triangolo " + triangle + ", perimetro " + perimetro);
