///FUNCIONES///
const FUNCIONES = "Las funciones son bloques de codigo que ejecutan una accion especifica cuando el ente lo requiera."

function myFunction() {
    alert("HELLO");
}

myFunction();

//FUNCIONES LOCALES//
const d_fun_local = "las funciones locales solo se pueden ejecutar dentro de la misma"

//Ejemplo
function myFunction() {
    alert("HELLO");
}

myFunction();


//FUNCIONES EXTERNAS//
const d_fun_ext = "esta clase de funcion puede relacionarse fuera de la misma"

//Ejemplo

let userName = 'Anthony';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage();

//PARAMETROS//
const d_parm = "las funciones pueden llevar mas de un parametro"

//Ejemplo

function showMessage(from, text) { // parameters: from, text
    alert(from + ': ' + text);
  }
  
  showMessage('Anthony', 'Hola!'); 
  showMessage('Anthony', "Que pasa?"); 


  ///NOMBRAR UNA FUNCION///

  const d_name_func = "al nombrar una funcion debe ser corto y lo mas especifico posible tambien podrias acogerte a terminologias para dar a entender algo de forma mas practica como: "

  const d_show = "La terminologia 'show' generalmente muestra algo como 'showMessage'."
  const d_get = "Este devuelve un valor 'getResult'. "
  const d_calc = "Calcula algo 'calcSum'. "
  const d_create = "Crea algo 'createUndeath'. "
  const d_check = "Comprueba algo y devuelve el valor booleano, etc 'checkClick'. "

///FUNCIONES EN FLECHA///
const d_fun_flecha = "las funciones en flecha es una forma mas simple de escribir una funcion "

//Ejemplo 
let sayHia = () => alert("Hello!");

sayHia();

//Tambien otra forma de expresarlo de forma dinamica como:

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();





