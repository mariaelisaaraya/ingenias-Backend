/* -   3. Ejecuta otra consulta de selección similar a la primera, aplicando la siguiente condición
        -   el campo SupplierID sea igual a 5 y el campo CategoryID sea igual a 4

-   4. Ejecuta otra consulta de selección similar a la primera, aplicando la siguiente condición
        -   el campo UnitsInStock tenga valores entre 25 y 40 unidades
*/

/* punto 3 */

SELECT * FROM northwind.products  where SupplierID = 5 and CategoryID = 4 ORDER BY ProductName;

/* punto 4 opcion 1 */

SELECT * FROM northwind.products  where UnitsInStock >= 25 and UnitsInStock <= 40 ORDER BY ProductName;

/* punto 4 opcion 2 */

SELECT * FROM northwind.products  where UnitsInStock between 25 and 40 ORDER BY ProductName;