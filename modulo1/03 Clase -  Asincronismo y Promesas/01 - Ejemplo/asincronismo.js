const datos = [
    {
        id:1,
        title:'Iron Man',
        year: 2008
    },
    {
        id:2,
        title:'SpiderMan: Homecoming',
        year: 2017
    },{
        id:3,
        title:'Avengers: Endgame',
        year: 2019
    }
  ];
  // sincronico
  // const getDatos=() => {
  //  return datos;
  // }
  // console.log(getDatos())
  
  // // asincronico  como no hay nada que haga que es
  // const getDatos = () => {
  //  setTimeout(() => {
  //    return datos;
  //  }, 1500)
  // }
  // console.log(getDatos())
  
  
  // // como no hay nada que haga que es
  
  // // asincronico 
  const getDatos = () => {
    return new Promise((resolve, reject) => {
      if (datos.length === 0) {
        reject(new Error('No existe datos'))
      }
      setTimeout(() => {
        resolve(datos);
      }, 1500)})
  }
  // getDatos()
  //     .then((datos) => console.log(datos))
  //     .catch((err) => console.log(err.message))
  
  // // podriamos reescribir el llamado a la funcion de manera mas secuencial pero igualmente asicrono
  // // ojo no se puede usar await fuera de una funcion 
  // const datosFetched = await getDatos();
  //  console.log(datos)
  async function fetchingData() {
    console.log("Estoy en async function fetchingData() ")
    const datosFetched = await getDatos();
    console.log(datosFetched)
  }
  //fetchingData()
  
  // // // podemos hacer uso de try catch
  
  // async function fetchingData1() {
  //   console.log("Estoy en async function fetchingData1() ")
  //   try {
  //     const datosFetched = await getDatos();
  //     console.log(datosFetched)
  //   } catch (err) {
  //     console.log(err.message)
  //   } finally {
  //     console.log("Estoy en  finally() ")
  //   }
  
  //  }
  //  fetchingData1()
  
  
  
  
  
  // setInterval(function () {
  //   console.log("Se ejecuta cada dos segundos")
  //   fetchingData()
  // },2000) 
  
  const cancelarInterval = setInterval(function () {
    console.log("Se ejecuta cada dos segundos")
   fetchingData()
  }, 3000) 
  clearInterval(cancelarInterval)
  
  
  
  
  // // // promesas
  // const promesa = new Promise((resolve, reject) => {
  //   const numeroAleatorio = Math.random()
  //   if (numeroAleatorio <= 0.5){
  //     resolve(numeroAleatorio)
  //   } else {
  //     reject(new Error("El nro es menor a 0.5"))
  //   }
  // })
  // promesa.then(resultado => console.log("Promesa con exito: ", resultado))
  //   .catch(err => console.log("Promesa fallida", err.message))
  // .finally(() => console.warn("warning siempre se muestra"))
   
  
  
  
  
  
  
  
  
  
  
  
  
  
  