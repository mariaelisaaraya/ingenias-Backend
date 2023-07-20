//Codigo para que puedan probar comentando y descomentando

// ---------------------------
// Saludos con funciones 
// ---------------------------
let nombreIngresado = prompt("Ingrese nombre");
let apellidoIngresado = prompt("Ingrese su apellido");

function saludar(nombre, apellido, edad){
    console.log("Hola su nombre es: " + nombre + " " + apellido + " Su edad es: " +  edad);
}

saludar(nombreIngresado, apellidoIngresado , 30);

function solicitarNombre(){
    let nombreIngresado = prompt("Ingresar nombre");
    alert("El nombre ingresado es " + nombreIngresado);
} 

solicitarNombre();
solicitarNombre();
solicitarNombre();

// ---------------------------
// SUMAR Y RESTAR 
// ---------------------------

// Declaración de variable para guardar el resultado de la suma
let result = 0;
//Función que suma dos números y asigna a resultado
function sumar(primerNumero, segundoNumero) {
    result = primerNumero + segundoNumero; // result <- 9
}
//Función que muestra result por consola
function mostrar(texto, mensaje) {
    console.log(texto +  " " + mensaje);
}
//Llamamos primero a sumar y luego a mostrar
sumar(6, 3);            
mostrar("El resultado es: ", result);

function sumar(primerNumero, segundoNumero) { // primerNumero <- 5, segundoNumero <- 8
    return primerNumero + segundoNumero; // <- (5 + 8) <- 13
}

let res = sumar(5, 8);
console.log(res);

function calculadora(numero1, numero2, operacion) { // <- numero1 <- 2 , numero2 <- 2, operacion <- "*"
    let resultado = 0; // <- 0
    switch (operacion) { // <- "*"
        case "+": // <- "+" === "*" ? No, entonces: Nada.
            resultado =  numero1 + numero2; 
            console.log(resultado);
            break;
        case "-": // <- "-": === "*" ? No, entonces: Nada.
            resultado = numero1 - numero2;
            console.log(resultado);
            break;
        case "*": // <- "*" === "*" ? Si, entonces: 
            resultado =  numero1 * numero2; // resultado <- (2 * 2) <- 4
            console.log(resultado);
            break;
        case "/":
            resultado = numero1 / numero2;
            console.log(resultado);
            break;
        default:
            return console.log("No se ingreso operación valida.");
            break;
    }
}

calculadora(2,5,"+"); // <- 7
calculadora(2,2,"*"); // <- 4
calculadora(3,2,"A");


function sumar(primerNumero, segundoNumero) {
    let resultado = primerNumero + segundoNumero;
}
//No se puede acceder a la variable resultado fuera del bloque
console.log(resultado);

let resul = 0; // resul <- 0
function sumar(primerNumero, segundoNumero) { //  primerNumero <- 5, segundoNumero <- 6
    resultado = primerNumero + segundoNumero; // resul <- (5 + 6 ) <- 11
}

sumar(5,6);
sumar(1,3);
//Se puede acceder a la variable resultado porque es global
console.log(resul); // <- 11

function resta(unNumero, otroNumero){ // unNumero <- 5, otroNumero <- 1
    resul = unNumero - otroNumero;
}

resta(5,1);


function saludarPor(apodo){
    console.log("Hola desde saludarPor(): " + apodo);
}

saludarPor("Lisa");

function saludarCompleto(nombre, apellido){
    console.log("Hola desde saludarCompleto(): " + nombre + " "+ apellido);
}

saludarCompleto("Lisa", "Araya");

// ---------------------------
// Operaciones con funciones
// ---------------------------
let resultado = 0;

function suma(a,b){
    resultado = parseInt(a) + parseInt(b);
}

function resta(a,b){
    resultado = a - b;
}

function multiplicacion(a,b){
    resultado = a * b;
}

function division(a,b) {
    resultado = a / b;
}

function mostrar(mensaje, operacion){
    console.log(mensaje + operacion);
}

suma(2,3);
mostrar("La suma es: ", resultado);
resta(3,1);
mostrar("La resta es: ", resultado);
multiplicacion(3,5);
mostrar("La multiplicacion es: ", resultado);
division(3,2);
mostrar("La division es: ", resultado);

// --------------------------------------------------------------
// Operaciones con funciones con datos ingresados por el usuario
// --------------------------------------------------------------

let num1 = prompt("Ingrese un numero");
let num2 = prompt("Ingrese otro numero");

function suma(a,b){
    let resul = console.log("La suma es: " + (parseInt(a) + parseInt(b)));
    return resul;
}

function resta(a,b){
    let resul = console.log("La resta es: " + (a - b));
    return resul;
}

function multiplicacion(a,b){
    let resul = console.log("La multiplicacion es: " + (a * b));
    return resul;
}

function division(a,b) {
    let resul = console.log("La division es: " + (a / b));
    return resul;
}

suma(num1, num2);
resta(num1, num2);
multiplicacion(num1 , num2);
division(num1, num2);