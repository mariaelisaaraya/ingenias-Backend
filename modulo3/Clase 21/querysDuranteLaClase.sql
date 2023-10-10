SELECT * FROM `Categories` WHERE `CategoryID` =4;
SELECT * FROM `Categories` WHERE `CategoryID` ='4';
SELECT * FROM `Categories` WHERE `CategoryName`= 'Condiments';
SELECT * FROM `Categories` WHERE `CategoryName`= "Condiments";
SELECT * FROM `Clientes` WHERE activo =true;
SELECT * FROM `Clientes` WHERE activo ='true';
SELECT * FROM `Clientes` WHERE activo =1;
SELECT * FROM `Clientes` WHERE activo =false;
SELECT * FROM `Clientes` WHERE activo ='false';
SELECT * FROM `Clientes` WHERE activo =0;
SELECT * FROM northwind.clientes where edad > 25;
SELECT * FROM northwind.clientes where edad > 18;
SELECT * FROM northwind.clientes where edad >= 25;

SELECT * FROM Northwind.Customers where `City` = "Buenos Aires";
SELECT * FROM northwind.clientes where id in (3,4,7) and apellido <>  'poo';
SELECT * FROM northwind.clientes where id in (3,4,7) and apellido !=  'poo';
SELECT * FROM northwind.clientes where id in (3,4,7) or apellido <>  'poo';
SELECT * FROM northwind.clientes where id in (3,4,7) or apellido !=  'poo';
SELECT * FROM northwind.clientes where id not in (3,4,7) or apellido !=  'poo' ;


SELECT * FROM northwind.clientes where edad between 18 and 27 ;
SELECT * FROM northwind.clientes where nombre like 'da%';



use Northwind;
SELECT customerID, CompanyName, ContactName, ContactTitle FROM Customers WHERE City = 'London';
-- o directamente
SELECT customerID, CompanyName, ContactName, ContactTitle FROM Northwind.Customers WHERE City = 'London';
SELECT `CustomerID`, `CompanyName`, `ContactName`, `ContactTitle` FROM Northwind.Customers where `City` = "London";

-- alias de tablas
SELECT 
    `CustomerID` ID,
    `CompanyName` 'Nombre de la compania',
    `ContactName`as 'Contacto Nombre',
    `ContactTitle`
FROM
    Northwind.Customers
WHERE
    `City` = 'London';


-- alterar la tabla sumando una columna
UPDATE `northwind`.`products` SET `Discontinued` = '1' WHERE (`ProductID` = '2');
o UPDATE `northwind`.`products` SET `Discontinued` = '1' WHERE UnitPrice <18; 
