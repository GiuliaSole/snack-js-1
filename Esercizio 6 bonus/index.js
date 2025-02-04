const studenti = [
    { nome: "Anna", eta: 17 },
    { nome: "Marco", eta: 22 },
    { nome: "Laura", eta: 19 },
    { nome: "Giorgio", eta: 16 }
];
  
let maggiorenni = studenti.filter((studente) => {
    return studente.eta >=18
});
maggiorenni.forEach((studente) => {
    console.log(`Lo studente ${studente.nome} è maggiorenne`)
});