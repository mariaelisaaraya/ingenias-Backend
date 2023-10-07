-- count 
-- sin filtros
SELECT count(*) as cantidadClientes FROM northwind.clientes;
SELECT count(*) as TotalEmployees FROM northwind.employees;
-- con filtros
SELECT count(*) as CantidadProductos FROM northwind.products where UnitPrice > 20;
SELECT count(*) as TotalRepresentantesDeVentas FROM northwind.employees where Title like 'Sales Representative' ;
-- uniendo tablas
SELECT count(1) as CantidadCondimentos
FROM northwind.products 
inner join categories on products.CategoryID = categories.CategoryID
where CategoryName like '%Condiments%';

-- sum
-- sin filtros
SELECT sum(Freight) as TotalFletes FROM northwind.orders;
-- con filtros
SELECT sum(Freight) as TotalFletes FROM northwind.orders where OrderID in (10248, 10250,10249);
-- uniendo tablas
SELECT sum(UnitsOnOrder) as CantidadPorEnviarse
FROM northwind.products 
inner join categories on products.CategoryID = categories.CategoryID
where CategoryName like '%Condiments%';

-- min y max
-- sin filtros
SELECT min(UnitPrice) as MenorPrecio, max(UnitPrice) MayorPrecio  FROM northwind.products;
-- con filtros
SELECT min(UnitPrice) as MenorPrecio, max(UnitPrice) MayorPrecio  FROM northwind.products where CategoryID =2;
-- uniendo tablas
SELECT min(UnitPrice) as MenorPrecio, max(UnitPrice) MayorPrecio 
 FROM northwind.products 
inner join categories on products.CategoryID = categories.CategoryID
where CategoryName like '%Condiments%';

-- avg
-- sin filtros
SELECT avg(UnitPrice) as PrecioPromedio 
  FROM northwind.products;
-- con filtros
SELECT avg(UnitPrice) as PrecioPromedio 
FROM northwind.products where CategoryID =2;
-- uniendo tablas
SELECT avg(UnitPrice) as PrecioPromedio 
 FROM northwind.products 
inner join categories on products.CategoryID = categories.CategoryID
where CategoryName like '%Condiments%';


-- operaciones matematicas 
SELECT ProductID, ProductName, UnitPrice, (UnitPrice *0.90) as 'TenPercentOff' FROM northwind.products;

-- con filtro
SELECT ProductID, ProductName, UnitPrice, (UnitPrice *0.90) as TenPercentOff
FROM northwind.products
where (UnitPrice *0.90) >10;

-- Group by
SELECT CategoryName as Categoria, count(ProductID) as CantidadProductos,(sum(UnitPrice)*UnitsInStock) TotalGanancia
FROM northwind.products 
inner join categories on products.CategoryID = categories.CategoryID
Group by CategoryName, UnitsInStock;

select S.CompanyName, S.Country, S.ContactName, 
Count(P.ProductID) as TotalProducts
from suppliers S
join products P on S.SupplierID = P.SupplierID
group by S.CompanyName, S.Country, S.ContactName
having TotalProducts > 2;

-- contar repetidos
SELECT apellido, COUNT(*) AS cantidad
FROM northwind.clientes
GROUP BY apellido
HAVING COUNT(*) > 1;


SELECT apellido, COUNT(*) AS cantidad
FROM northwind.clientes
where dni = 1111
GROUP BY apellido
HAVING COUNT(*) > 1;


-- separar por comas un campo de la base
select S.CompanyName, S.Country, S.ContactName,
Count(P.ProductID) as TotalProducts, GROUP_CONCAT(P.ProductName SEPARATOR ', ') as NamePRod
from suppliers S
join products P on S.SupplierID = P.SupplierID
group by S.CompanyName, S.Country, S.ContactName
having TotalProducts > 2
Limit 3;