console.log("-------------------------------------------------------");
console.log("-------------- 😎 CLASE 02 - OBJETOS 😎 --------------");
console.log("-------------------------------------------------------"); 

const persona1 = { nombre: "Homero",
                   edad: 39,
                   calle: "Av. Siempreviva 742"
                };
                   
console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.calle);
console.log(persona1);

persona1["nombre"] = "Marge";

console.log(persona1.nombre);

persona1.nombre = "Lisa";
console.log(persona1.nombre);

function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad 	 = edad;
    this.calle  = calle;
}

// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
// const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");

// console.log(persona2);

// console.log(persona1.nombre);

function Persona(miObjetoLiteral) {
    this.nombre = miObjetoLiteral.nombre;
    this.edad   = miObjetoLiteral.edad;
    this.calle  = miObjetoLiteral.calle;
}
// const homero = new Persona(
//                                 {   nombre: "Homero", 
//                                     edad: 39,                       // miObjetoLiteral
//                                     calle: "Av.Siempreviva 742" 
//                                 }
//                             );

const marge = new Persona(
                                {
                                    nombre: "Marge",
                                    edad: 36,
                                    calle: "Av.Siempreviva 742" 
                                }
                         );

// console.log(homero);
console.log(marge);

let cadena = "HOLA MUNDO";

console.log(typeof cadena);

// Posicion
console.log(cadena.charAt(0));

// Longitud de una cadena caracteres
console.log(cadena.length);

// Convertir en mayusculas
console.log(cadena.toUpperCase());

// Convertir en mayusculas
console.log(cadena.toLocaleLowerCase() === cadena.toUpperCase());

function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad   = edad;
    this.calle  = calle;
    this.hablar = function hablar(){ console.log("HOLA SOY "+ this.nombre)}
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");

persona1.hablar(); 
persona2.hablar();


class Persona{
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad   = edad;
        this.calle  = calle;
    }

    hablar(){
        console.log("HOLA SOY "+ this.nombre);
    }

    obtenerEdad(edad){
        console.log("La edad de: " + this.nombre + " es: " + edad);
    }

    
}

const homero = new Persona("Homero", 39, "Av. Siempreviva 742");
const tutoraLisa = new Persona("Lisa", 35, "asdas");

console.log(homero.nombre);
tutoraLisa.hablar()

tutoraLisa.obtenerEdad(20);


//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log( "nombre" in homero);
//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log( "origen" in homero);
//recorremos todas las propiedades del objeto con el ciclo for...in
for (const propiedad in homero) {
    console.log(homero[propiedad]);
}

for (const i in tutoraLisa) {
    console.log(tutoraLisa[i]);
}


class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }

    mostrarIva(iva){
        console.log("sumaIva(): ", iva);
    }

    sumaIva() {
        this.precio = this.precio * 1.21;
        this.mostrarIva(this.precio);
    }
    
    vender() {
        this.vendido = true;
    }

}
const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");

console.log(producto1.nombre);
producto1.sumaIva();
producto2.sumaIva();
producto1.vender();
console.log(producto1.precio);
console.log(producto2.precio);