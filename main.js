const {createApp} = Vue 

createApp({
    data() {
        return{
            messaggio: 'Non so bene cosa scriverci',

            immagine: 'https://picsum.photos/500/400',

            testo: 'facciamo finta che questa sia una descrizione accurata'
        };
    },
}).mount('#app')

// Esercizio di oggi: Vue Hello
// nome repo: vue-hello
// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.