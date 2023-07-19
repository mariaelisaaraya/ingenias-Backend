console.log("-------------------------------------------------------");
console.log("-------------- 👩‍💻 CLASE 02 - ARRAYS 👩‍💻 ---------------");
console.log("-------------------------------------------------------"); 


// const  numeros = [1,2,3,4,5];
// let resultado1  = numeros[0] + numeros[2]; // 1 + 3 = 4; 
// let resultado2  = numeros[1] + numeros[4]; // 2 + 5 = 7;
// let resultado3  = numeros[1] + numeros[1]; // 2 + 2 = 4;

// console.log(resultado1);
// console.log(resultado2);
// console.log(resultado3);

// const numeros = [1, 2, 3, 4, 5];
// for (let index = 0; index < 5; index++) {
//     alert(numeros[index]);
// }

// let miFuncion = (a,b) => a + b;
// let forma = " redonda ";
// let tamano = 1;
// console.log ( typeof miFuncion ); //imprime function
// console.log ( typeof forma ); //imprime string 
// console.log ( typeof tamano ); //imprime number
// console.log("Forma antes del trim() : ", forma);


// if (typeof forma == 'string')
// forma = forma.trim();

// console.log("Forma luego del trim() : ", forma);


// const numeros = [1,5,8,100,2];
// console.log('Tipo de dato del array numeros: ', typeof numeros );

// console.log(numeros.length);


// const miArray = ["marca", 3 ,"palabra"];
// console.log( miArray.toString() ); //imprime "marca,3,palabra"
// console.log("Longitud de miArray: ", miArray.length); // -> 3

// miArray.push("nombre");
// console.log("Longitud de miArray: ", miArray.length); // -> 4 ["marca", 3 ,"palabra", "nombre"]
// // ["marca", 3 ,"palabra", "nombre"]
// let miStringConSeparador = miArray.join("-"); // <- marca-3-palabra-nombre
// console.log("miArray: ", miArray); // <- ["marca", 3 ,"palabra", "nombre"]
// console.log("Longitud de miStringConSeparador: ", miStringConSeparador.length);
// console.log(miStringConSeparador); // <- marca-3-palabra-nombre


// console.log("Longitud de miArray: ", miArray.length);

// const nombres    = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
// const masculinos = nombres.slice(1, 3); // Nuevo array desde la posición 1 a 3. <- ['Pedro', 'Miguel']
// const femeninos = ['Carla', 'Pepa', 'Romina', 'Romina'];

// const todos = femeninos.concat(masculinos);
// console.log("todos: ", todos);

// console.log(masculinos);

// const productos =   [
//                         { id: 1, producto: "Arroz" }, // <- 1 recorrido del for
//                         { id: 2,  producto: "Fideo" }, // <- 2 reccorido del for
//                         { id: 3,  producto: "Pan" } // <- 3 recorrido del for
//                     ];

// console.log("Longitud productos: ", productos.length); //<- 3

// for (const producto of productos) {
//     console.log(producto.id);
//     console.log(producto.producto);
// }


// const numeros    = [1, 2, 3, 4, 5];
// const encontrado = numeros.find(elemento => elemento > 3); //<- 4

// console.log("encontrado: ", encontrado); 


// const nombres     = ["Ana", "Ema", "Juan", "Adara"];
// const encontrado2 = nombres.find(elemento => elemento === "Ema"); //Encuentra "Ema"
// const encontrado3 = nombres.find(elemento => elemento === "Alan");//undefined

// const ordenados = nombres.sort();
// console.log(ordenados);

// console.log("encontrado2: ", encontrado2); 
// console.log("encontrado3: ", encontrado3); 


// let mayoresQue3 = numeros.filter(numero => numero > 3); // <- un nuevo array
// console.log("mayoresQue3", mayoresQue3); 

// let comienzanConA = nombres.filter(nombre => nombre.charAt(0) === "A");

// console.log("comienzanConA", comienzanConA); 

// let conLetraN = nombres.filter(nombre => nombre.includes("n"));
// console.log("conLetraN: ", conLetraN); 

// let doble = numeros.map(numero => numero * 2);
// console.log("doble: ", doble);

// let suma100 = numeros.map(numero => numero + 100);
// console.log("doble: ", suma100);



const productos =   [
                        {  id: 1,  producto: "Arroz", precio: 125 },
                        {  id: 2,  producto: "Fideo", precio: 70 },
                        {  id: 3,  producto: "Pan"  , precio: 50},
                        {  id: 4,  producto: "Flan" , precio: 100}
                    ];

                    
const buscarPan = productos.find(producto => producto.id === 3); 
console.log(buscarPan);//{id: 3, producto: "Pan", precio: 50}

const baratos = productos.filter(producto => producto.precio < 100); 
console.log(baratos); //[{id: 2,producto:"Fideo",precio:70},{id:3,producto:"Pan",precio: 50}]

const aumentos = productos.map(producto => producto.precio += 30);
console.log(aumentos); //[155, 100, 80, 130] y el valor de cada producto cambio.

const nombresProductos = productos.map(producto => producto.producto ); //<- un nuevo array transformado
console.log("nombresProductos: ", nombresProductos);


// const precios = productos.map(producto => producto.precio );
// const nuevoArray = nombresProductos.concat(precios);

// console.log("nuevoArray: ",nuevoArray);


const precioProducto = (productos) => {
    const nuevoArrayDeProductos = [];

    productos.map(producto => {
        let propiedadesProducto = {
            nombre : producto.producto,
            precio : producto.precio
        };
        nuevoArrayDeProductos.push(propiedadesProducto);
      
    })

    return nuevoArrayDeProductos;
}

precioProducto(productos);