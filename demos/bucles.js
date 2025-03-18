//bucle do-while que ejecuta el codigo al menos 1 vez y mostrara los numero del 0 al 9 para este ejemplo
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

//bucle while, este solo mostrara el numero 11, pero primero evalua antes de correr el codigo alguna vez

let j = 11;

while (j < 12) {
  console.log(j);
  j++;
}

//bucle for,
let languages = ['Spanish', 'Catalan', 'English', 'Italian', 'Deutsch', 'JS', 'PHP'];

console.log('for (let i = 0; i < languages.length; i++)');
for (let i = 0; i < languages.length; i++) {
  console.log(languages[i]);
}

console.log('for (let i in languages)');
for (let i in languages) {
  console.log(languages[i]);
}

console.log('for (let language of languages)');
for (let language of languages) {
  console.log(language);
}

//Si necesitas salir de un bucle despues de cierto parametro puedes usar un if y dentro de este un "break" para salir de los bucles
