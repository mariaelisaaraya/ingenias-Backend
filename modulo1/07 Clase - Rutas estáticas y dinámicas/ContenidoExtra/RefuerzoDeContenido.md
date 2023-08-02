Primer y MUY importante tip: No tengan nodemon corriendo en varias ventanas, siempre matarlo, apagarlo y levantarlo nuevamente.

Cómo hago para detener un proceso de Nodemon en Windows?

Para detener el proceso de Nodemon en Windows cuando hay varias instancias abiertas, puedes seguir estos pasos:

Identificar los procesos de Nodemon en ejecución: 
Abre el Administrador de tareas de Windows presionando las teclas Ctrl + Shift + Esc. 
En la pestaña "Procesos", busca los procesos que se llamen node.exe o nodemon. P
uede haber varias instancias si hay varias aplicaciones Node.js ejecutándose con Nodemon.

Finalizar los procesos de Nodemon: 
Haz clic con el botón derecho del ratón en cada proceso de node.exe o nodemon y selecciona "Finalizar tarea" o "Finalizar proceso". 
Repite este paso para todos los procesos relacionados con Nodemon que quieras detener.

Opcional: Reiniciar la terminal: 
Si cerraste la terminal mientras Nodemon estaba en ejecución, 
es recomendable reiniciar la terminal para asegurarte de que no hay ningún proceso en segundo plano.

Una vez que hayas finalizado los procesos de Nodemon, el servidor se detendrá y no se reiniciará automáticamente. Si deseas volver a ejecutar Nodemon más tarde, simplemente abre una nueva ventana de terminal, navega hasta la carpeta del proyecto y ejecuta nuevamente el comando nodemon.

Recuerda que Nodemon es una herramienta útil para el desarrollo en Node.js, ya que permite reiniciar automáticamente la aplicación cuando se detectan cambios en los archivos. Sin embargo, es esencial detenerlo correctamente cuando ya no lo necesitas para evitar posibles conflictos y problemas.

------------------------------------------------------------------------

Rutas Estáticas:

Las rutas estáticas se refieren a las URL que representan recursos físicos (archivos) en el servidor que no cambian. Estos recursos pueden incluir archivos HTML, CSS, JavaScript, imágenes, etc. Cuando un cliente solicita una ruta estática, el servidor simplemente envía el archivo correspondiente al cliente. No hay ningún proceso de generación de contenido o cálculos complejos involucrados. Por lo tanto, estas rutas son predefinidas y el servidor sabe exactamente qué archivo servir en respuesta a una solicitud específica.

-- https://example.com/css/style.css

Rutas Dinámicas:

Las rutas dinámicas, por otro lado, se refieren a las URL que contienen parámetros variables o datos específicos proporcionados por el cliente. En lugar de representar un archivo físico, estas rutas generalmente se utilizan para acceder a recursos que se generan en tiempo de ejecución. Los parámetros variables en la URL se pueden utilizar para personalizar el contenido devuelto por el servidor.

-- https://example.com/users/123

En esta ruta, "users" es una ruta base y "123" es un parámetro que representa el ID del usuario solicitado. El servidor puede utilizar el ID para buscar la información del usuario en una base de datos y devolverla como respuesta.

Las rutas dinámicas y estáticas están condicionadas a la petición del cliente en el sentido de que el cliente (navegador web) solicita una ruta específica al servidor mediante la URL. La diferencia radica en cómo el servidor maneja esas solicitudes:

Las rutas estáticas se utilizan para servir recursos físicos predefinidos sin cambios en el contenido.
Las rutas dinámicas se utilizan para generar contenido personalizado en tiempo de ejecución en función de los parámetros proporcionados en la URL.

------------------------------------

Query params y URL params:

URL Params (Parámetros de URL):

Los URL params son parte de la propia URL.
Son valores que se colocan directamente en la ruta de la URL.
Se utilizan para identificar de manera única un recurso específico.
Generalmente se utilizan en operaciones de consulta, actualización o eliminación de datos.
Ejemplo: https://www.ejemplo.com/users/123, donde "123" es el parámetro que identifica al usuario con ID 123.
Query Params (Parámetros de consulta):

Los query params se incluyen después del signo de interrogación "?" en la URL.
Son pares de clave-valor que se utilizan para enviar datos adicionales en una solicitud.
Se utilizan para filtrar, ordenar o paginar los resultados en una búsqueda o solicitud.
Los query params no son obligatorios y pueden ser opcionales en una solicitud.
Ejemplo: https://www.ejemplo.com/search?q=keyword, donde "q" es el parámetro de consulta y "keyword" es el valor de búsqueda.

La diferencia principal entre URL params y query params es cómo se incluyen en la URL. Los URL params forman parte de la ruta misma, mientras que los query params se agregan después del signo de interrogación en la URL. Ambos se utilizan para transmitir información en las solicitudes web, pero se utilizan en diferentes contextos y con propósitos distintos.

--------------------------------------------------------------

Poke Api para jugar : https://pokeapi.co/