// Creare un oggetto che descriva uno studente con le seguenti proprietà:
// nome, cognome e età. Stampare a schermo attraverso il for tutte le proprietà.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere
// un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// creazione dell'oggetto per la descrizione dello studente
var descrizione = {
  'nome': 'michele',
  'cognome': 'cofano',
  'età': '27'
}


// stampa a schermo con il ciclo FOR tutte le proprietà
for (var dati in descrizione) {
  alert('Studente ' + dati + ': ' + descrizione[dati]);
}


// Creazione array di oggetti di studenti
var studenti = [] //array vuoto che verrà riempito con gli elementi dopo

// array vuoti che verranno pushati nell'array "studenti"
var studenteUno = {};
var studenteDue = {};
var studenteTre = {};
var studenteQuattro = {};

// si esegue il push degli oggetti nell'array studenti
studenti.push(studenteUno)
studenti.push(studenteDue)
studenti.push(studenteTre)
studenti.push(studenteQuattro)

// e adesso si procede impostando il valore dei vari oggetti
studenteUno.nome = 'Ottavio';
studenteDue.nome = 'Alfredo';
studenteTre.nome = 'Enrico';
studenteQuattro.nome = 'Massimo';

studenteUno.cognome = 'Fogliata';
studenteDue.cognome = 'Guida';
studenteTre.cognome = 'Gennari';
studenteQuattro.cognome = 'Bemmini';

studenteUno.eta = '33';
studenteDue.eta = '37';
studenteTre.eta = '30';
studenteQuattro.eta = '28';

// ciclo for per stampare in console.log i dati degli studenti (nome + cognome)
for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i].nome + " " +  studenti[i].cognome);
}


// Dare la possibilità all’utente attraverso 3 prompt
// di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

//creo un nuovo oggetto vuoto che pusherò all'interno dell'array precedente
var nuovoStudente={}

studenti.push(nuovoStudente); // pusho l'oggetto all'interno del precedente array
console.log(studenti)

// prompt che servono per riempire gli oggetti
var nomeUtente = prompt("inserisci il nome dell'utente");
var cognomeUtente = prompt("inserisci il cognome dell'utente");
var etaUtente = prompt("inserisci l'età dell'utente");

nuovoStudente.nome = nomeUtente;
nuovoStudente.cognome = cognomeUtente;
nuovoStudente.eta = etaUtente;

console.log("il nuovo oggetto è:" , nuovoStudente);
// alert('Benvenuto al nuovo studente: ' , nuovoStudente);
