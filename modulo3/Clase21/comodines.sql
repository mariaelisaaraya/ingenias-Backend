SELECT * FROM northwind.categories where CategoryName like '%ce%';
SELECT * FROM northwind.categories where CategoryName like '%ce';
SELECT * FROM northwind.categories where CategoryName like 'ce%';
SELECT * FROM northwind.customers where ContactName like '%ria%';
SELECT * FROM northwind.customers where ContactName like 'ana%';
SELECT * FROM northwind.customers where ContactName like '%s';



SELECT CustomerID, Country, CompanyName FROM northwind.customers where Country like '_r%';
SELECT CustomerID, Country, CompanyName FROM northwind.customers where Country like 'Au_____';
SELECT CustomerID, Country, CompanyName FROM northwind.customers where Country like 'A_%';
SELECT CustomerID, Country, CompanyName FROM northwind.customers where Country like 'M____o';
SELECT CustomerID, Country, CompanyName FROM northwind.customers where Country like '___land';