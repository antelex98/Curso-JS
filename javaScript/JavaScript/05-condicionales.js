///CONDICIONALES///
const condicionales = ("Son intrucciones que le damos a la maquina para que realize una determinada accion en caso de que esta sde cumpla o no.")


//COMPARATIBAS//
const COMPARATIBAS = ("Son operadores que usan simbolos para asegurarse de que la accion cumpla la declaracion requerida esto son: mayor que >, menor que <, mayor igual que >=, menor igual que <=, la igualdad ==, no es igual != y la igualdad estricta (===).|| Todas las repuestan devuelven valores booleanos (true o false) ")

//Mayor que//
var a = 6
var b = 3
console.log(a>b, a<b, a>=b,a<=b,a==b,a!=b,a === b);

//Menor que//
//console.log(a < b);

//Mayor o igual que//
//console.log(a >= b);

//Menor igual que//
//console.log(a <= b);

//Igualdad//
//console.log(a == b);

//No es igual//
//console.log(a != b);

//La igualdad estricta//
//console.log(a === b);



//COMPARATIVAS EN CADENAS//
const COMP_cadenas = ("Esto se usa para ver si la longuitud de una cadena es igual a otra.")

//alert("b" > "c"); || False
//alert("b" < "c"); || true
//alert("b" == "c");|| true


//COMPARACION DE DIFERENTE TIPO//
const COMP_d_tipo = ("Esto permite compara diferente pero a todos los datos los combierte en numero")

//alert("2" > 1) || true 
//alert("2" < 1) || false

//Ejercicio
let num1 = 0;
//alert(Boolean(num1)); || false
let num2 = "0";
//alert(Boolean(num2)); || true
//alert(num1 == num2);  || true


//Ejercicio2
//console.log(5>4, "apple" > "pineapple", "2" > "12"); || true false true
//alert(undefined == null); || true
//alert(undefined === null); || false
//alert(null == "*\n0\n"); || false


///DECLARACIONES IF, ELSE, ELSE IF
const declaracion = ("Estas son formas de decirle al codigo que se comporte de una manera u otra de una de las condiciones se cumplan")

let d_if = ("El 'if' se usa para decir que si una declaracion es correcta")

let d_else = ("el 'else' se usa para decir que no es correcta")

let d_elif = ("Se usa para comprobar si el primer 'if' no es correcto")

//Ejercicio

let hour = 21
if (hour< 12) {
    //alert("Buenos Dias");
}else if (hour <= 18){
    //alert("Buenas tardes");
}else{
    //alert("Bunas noches");
}


//SWITCH//
let d_switch = ("Es una declaracion que se usa para realizar diferentes acciones basadas en diferentes condiciones")

let d_switch2 = ("Asi es como funciona:                              1.La expresion de cambio se evalua una vez.                         2.El valor de la expresion se compara con los valores de cada caso. 3.Si hay una coincidencia se ejecuta el bloque de codigo asociado.  4.Si no hay coincidencia, se ejecuta el bloque designado predertimanado.")

let d_switch_break = ("Este es mecanismo que se usa para detener la ejecucion, si no se lo coloca este seguira iterando. ")

let d_switch_default = ("Es la palabra clave que se usa para que se ejecute el codigo si no hay coincidencias de mayusculas y minusculas. ||Ejercicio2 ")

//Ejercicio1
switch (new Date().getDay()) {
    case 0:
        day = "Domingo";
        break;
    case 1:
        day = "Lunes";
        break;
    case 2:
        day = "Martes";
        break;
    case 3:
        day = "Miercoles";
        break;
    case 4:
        day = "Jueves";
        break;
    case 5:
        day = "Viernes";
        break;
    case 6:
        day = "Sabado";
}

//Ejercicio2

switch (new Date().getDay()) {
    case 0:
        text = "Es domingo";
        break;

    case 4:
        text = "Es jueves";
        break;

    default:
        text = "Deberias ver el calendario";
}

document.getElementById("demo").innerHTML = text;

//Ejercicio3

let x = "0";
switch (x) {
    case 0:
        text = "off";
        break;
    case 1:
        text = "on";
        break;
    default:
        text = "No valido";
}






