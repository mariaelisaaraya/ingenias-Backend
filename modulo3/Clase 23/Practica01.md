Prácticas 01 - Clase 23 - Pag 57

Necesitamos simplificar la visualización de datos de la tabla Products, presentando en una consulta de selección, los siguientes campos:


ProductID, ProductName, UnitPrice, UnitsInStock, ReorderLevel


Sobre esta consulta de selección base, realiza las siguientes consignas:

-   1. Ejecuta una consulta de selección de todos estos datos, ordenando los mismos por:
        -   CategoryID, ProductName

-   2. En una nueva consulta de selección con la base inicial:
        -   Muestra una leyenda en el campo ReorderLevel, que diga ‘Reponer Stock’, en aquellos productos donde el campo UnitsInStock esté por debajo de ReorderLevel
        -   Ordena los productos por ProductName

-   3. Ejecuta una consulta de selección igual al Punto 1, agregando la siguiente condición:
        -   CategoryID = (el id de la categoría llamada ‘Seafood’)
            -   utiliza una subconsulta SQL en esta condición











