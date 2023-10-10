Lenguaje de Manipulación de Datos (DML, por sus siglas en inglés) es un subconjunto de SQL (Structured Query Language) que se utiliza para manipular datos almacenados en una base de datos. Permite a los usuarios insertar, actualizar, eliminar y recuperar datos de una base de datos.

Aquí tienes algunos ejemplos de comandos DML:

1. SELECT:  Recupera datos de una o más tablas basado en condiciones especificadas.
   Ejemplo: SELECT * FROM empleados;
   Este comando recuperará todos los registros de la tabla "empleados".

2. INSERT: Insertar nuevos registros en una tabla.
   Ejemplo: INSERT INTO clientes (nombre, email) VALUES ('Juan', 'juan@example.com');
   Este comando insertará un nuevo registro en la tabla "clientes" con el nombre "Juan" y el correo electrónico "juan@example.com".

3. UPDATE: Actualizar datos existentes  en una tabla basado en condiciones especificadas.
   Ejemplo: UPDATE productos SET precio = 10 WHERE categoria = 'Electrónica';
   Este comando actualizará el precio de todos los productos de la categoría "Electrónica" a 10 en la tabla "productos".

4. DELETE: limina filas de datos de una tabla basado en condiciones especificadas.
   Ejemplo: DELETE FROM pedidos WHERE fecha < '2022-01-01';
   Este comando eliminará todos los registros de la tabla "pedidos" que tengan una fecha anterior al 1 de enero de 2022.

Además,  el comando TRUNCATE. Aunque técnicamente no es un comando DML, es un comando utilizado para eliminar todos los registros de una tabla sin dejar rastro. Ejemplo: TRUNCATE TABLE empleados; Este comando eliminará todos los registros de la tabla "empleados" y reiniciará los contadores de identidad, liberando el espacio ocupado por los datos eliminados.
