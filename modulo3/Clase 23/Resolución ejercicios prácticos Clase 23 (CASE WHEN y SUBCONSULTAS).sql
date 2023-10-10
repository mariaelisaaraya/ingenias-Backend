-- 1
SELECT ProductID, ProductName, UnitPrice, UnitsInStock, ReorderLevel 
FROM Northwind.Products
ORDER BY CategoryID, ProductName;

-- 2
SELECT ProductID, 
	   ProductName, 
       UnitPrice, 
       UnitsInStock, 
CASE 
	WHEN ReorderLevel < UnitsInStock THEN 'Reponer Stock'
    ELSE ReorderLevel 
END
	AS ReorderLevel
FROM Northwind.Products;

-- 3
SELECT ProductID, 
	   ProductName, 
       UnitPrice, 
       UnitsInStock, 
       ReorderLevel 
FROM Northwind.Products
WHERE CategoryID = (SELECT CategoryID FROM Categories WHERE CategoryName = 'Seafood')
ORDER BY CategoryID, ProductName;
