/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/


/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const prodotti = [
   {
      nome: "Cuffie wireless con cancellazione del rumore",
      categoria: "Elettronica",
      prezzo: 89.99,
      rating: 4.2,
      immagine: "Cuffie",
      disponibile: true
   },
   {
      nome: "Tablet 10 pollici 64GB",
      categoria: "Elettronica",
      prezzo: 199.00,
      rating: 4.7,
      immagine: "Tablet",
      disponibile: true
   },
   {
      nome: "Il romanzo dell'anno",
      categoria: "Libri",
      prezzo: 14.90,
      rating: 4.0,
      immagine: "Libro",
      disponibile: true
   },
   {
      nome: "Zaino da viaggio 30L impermeabile",
      categoria: "Abbigliamento",
      prezzo: 49.99,
      rating: 4.3,
      immagine: "Zaino",
      disponibile: true
   },
   {
      nome: "Lampada LED da scrivania orientabile",
      categoria: "Casa",
      prezzo: 29.50,
      rating: 3.9,
      immagine: "Lampada",
      disponibile: true
   },
   {
      nome: "Smartwatch fitness con GPS",
      categoria: "Elettronica",
      prezzo: 119.00,
      rating: 4.4,
      immagine: "Smartwatch",
      disponibile: true
   },
   {
      nome: "Mouse ergonomico wireless",
      categoria: "Elettronica",
      prezzo: 24.90,
      rating: 4.1,
      immagine: "Mouse",
      disponibile: true
   },
   {
      nome: "Caffettiera moka 6 tazze",
      categoria: "Casa",
      prezzo: 22.00,
      rating: 4.6,
      immagine: "Caffettiera",
      disponibile: true
   },
   {
      nome: "Maglietta basic in cotone",
      categoria: "Abbigliamento",
      prezzo: 12.99,
      rating: 4.0,
      immagine: "Maglietta",
      disponibile: true
   },
   {
      nome: "Cuffie con filo",
      categoria: "Elettronica",
      prezzo: 9.99,
      rating: 3.8,
      immagine: "Cuffie con filo",
      disponibile: false
   },
   {
      nome: "Libro di cucina",
      categoria: "Libri",
      prezzo: 19.90,
      rating: 4.5,
      immagine: "Libro di cucina",
      disponibile: true
   },
   {
      nome: "Set di tazze da colazione",
      categoria: "Casa",
      prezzo: 16.50,
      rating: 4.2,
      immagine: "Tazze",
      disponibile: true
   }
];

console.log(prodotti);



/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
