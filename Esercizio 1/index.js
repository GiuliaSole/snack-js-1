const persone = [
    { nome: 'Gino', eta: 25 },
    { nome: 'Pino', eta: 30 },
    { nome: 'Luca', eta: 22 }
  ];

  persone.forEach ((utente) => {
    console.log(`${utente.nome} ha ${utente.eta} anni`);
  })