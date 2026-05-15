import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// aqui nos encontramos con los 4 ARRAYS ANIDADOS  y dentro de el STRINGS


// Lista de pronombres que usaremos para formar los dominios
let pronouns = ['the', 'our'];

// Lista de adjetivos que se combinarán con los pronombres
let adjs = ['great', 'big'];

// Lista de sustantivos que completarán el nombre del dominio
let nouns = ['jogger', 'racoon'];

// Lista de footers que completarán el nombre del dominio
let footers = ['.com', '.es', '.net']

// Primer bucle: recorre cada pronombre del array 'pronoun'
for (let pronoun of pronouns) {

  // Segundo bucle: recorre cada adjetivo del array 'adj'
  for (let adj of adjs) {

    // Tercer bucle: recorre cada sustantivo del array 'noun'
    for (let noun of nouns) {

      for (let footer of footers) {

        // Aquí concatenamos pronombre + adjetivo + sustantivo + la extensión .com
        // y lo mostramos en consola
        console.log(pronoun + adj + noun + footer);
      }
    }
  }
}
// el resultado final se puede ver en la consola del navegador o en la terminal