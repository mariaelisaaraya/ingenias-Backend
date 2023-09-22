-- 1 Selección de los campos de la tabla productos, aplicando alias en los nombres
SELECT ProductID AS Codigo, ProductName AS Descripcion, QuantityPerUnit AS Presentacion, UnitPrice AS PrecioUnitario
FROM products;

-- 2 Selección de los campos de la tabla productos, definiendo el nombre en Mayúsculas
SELECT ProductID, UCASE(ProductName) AS ProductName, QuantityPerUnit, UnitPrice
FROM products;

-- 3 Selección de los campos ProductID, ProductName, QuantityPerUnit de la tabla productos,
--   reemplazando en el último la palabra 'boxes' por 'cajas'
SELECT 
    ProductID AS Codigo, 
    UCASE(ProductName) AS Descripcion, 
    REPLACE(QuantityPerUnit, 'boxes', 'cajas') AS Presentacion, 
    UnitPrice AS PrecioUnitario
FROM products
WHERE QuantityPerUnit LIKE '%boxes%';