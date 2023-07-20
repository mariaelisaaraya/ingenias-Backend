//Ejemplo de división entre dos números y capturamos una posible excepción cuando se intente dividir por cero.

//Este código define una función dividir que toma dos números, 
//a y b, y devuelve el resultado de la división de a entre b. Si 
//b es igual a cero, lanzará una excepción con un mensaje de error.

function dividir(a, b) {
    if (b === 0) {
        throw new Error("No es posible dividir por cero.");
    }
    return a / b;
}

try {
    const resultado = dividir(10, 2);
    //const resultado = dividir(10, 0);
    console.log("El resultado de la división es: " + resultado);
} catch (error) {
    console.error("Error:", error.message);
}

//Si intentamos dividir 10 entre 0, se obtiene el mensaje de error 
//"Error: No es posible dividir por cero." 
//impreso en la consola debido al bloque catch. 
//Esto demuestra cómo el try y catch pueden manejar excepciones 
//y proporcionar una forma de manejar errores en tu código.