/* PUNTO 5 : Abre la tabla Products y modifica manualmente el campo discontinued = 1, en al menos 5
registros al azar. Recuerda aplicar / guardar los cambios efectuados */

/* Con el schema abierto, seleccionar la tabla products (click izq - select rows), y en result grid se ven las columnas de la tabla, ir a la columna Discontinued, editar los 5 datos al azar por el valor "1" y click en el botón Apply para aplicar los cambios */

/* PUNTO 6 : Ejecuta una consulta de selección similar a la primera, aplicando la siguiente condición:
 el campo UnitsInStock sea mayor a 400 o el campo discontinued sea verdadero
y ordena la consulta por el campo productName */

SELECT * FROM northwind.products WHERE UnitsInStock > 400 OR Discontinued = TRUE ORDER BY ProductName;