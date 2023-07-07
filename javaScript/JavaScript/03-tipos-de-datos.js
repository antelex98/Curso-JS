///TIPOS DE DATOS///

//NUMBER//
("tambien estan los llamdos 'valores numericos especiales' como: Infinity,-Infinity y NaN  ")
let n = 1234;
n = 12345.34;



//CADENAS DE TEXTO//
("Las cadenas de texto siempre tienen que llevar unas comillas, ya sean simples o dobles. ") 

const string = "Esto es asombroso";
console.log(string);
const badString1 = string;
console.log(badString1);

//Caracter de escape
const bigMouth = 'I\'s ve got no right to take place...';
console.log(bigMouth);

//Concatenacion en cadena
const userName = "Lola";
const grettin = `Hola ${userName}`;
console.log(grettin);

//Concatenacion en contexto
const button = document.querySelector("button");

function greet() {
    const name = prompt ("Cual es tu nombre?");
    alert (`Hola ${name}, mucho gusto!`);

}

button.addEventListener("click", greet);

//Concatenacion "+"
const gretting = "Hello";
const name1 = "Anthony";
console.log(gretting + ", " + name1);
//otra forma mas simplificada.
console.log(`${gretting}, ${name1}`);

//Concatenacion numeros vs cadenas
const name2 = "Xander";
const num = 234;
console.log(`${name2} ${num}`);


///INCLUIR EXPRESIONES EN CADENAS///
const song = "la chapa que vibra";
const score = 10;
const highestScore = 10;
//const output = `A mi me gusta la cancion ${song}. Le doy una puntuacion de ${(score/highestScore) * 10}.`;
//console.log(output);

///CADENAS MULTILINIAS///
const output = `Ami me gusta la cancion.
Le doy una puntuacion de 9.`;
console.log(output);
 


///NOTA///
//const badString1 = this is a text ; || error
//const badString2 = 'this is a text; || error
//const badString3 = this is a text`; || error


///EJERCICIOS///

let name = "Illya";

//alert (`Hello ${1}`) || esto regresa una cadena de texto (string) "Hello 1"

//alert (`Hello ${"name"}`) esto devuelve || ("Hello name")

alert (`Hello ${name}`);


///BOOLEAN///
("el tipo boolean solo da 2 resultados: True o False")

let test = 4 > 1;
alert(test);

///EL VALOR NULO y el valor indefinido///
let m = null
console.log(m);
let age;
alert(age);

///OBJETOS Y SIMBOLOS///
("los object se usa para almacenar una coleccion de datos y funciones. Los symbol se utiliza para identificar los object.");

///EL TIPO DE OPERADOR///
("el typeof devuelve el tipo de operador");

//otro
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum );

//otro2
const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2 );

