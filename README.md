# Curso de Backend - Aula Kimberly Bryant

¡Bienvenidas! 👋 Este repositorio contiene el código del curso de Curso de Backend - Aula Kimberly Bryant creado para Ingenias por Maria Elisa Araya y Jeannette Elizabeth Muñoz .

Durante el curso se va a aprender los fundamentos de desarrollo web back-end paso a paso a través de la práctica con ejemplos y proyectos cortos que te ayudarán a aplicar tu conocimiento. 


## 🔸 Conocimiento Previo y Herramientas

Para tomar el curso hay que tener conocimiento previo de **JavaScript** ya que Node.js es un entorno de ejecución de JavaScript. 

Se recomienda tener conocimento previo de funciones flecha, métodos, objetos, `.map()`, `.filter()`, `require()`, `.findIndex()`, y `.sort()`.

Durante el curso se usará **Visual Studio Code** como editor de código pero puedes trabajar con el editor de código o IDE que desees. 

También usaremos el terminal integrado de Visual Studio Code. 

## 🔹 Contenido

Los temas están enfocados en un concepto específico. Aquí están dividos en categorías principales para darte una idea general del contenido.


#### Módulo 1 - Servidores Web y Api Restful -
* Guía de actividades prácticas: módulo 1 y 2
* Clase 01 Introducción a la Programación Backend
* Clase 02 Manejo de arrays y Syntactic Sugar
* Clase 03 Asincronismo y promesas
* Clase 04 El módulo HTTP
* Clase 05 El framework Express
* Clase 06 Motor de Plantillas
* Clase 07 Rutas dinámicas
* Clase 08 High Order Functions
* Clase 09 Filesystem API
* Clase 10 API Restful

#### Módulo 2 - Base de Datos No Relacionales, Seguridad y Crud -
* Guía de actividades prácticas: módulo 1 y 2
* Clase 11 MongoDB I
* Clase 12 MongoDB II
* Clase 13 Node.js y MongoDB
* Clase 14 CRUD Express y MongoDB
* Clase 15 JSON Web Token
* Clase 16 Documentación
* Clase 17 Plan de pruebas

#### Módulo 3 - SQL, Documentación y Testing- 
* Guía de actividades prácticas: Módulo 3
* Clase 18 Introducción a MySQL
* Clase 19 Tablas y tipos de datos
* Clase 20 El lenguaje SQL
* Clase 21 Operadores de comparación
* Clase 22 Funciones escalares
* Clase 23 El modelo relacional
* Clase 24 Combinando tablas con JOIN
* Clase 25 Agregación y agrupación
* Clase 26 Data Definition Language
* Clase 27 Data Manipulation Language
* Clase 28 Desarrollar un modelo relacional
* Clase 29 Sequelize y Node.js
* Clase 30 Backup y restauración
* Clase 31 Transaction Control Language
* Clase 32 Publicar un proyecto en la nube
  

## 🔸 Proyecto

Durante el curso vamos a crear un proyecto que a la hora de la Entrega Final debe incluir:
* Una bb.dd MySQL con el modelo relacional aplicado de acuerdo a la informaciónalmacenada en el archivo trailerflix.json
  * catalogo (almacenar datos de películas y series)
  * categorias (serie, película, documental, etc...)
  * actricesyactores (datos de reparto)
  * genero (Sci-Fi, Acción, Drama, Terror, Comedia)
  * tablas intermedias (catalogo_reparto, catalogo_tags, etc...)
* Una vista SQL que muestre todos los datos relacionados, tal como los representa el archivo .json original.
* Una API REST desarrollada que acceda a los datos de trailerflix
  * servidor Express JS
  * conexión con MySQL
  * genera, al menos, 3 endpoints
    * /catalogo (servirá el catálogo completo ‘la vista SQL’)
    * /catalogo/:nombre (filtrar por nombre o parte del nombre)
    * /catalogo/:genero (filtrar por género del contenido) y otros endpoint que consideres interesante crear.
* Documentación en formato MarkDown que explique cómo utilizar cada endpoint creado, que muestre un ejemplo de código, y el listado de endpoints en una tabla
  

## 🔹 Cómo Ejecutar tu Código

Durante el curso usaremos Node.js para ejecutar los programas en el terminal. Para ello, usaremos el siguiente comando si el archivo a ejecutar es app.js.

```
> node nombreDelArchivo.js (puede ser app.js o ejemplo.js)
```

## 🔸 Descargar el Código
Se puede descargar el código de cada parte del curso desde este repositorio. 

## 🔹  Entregas:

Durante el transcurso del curso, estaremos trabajando en GitHub, donde tanto la profesora como la tutora estarán siguiendo de cerca el progreso de los proyectos. Es importante tener en cuenta que para la Entrega Final, se aplicará el siguiente plazo:

  *  Pre Entrega 1: La última actualización del código debe realizarse antes de las 8 am del domingo 20/08. A esa hora, se tomará una instantánea del proyecto en GitHub para su evaluación.

Por favor, hay que asegurarse de que cualquier cambio necesario en su proyecto esté reflejado en GitHub antes de ese momento.
   

## 🔸 Enlace al Curso
El curso se encuentra en el campus de YPF, haz clic en este enlace: [CampusYPF](https://campus.educalabs.org/course/view.php?id=616) 
