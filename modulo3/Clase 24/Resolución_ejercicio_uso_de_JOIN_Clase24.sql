USE northwind;
-- 1
SELECT od.ProductID, p.ProductName, od.Quantity, od.UnitPrice
FROM Products p
JOIN OrderDetails od 
ON p.ProductID = od.ProductID
WHERE od.OrderID = 10255;

-- 2
SELECT c.CompanyName, 
	   concat(e.FirstName, ' ', e.LastName) AS EjecutivoDeCuentas
from orders O
join Customers C on O.CustomerID = C.CustomerID
join Employees E on E.EmployeeID = O.EmployeeID
where OrderID = 10255;

-- 3
SELECT ProductID, 
	   ProductName,
       CompanyName,
       ContactName
FROM Northwind.products P
INNER JOIN Northwind.Suppliers S
ON P.SupplierID = S.SupplierID
WHERE P.CategoryID = 7;
