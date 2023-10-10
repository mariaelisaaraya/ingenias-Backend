[ Data Types](https://dev.mysql.com/doc/refman/8.0/en/data-types.html)


# QUE ES MYSQL 
MySQL es un sistema de gestión de bases de datos relacional, es decir, es un software que permite organizar y almacenar grandes cantidades de información de manera estructurada.

MySQL trabaja mediante el uso de tablas, que son estructuras que contienen filas y columnas. Cada tabla tiene un nombre y está compuesta por campos, que son las columnas, y registros, que son las filas. Los campos definen el tipo de dato que puede almacenar, como números, texto, fechas, entre otros.

Para interactuar con MySQL, se utiliza un lenguaje de consulta llamado SQL (Structured Query Language). Con SQL, se pueden realizar diversas operaciones como crear, modificar y eliminar tablas, insertar, actualizar y eliminar registros, y realizar consultas para obtener información de la base de datos.

MySQL también permite establecer relaciones entre tablas mediante el uso de claves primarias y claves foráneas. Esto facilita la organización y la integridad de los datos, ya que se pueden establecer reglas para mantener la coherencia de la información.

Además, MySQL es un sistema multiusuario, lo que significa que múltiples personas usuarias pueden acceder y manipular la base de datos al mismo tiempo. Cada persona usuaria puede tener diferentes niveles de acceso y privilegios, lo que garantiza la seguridad y la protección de la información.

En resumen, MySQL es un sistema de gestión de bases de datos relacional que utiliza tablas para organizar la información. Trabaja mediante el uso de SQL y permite realizar operaciones como crear, modificar y eliminar tablas, insertar, actualizar y eliminar registros, y realizar consultas. También permite establecer relaciones entre tablas y es multiusuario para garantizar la seguridad de los datos.

# COMO FUNCIONA MYSQL
MySQL funciona como un servidor de bases de datos que se ejecuta en un sistema operativo. Cuando se instala y se configura correctamente, MySQL escucha las solicitudes de conexión de los clientes y responde a ellas.

Cuando un cliente desea interactuar con la base de datos MySQL, envía una solicitud al servidor MySQL a través de una conexión. Esta solicitud puede ser una consulta SQL para obtener información, una instrucción para modificar la base de datos, o cualquier otra operación compatible con MySQL.

El servidor MySQL recibe la solicitud del cliente y la procesa. Primero, verifica la validez sintáctica de la consulta o instrucción SQL. Si la sintaxis es correcta, el servidor ejecuta la operación solicitada en la base de datos.

MySQL utiliza un motor de almacenamiento para almacenar y recuperar datos. El motor de almacenamiento más comúnmente utilizado es InnoDB, pero MySQL también admite otros motores como MyISAM y Memory. Cada motor tiene sus propias características y ventajas, por lo que se puede elegir el más adecuado según los requisitos específicos del proyecto.

Una vez que el servidor MySQL ha procesado la solicitud y ha realizado la operación en la base de datos, envía la respuesta al cliente. Esta respuesta puede ser el resultado de una consulta, un mensaje de confirmación de una operación exitosa o un mensaje de error en caso de que haya ocurrido algún problema.

MySQL también ofrece características adicionales como la capacidad de implementar transacciones, que permiten realizar múltiples operaciones como una unidad atómica, es decir, todas las operaciones se realizan o ninguna se realiza. Esto garantiza la integridad de los datos y evita problemas de inconsistencia.

En resumen, MySQL funciona como un servidor de bases de datos que procesa las solicitudes de los clientes, ejecuta operaciones en la base de datos utilizando un motor de almacenamiento y envía las respuestas de vuelta al cliente. Ofrece características adicionales como transacciones para garantizar la integridad de los datos.
