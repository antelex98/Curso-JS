///METODOS EN CADENAS///

//LENGTH//
("La length es una propuedad que devuelve la longuitud de una cadena.")

var text = "abcdfergdfgdjdsmms";
let length = text.length;
console.log(length);


///Extraccion de cadenas///
const ext =("Para extraer una parte de la cadena hay 3 formas:                                        1.slice (start, end)                            2.substring (start, end)                       3.substr (start, length)")

//SLICE//
const sli =("Extrae una parte de la cadena y devuelve la parte extraida en nueva cadena, este puede recibir 2 valores.Los valores negativos recorreran las posiciones a la inversa ,es decir, de atras hacia adelante.")

text = "pelota, balon, esfera"
let slice_star= text.slice(2,9)
//console.log(slice_star); 

//SUBSTRING//
const sus = ("Es parecido al slice pero lo que los diferencia es que los valores iniciales y finales inferiores a 0 se tratan como 0, es decir, que los numeros negativos se tomaran como la posicion 0, si omites el segundo parametro substring cortara el resto de la cadena.")

text = "pelota, balon, esfera"
let str = text.substring (2 , 12)
//console.log(str);

//SUBSTR//
const subs =("Es parecido al slice pero lo que lo diferencia es que el segundo parametro hace referencia a la longuitud de la cadena,si omites el segundo parametro la cadena se cortara en la posicion dada y si el primer numero es negativo esta contara desde atras hacia adelante.")

text = "pelota, balon, esfera"
let subst = text.substr(7,6)
//console.log(subst);


///SUSTITUCION DE CADENA///
const sust=("El 'replace' remplaza un valor especifico por otro.")
const susnt = ("el replace no remplaza una cadena crea una nueva, y el mismo solo remplaza la primera coiencidencia, tambien este distingue entre mayusculas y minusculas.")
const susnt2 = ("Para remplazar todas las coincidencias utilize /palabra/g")

text = "Es parecido al slice pero lo que lo diferencia es que el segundo parametro hace referencia a la longuitud de la cadena!"
var rep = text.replace("slice", "SLICE")
//console.log(rep);
rep = rep.replace("SLICE", "piedra")
//console.log(rep);
rep = rep.replace(/es/g, "is")
//console.log(rep);

///CONVERSION DE MAYUSCULAS A MINUSCULA Y VICEVERSA///
const conMym = ("una cadena se puede cambia a mayusculas con 'toUpperCase()', y para minuscula es 'toLowerCase()'.")

var text1 = "Paola pola pola en polo pola el polo"
let text2 = text1.toUpperCase()
//console.log(text2);
let text3 = text2.toLowerCase()
//console.log(text3);

///CONCATENACION///
const conca = ("une 2 o mas cadenas con el metodo 'concat()' .")

const part = "Anthony"
const part1 = "Caicedo"
const part2 = part.concat(" ", part1);
//console.log(part2);
text = "Alex".concat("ander");
//console.log(text);

///CORTAR ESPACIOS EN LAS CADENAS///
const trm = ("El metodo 'trim()' recorta los espacios en blanco a ambos lados de la cadenas.")

text = "    holisperro    "
text1 = text.trim()
//console.log(text1);
//console.log(text.length);
//console.log(text1.length);
//tambien existen la forma de eliminar los espacios especificos como al principio "trimStart()" y al final "trimEnd()".


///RELLENO DE CADENAS///
const rell= ("tambien hay metodos que te permiten rellenar espacios como al principio 'padStars()' y al final 'padEnd()'.Nota el pad rellena solo una plabra o numero (siempre y cuando sea string).")

let pass = "o";
let passed = pass.padStart(3, "h");
//console.log(passed);
let pass2 = pass.padEnd(4, "!")
//console.log(pass2);


///EXTRACCION DE CARACTERES///
const extr = ("Hay 3 formas de extraer caracteres de una cadena:    1.charAt(posicion)                                                  2.charCodeAt()                                                      3.Acceso a propiedad[] ")

//CharAt//
const charAt = ("Este metodo devuelve un indice especifico dando su posicion entre parentesis '(0)' .")

text = "Hola todos"
text1 = text.charAt(2)
//console.log(text1);

//CharCodeAt//
const charCodeAt = ("es un metodo que devuelve el Unicode del caracter en un indice especifico en una cadena. El metodo devuelve un codigo UTF-16 (un numero entero entre 0 y 65535).")

text = "Hola todos"
text1 = text.charCodeAt(1.5)
//console.log(text1);

//Acceso a propiedad//
const acceso = ("permite acceso a la propiedad [] en cadenas")

text2 = text[3]
//console.log(text2);


///DIVISION DE CADENAS///
const division = ("una cadena se puede dividir con matrices como el metodo 'split()'")

text = "hola, todo, gracias, por, ver"
text1 = text.split(",")
//console.log(text1);
text = "hola, todo, gracias, por, ver"
text2 = text.split("/")
//console.log(text2);
text = "holatodograciasporver"
text3 = text.split(":")
//console.log(text3);







