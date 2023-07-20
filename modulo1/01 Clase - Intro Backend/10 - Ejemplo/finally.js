function dividir(a, b) {
    try {
        if (b === 0) {
            throw new Error("No es posible dividir por cero.");
        }
        return a / b;
    } catch (error) {
        console.error("Error:", error.message);
    } finally {
        console.log("El bloque finally siempre se ejecuta.");
    }
}

// Ejemplo de uso:
try {
    const resultado1 = dividir(10, 2);
    console.log("El resultado de la división es:", resultado1);

    const resultado2 = dividir(5, 0);
    console.log("El resultado de la división es:", resultado2); // Nunca se llega aquí debido a la excepción
} catch (error) {
    console.error("Excepción capturada en el bloque principal:", error.message);
} finally {
    console.log("Este bloque finally también se ejecuta en el bloque principal.");
}