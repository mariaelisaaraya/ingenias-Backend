# Reseta para un proyecto feliz.
¡Bienvenidas! 👋 Vamos a construir desde cero un proyecto con todo lo visto hasta ahora.

## 🔹 Manos a la obra
#### Creo carpeta del proyecto & moverte dentro de la misma
```
> mkdir motor-de-plantillas && cd motor-de-plantillas
```
## Inicializamos el proyecto de NODEJS, creando package.json file 
```
> npm init -y
```
#### Creo el archivo index (entry point of our API)
```
> touch index.js
```

### Instalamos dependencias para la configuración básica:
* Dev Dependencies 
```
> npm i -D nodemon 
```
* Dependencies 
```
> npm i express ejs path --save
```
### Modificamos nuestro package.json con los escript que necesitamos
"start": "node --watch app.js",
"dev":"nodemon app.js",

# Creo carpeta que contendra las vistas y accedo a la misma
mkdir views && cd views

# Creo el archivo index o server
touch index.ejs

# Recordando conceptos
* Express.js es el framework backend que proporciona infraestructura web rápida, minimalista y flexible para Node.js y es una parte extensa del ecosistema JavaScript. Está diseñado para construir aplicaciones web de una sola página, multipágina e híbridas, también se ha convertido en el estándar para desarrollar aplicaciones backend con Node.js. [EXPRESS - NPM LIBRARY](https://www.npmjs.com/package/express) 

* Nodemon es una utilidad que nos permite monitorear los cambios realizados en el código, al detectarlos reinicia inmediatamente el servidor de Node.js por nosotros, con lo cual tendríamos de forma inmediata la versión mas reciente de nuestro proyecto ejecutándose.[NODEMON - NPM LIBRARY](https://www.npmjs.com/package/nodemon)

* EJS es uno de los motores de plantilla más populares para JavaScript. Una de las razones para elegirlo es que el código EJS parece HTML puro. 
Conserva la sintaxis de HTML al tiempo que permite la interpolación de datos, a diferencia de Pug ( otro motor de plantilla ) que utiliza una sintaxis diferente con sangría y espacios.
Los archivos EJS se guardan con el extensión de archivo .ejs[EJS - NPM LIBRARY](https://www.npmjs.com/package/ejs) 
