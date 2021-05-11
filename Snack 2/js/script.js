// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
// Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
// Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

function getRandomNumber() {
  return Math.floor(Math.random() * (80 - 1 + 1)) + 1;
}

var squadreCampionato = [{
      nome: "Inter",
      puntifatti: 0,
      fallisubiti: 0
  },
  {
      nome: "Milan",
      puntifatti: 0,
      fallisubiti: 0
  },
  {
      nome: "Juventus",
      puntifatti: 0,
      fallisubiti: 0
  },
  {
      nome: "Roma",
      puntifatti: 0,
      fallisubiti: 0
  },
  {
      nome: "Napoli",
      puntifatti: 0,
      fallisubiti: 0
  }
];

var nuovoArray = [];

for (var i = 0; i < squadreCampionato.length; i++) {
  squadreCampionato[i].puntifatti = getRandomNumber();
  squadreCampionato[i].fallisubiti = getRandomNumber();
  nuovoArray.push(squadreCampionato[i].nome, squadreCampionato[i].fallisubiti);
}

console.log(nuovoArray);
