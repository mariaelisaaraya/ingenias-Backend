class Automovil {
    static recuento = 0;
    constructor(marca, modelo, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        Automovil.recuento++;
    }

    describirAutomovil() {
        return `Este automóvil es un ${this.marca} ${this.modelo} de color ${this.color}.`;
    }
    static mostrarRecuento() {
        return `Hasta ahora, se han creado ${Automovil.recuento} automóviles.`;
    }
}


let miAutomovil = new Automovil('Toyota', 'Corolla', 'Rojo');
console.log(miAutomovil.marca); // Toyota
console.log(miAutomovil.modelo); // Corolla
console.log(miAutomovil.color); // Rojo
console.log(Automovil.recuento); // 1

let tuAutomovil = new Automovil('Honda', 'Civic', 'Azul');
console.log(tuAutomovil.describirAutomovil()); 
// Este automóvil es un Honda Civic de color Azul.

console.log(Automovil.recuento); // 2
console.log(Automovil.mostrarRecuento()); // Hasta ahora, se han creado 2 automóviles.