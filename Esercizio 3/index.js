const prodotti = [
  { nome: 'Smartphone', prezzo: 800 },
  { nome: 'Cuffie', prezzo: 50 },
  { nome: 'Mouse', prezzo: 30 },
  { nome: 'Monitor', prezzo: 120 }
];
let filtro= prodotti.filter((prodotto) =>{
  return prodotto.prezzo <100
});
console.log(filtro)