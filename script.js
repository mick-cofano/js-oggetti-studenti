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
