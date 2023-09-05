# Los diferentes tipos de testing en el desarrollo de software

 ## Consejo
 Hacer testing a un nivel prudente, según:

- la complejidad de nuestra aplicación,
- la cantidad de tráfico que nuestra aplicación recibe, y
- el tamaño de nuestro equipo.


## Manual vs Automated testing
De manera general, lo primero que debemos tener en cuenta es que existen pruebas de software manuales y pruebas de software automatizadas.

**Las pruebas manuales** son llevadas a cabo por personas, quienes navegan e interactúan con el software (usando herramientas adecuadas para cada caso).

Estas pruebas resultan costosas, ya que se requiere contar con un profesional encargado de esta labor; para configurar un entorno y así mismo ejecutar las pruebas.

Como es de esperarse, estas pruebas están expuestas a errores humanos: por ejemplo, se pueden cometer errores tipográficos u omitir pasos durante la prueba.

**Las pruebas automatizadas**, por el contrario, son realizadas por máquinas, que ejecutan un "test script" que ya ha sido escrito previamente.

Estos tests (o pruebas) pueden variar mucho en cuanto a complejidad:

- desde verificar que el método de una clase específica funcione correctamente,
- hasta asegurar que una secuencia de acciones complejas en la UI se lleven acabo correctamente y devuelvan los resultados esperados.

Estas pruebas son más rápidas y confiables que las que se llevan a cabo manualmente – pero la calidad de estas pruebas automatizadas depende de qué tan bien escritos se encuentren los "tests scripts" (código que determina qué es lo que se hará en la prueba).

Automated testing es un componente clave para continuous integration y continuous delivery, y es una excelente manera de escalar tus procesos de QA (quality assurance, aseguramiento de calidad) a medida que agregas nuevas características a tu aplicación.

Aún así, son importantes las pruebas manuales para lo que se conoce como "exploratory testing".

# Los diferentes tipos de tests
Veamos los diferentes tipos de prueba que existen (hay más, pero éstas son las más importantes).

## Unit tests
**Las pruebas unitarias** son a bajo nivel (cercanas al código fuente de nuestra aplicación).

Este tipo de testing consiste en probar de forma individual las funciones y/o métodos (de las clases, componentes y/o módulos que son usados por nuestro software).

Debido a lo específicas que son, generalmente son las pruebas automatizadas de menor coste, y pueden ejecutarse rápidamente por un servidor de continuous integration (integración continua).

Más detalles acerca de las pruebas unitarias:

- Idealmente, cuando planeamos y escribimos pruebas unitarias, debemos aislar la funcionalidad hasta un punto en que no se pueda desglosar más, y entonces escribir pruebas a partir de ello. Justamente, el nombre de este tipo de testing hace referencia a una "unidad de código", que es independiente del resto.
  
- Estas pruebas verifican que el nombre de la función o método sea adecuado, que los nombres y tipos de los parámetros sean correctos, y así mismo el tipo y valor de lo que se devuelve como resultado.

- Dado que las pruebas unitarias no deben tener ningún tipo de dependencia, se suele reemplazar los llamados a APIs y servicios externos por funcionalidad que los imite (para que no exista interacción que vaya más allá de la unidad que está siendo probanda).

- En muchos casos inclusive se suele reemplazar las consultas a bases de datos, de modo que la prueba se enfoque en operar a partir de los valores de entrada, sin depender de ninguna fuente externa.

- Si no es factible aislar el uso de bases de datos de nuestras pruebas unitarias, será importante tener en cuenta el rendimiento y buscar optimizar nuestras consultas. 

- Esto es importante, porque si nuestras pruebas unitarias son de larga duración, resultará incómodo ejecutarlas y ralentizará significativamente los tiempos de desarrollo.

Cuando se habla de Test Driven Development (desarrollo guiado por pruebas), se hace referencia a unit tests. Es decir, se usan pruebas de este tipo como especificaciones de lo que nuestro código debe hacer.

## Integration tests
**Las pruebas de integración** verifican que los diferentes módulos y/o servicios usados por nuestra aplicación funcionen en armonía cuando trabajan en conjunto.

Por ejemplo,
- pueden probar la interacción con una o múltples bases de datos,
- o asegurar que los microservicios operen como se espera.
Las pruebas de integración son típicamente el paso siguiente a las pruebas unitarias.

Y son generalmente más costosas de ejecutar, ya que requieren que más partes de nuestra aplicación se configuren y se encuentren en funcionamiento.

## Functional tests
**Las pruebas funcionales** se centran en los requerimientos de negocio de una aplicación.

Estas pruebas verifican la salida (resultado) de una acción, sin prestar atención a los estados intermedios del sistema mientras se lleva a cabo la ejecución.

A veces existe cierta confusión entre "integration tests" y "functional tests", ya que ambos requieren que múltiples componentes interactúen entre sí.

La diferencia es que,

- una prueba de integración puede simplemente verificar que las consultas a una base de datos se ejecuten correctamente,
- mientras que una prueba funcional esperaría mostrar un valor específico a un usuario, en concordancia a lo definido por los requerimientos del producto.

## End-to-end tests
**Las pruebas de punta a punta** replican el comportamiento de los usuarios con el software, en un entorno de aplicación completo.

Estas pruebas verifican que los flujos que sigue un usuario trabajen como se espera, y pueden ser tan simples como

- cargar una página web,
-  iniciar sesión,
  
o mucho más complejas,

- verificando notificaciones vía email,
- pagos en línea, etcétera.
  
Las pruebas end-to-end son muy útiles, pero son costosas de realizar; y pueden ser difíciles de mantener cuando son automatizadas.

Por tanto, es recomendable tener unas pocas pruebas end-to-end, que resulten claves para nuestra aplicación, y confiar en mayor medida en las pruebas a bajo nivel (como pruebas unitarias y pruebas de integración) para detectar rápidamente aquellos cambios que impactan negativamente sobre nuestra aplicación.

## Regression testing
**Las pruebas de regresión** verifican un conjunto de escenarios que funcionaron correctamente en el pasado, para asegurar que continúen así.

- No debemos agregar nuevas características a nuestro regression test suite hasta que las pruebas de regresión actuales pasen.
- Una falla en una prueba de regresión significa que una nueva funcionalidad ha afectado otra funcionalidad que era correcta en el pasado, causando una "regresión".
- Una falla en un test de regresión podría indicar también que hemos vuelto a producir un bug que ya había sido resuelto en el pasado.

## Smoke testing
**Las pruebas de humo** son pruebas que verifican la funcionalidad básica de una aplicación.

- Se pretende que sean pruebas rápidas de ejecutar,
- y su objetivo es asegurar que las características más importantes del sistema funcionan como se espera.
  
Los smoke tests pueden ser muy útiles:

- justo después de construir una nueva versión de nuestra aplicación, para decidir si estamos listos para ejecutar pruebas más costosas,
- o justo después de un proceso de deployment, para asegurar que la aplicación está funcionando adecuadamente en el nuevo entorno desplegado.
  
Más detalles sobre los smoke tests:

- Son un conjunto de pruebas automatizadas de alto nivel, y seleccionadas estrictamente.
- Tienen lugar entre las pruebas de integración y las pruebas de regresión. Y están ahí para verificar que la funcionalidad principal del sitio opera como es debido.
- Se dice que el término "prueba de humo" tiene su origen en la plomería. Si se podía ver humo saliendo de una tubería, significaba que tenía fugas y era necesario hacer reparaciones.
  
No son pruebas específicas. Son pruebas significativas que ocurren a un nivel más general. Idealmente deben ejecutarse cada día, en cada uno de los entornos.

De modo que si un smoke test falla, significa que hay un grave problema con la funcionalidad de nuestro software. Por tanto no deberíamos desplegar cambios nuevos hasta que los fallos sean atendidos. Y si fallan en producción, su corrección tendrá la más alta prioridad.

## Acceptance testing
**Las pruebas de aceptación** son pruebas formales, ejecutadas para verificar si un sistema satisface sus requerimientos de negocio.

Estas pruebas requieren que el software se encuentre en funcionamiento, y se centran en replicar el comportamiento de los usuarios, a fin de rechazar cambios si no se cumplen los objetivos. Estos objetivos pueden ir más allá de obtener una respuesta específica, y medir el rendimiento del sistema.

Las pruebas de aceptación:

- Son usualmente un conjunto de pruebas manuales que se realizan luego de que una fase de desarrollo ha finalizado (de modo que se pueda volver rápidamente e iterar si algo no está correcto).
- Verifican que la características de nuestro software estén alineadas con todas las especificaciones iniciales y criterios de aceptación.
- Suelen realizarse luego de las pruebas unitarias o de integración, para evitar que se avance mucho con el proceso de prueba, y determinar a tiempo si se necesitan cambios significativos.
  
Para que este tipo de pruebas se lleve a cabo correctamente resulta importante que los responsables del proyecto definan los criterios de aceptación justo antes de empezar a trabajar en el mismo. Así mismo, cualquier requerimiento adicional que surja durante el proceso deberá verse reflejado en tales criterios de aceptación.

## Performance testing
**Las pruebas de rendimiento** verifican cómo responde el sistema cuando éste se encuentra bajo una alta carga.

Estos tests son no-funcionales, y pueden tener diversas formas para entender

- la fiabilidad,
- estabilidad
- y disponibilidad de la plataforma.
  
Por ejemplo, pueden observar los tiempos de respuesta cuando se ejecuta un alto número de requests (consultas al servidor), o ver cómo se comporta el sistema ante una cantidad significativa de datos.

Las pruebas de rendimiento son, por su naturaleza, bastante costosas de implementar y ejecutar, pero pueden ayudarnos a comprender si nuevos cambios van a degradar nuestro sistema (como hacerlo más lento o aumentar su consumo de recursos).

Las pruebas de rendimiento no fallan del mismo modo en que lo hacen las demás pruebas. En vez de ello su objetivo es recolectar métricas y definir objetivos por alcanzar.

Generalmente es buena idea realizar pruebas de este tipo ante nuevos lanzamientos y/o refactorizaciones importantes en el código.

# Exploratory testing
Mientras más características y mejoras agreguemos a nuestro código, mayor será la necesidad de escribir tests para asegurar que nuestro sistema funcione apropiadamente.

Así mismo, cada vez que corregimos un bug es prudente comprobar que otros que teníamos anteriormente no vuelvan a aparecer.

Automatizar es clave para hacer esto posible, y escribir pruebas (tarde o temprano) será parte de nuestro development workflow.

Entonces la pregunta es: ¿vale la pena hacer pruebas manuales hoy en día?

Y la respuésta es: sí, y deben enfocarse en lo que se conoce como "exploratory testing", donde el objetivo es descubrir errores que no son muy obvios.

Una sesión de pruebas exploratorias no debería exceder de 2 horas, y es necesario tener bien definido el alcance, para ayudar a los evaluadores a centrarse en un área específica del software.

Una vez que todos los testers (evaluadores) han sido informados, depende de ellos probar varias acciones para verificar cómo se comporta el sistema.

Este tipo de pruebas resulta costoso por naturaleza, pero permite descubrir errores en la UI y verificar flujos complejos que siguen los usuarios.

Resulta útil principalmente cuando se agrega una nueva característica importante a nuestra aplicación, para ayudar a comprender cómo se comporta en casos extremos.

# Conclusión
Así como es importante verificar que nuestros usuarios pueden usar nuestra aplicación (pueden iniciar sesión, enviar mensajes, y/o actualizar datos), es igual de importante verificar que nuestro sistema siga funcionando adecuadamente cuando se ingresen datos incorrectos o se realicen acciones inesperadas.

Necesitamos anticipar qué ocurrirá cuando un usuario cometa un error

- ingresando datos incoheretes,
- intente guardar un formulario sin completar todos los campos,
- o vaya de un paso a otro sin seguir una secuencia, con o sin malas intenciones.

Así mismo, necesitamos verificar si es posible para un usuario comprometer datos (es decir, tener acceso a recursos que no deben).

Entonces:

Un buen conjunto de pruebas debería "romper nuestra aplicación" y ayudarnos a entender sus límites.

Y por último, las pruebas son código también, por lo que no debemos olvidarlas durante los "code review", ya que son un paso importante para el pase a producción.

# Links 
- https://developero.io/blog/node-tdd-example
- https://www.digitalocean.com/community/tutorials/how-to-test-a-node-js-module-with-mocha-and-assert-es
- https://semaphoreci.com/blog/unit-tests-nodejs-jest
- https://www.browserstack.com/guide/unit-testing-for-nodejs-using-jest
- https://blog.logrocket.com/node-js-express-test-driven-development-jest/
- https://github.com/learning-zone/javascript-unit-testing/tree/master