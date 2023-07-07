///BUCLES FOR, FOR IN, FOR OF, WHILE, DO WHILE

const bucles = ("Los bucles son muy utiles en JS sirven para ejecutar el mismo codigo una y otra vez, cada vez con un valor diferente.")

//For//
const d_for = ("recorre un bloque de codigo varias veces. Crea un bucle con 3 indicaciones.las idicaciones se distancian con el ';'.")

const d_for2 = ("Asi se ejecuta:               1.La primera expresion se ejecuta (una vez) antes del bloque de codigo(opcional).          2.La segunda expresion define la condicion a ejecutar el codigo (opcional).                 3.La tercera se ejecuta(todas las veces) despues de que se halla ejecutado el codigo (opcional).")


//Ejemplo
for(let i = 0; i < cars.length; i++){
    text += cars[i] + "<br>";
}

const explicacion_ejemplo = ("la primera expresion establece una variable de que comience el ciclo (i = 0). La segunda define la condicion para que se ejecute el bucle (debe ser inferior a 5). La tercera expresion aumenta el valor (i++)cada vez que se ejecute el bloque de codigo.")


const nota_for = ("Para primera expresion si usas un 'var' para declarar una variable esta modificara el valor de esta fuera del bucle, ese no es el caso de 'let' en este caso esta no se modificara.")


//FOR (.. IN ..)//
const d_for_in = ("Es una declaracion qiue recorre las propiedades de un objeto")

//Ejemplo
const persona = {fname:"Pablo",lname:"Daura", age: 36};

let text = "";
for (let x in persona) {
    text += persona[x];
}

const explicacion_eje_for_in = ("El bloque 'in' itera en el objeto persona, cada iteracion devuelve la clave(x). La clave(x) se usa para acceder al valor clave, el valor clave es persona[x]. ")

//Matriz forEach()
const d_forEach = ("Metodo que llama a una funcion (una funcion de devolucion de llamada) una vez por cada elemento de la matriz.")

//Ejemplo
const numero = [45, 3, 24, 13, 67, 50];

let test = "";
numero.forEach(miFuncion);

function miFuncion(value){
    test+= value;
}


//FOR (.. OF ..)//
const d_for_of = ("Recorre los valores de un objeto ya sea este un array, strings, Map, NodeList entre otros")

//Ejemplo
const auto = ["BMW", "VOLVO", "DUGATII"];

let pat = "";
for (let x of auto){
    pat += x;
}



///CICLO WHILE///
const d_while = ("Recorre un bloque de codigo siempre de una condicion especifica es verdadera.")

//Ejemplo
var texts;
while (i < 10) {
    texts += "El numero es" + i;
    i++;
}


///DO WHILE
const d_do_while = ("Es una variante del while, este ciclo ejecuta el bloque de codigo una vez, antes de verificar si una condicin es verdadera, luego repite el ciclo siempre que la condicion sea verdadera.")

//Ejemplo
do{
    texts += "El numero es" + i;
    i++;
}
while (i < 10)

