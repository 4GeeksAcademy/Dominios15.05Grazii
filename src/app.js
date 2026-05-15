import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// aqui nos encontramos con los 4 ARRAYS ANIDADOS  y dentro de el STRINGS


// Lista de pronombres que usaremos para formar los dominios
let pronoun = ['the', 'our'];

// Lista de adjetivos que se combinarán con los pronombres
let adj = ['great', 'big'];

// Lista de sustantivos que completarán el nombre del dominio
let noun = ['jogger', 'racoon'];

// Primer bucle: recorre cada pronombre del array 'pronoun'
for (let p of pronoun) {

  // Segundo bucle: recorre cada adjetivo del array 'adj'
  for (let a of adj) {

    // Tercer bucle: recorre cada sustantivo del array 'noun'
    for (let n of noun) {

      // Aquí concatenamos pronombre + adjetivo + sustantivo + la extensión .com
      // y lo mostramos en consola
      console.log(p + a + n + ".com");
    }
  }
}

// el resultado final se puede ver en la consola del navegador o en la terminal