function Car(make, model,year ) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  console.log('funcionSinNew',Car("Toyota", "Camry", '2020'))
  const myToyota = new Car("Toyota", "Camry");
  // Acceso a la propiedad "make" utilizando el operador punto
  let prop1 = "make"
  
  console.log('funcion constructora',myToyota); 
  
  // Acceso a la propiedad "model" utilizando la notación de corchetes
  console.log(myToyota["model"]);
  
  // Si intentas acceder a una propiedad que no existe en el objeto obtendrás undefined
  let prop = "make"
  console.log(myToyota[prop])
  
  function Car(make, model) {
      this.make = make;
      this.model = model;
  }
  
  // Agregando el método "drive" a la función constructora "Car"
  Car.prototype.drive = function() {
      console.log("Vroom vroom! I'm driving my " + this.make + " " + this.model);
  }
  
  var myTesla = new Car("Tesla", "Model S");
  myTesla.drive(); // Output: "Vroom vroom! I'm driving my Tesla Model S"
  