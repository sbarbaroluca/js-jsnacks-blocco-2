// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
var bicidacorsa = [ {
  nome: "Bici d'epoca",
  peso: 15
},
{
  nome: "Bici elettrica",
  peso: 13
},
{
  nome: "Bici da corsa",
  peso: 7
},
{
  nome: "Bici per bambini",
  peso: 10
},
{
  nome: "Bici da downhill",
  peso: 12
},
];

// Stampare a schermo la bici con peso minore.

var bicileggera = bicidacorsa[0];

for (var i = 0; i < bicidacorsa.length; i++) {
if (bicidacorsa[i].peso < bicileggera.peso) {
  bicileggera = bicidacorsa[i];
}
}

console.log("La bicicletta più leggerà è: ", bicileggera);
