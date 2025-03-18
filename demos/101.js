// ejemplos de string
const role = 'Teacher';

console.log(role);

/*
Multilinea de comentario

*/
//una sola linea de comentario

const teacherName = 'Jordi';

const phrase1 = 'The name of the teacher is ' + teacherName; // con el simbolo + puede concatenar strings

const phrase2 = `The name of the teacher is ${teacherName}`; // Con los backticks podemos interpolar variables dentro de un string

console.log(phrase1, phrase2, `phrase1 === pharase2: ${phrase1 === phrase2}`);

let keyboardItem = {
  name: 'QWERT',
  price: '32.99',
  ISOCode: 'ES',
  units: 2,
  OS: ['MAC', 'Linux', 'Windows'],
};

/*
En JSON

{
  "name": 'QWERT',
  "price": '32.99',
  "ISOCode": 'ES',
  "units": 2,
  "OS": ['MAC', 'Linux', 'Windows'],
};
Las claves siempre tienen que ser strings 

*/

console.log(`The name of the Keyboard is: ${keyboardItem.name}`);

//cambiar propiedad de un objeto

keyboardItem.ISOCode = 'IT';

console.log(`The new ISOCode value for keyboardItem is: ${keyboardItem.ISOCode}`);

//Teneer en cuenta que comparando un string con un numero con >= nos da como un TRUE debido a que estamos solo comparando valor y no tipo de la variable

if ('5' >= 5) {
  console.log(`'5' >= 5`);
} else {
  console.log(`Pues no es verdad que '5' >= 5`);
}
