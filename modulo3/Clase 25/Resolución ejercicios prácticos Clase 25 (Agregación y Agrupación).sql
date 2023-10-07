-- 1
SELECT COUNT(ProductID) AS TotalProductos
FROM Products
WHERE UnitPrice > 30;

-- 2
SELECT COUNT(ProductID) AS TotalProductos,
	   CategoryID
FROM Products
GROUP BY (CategoryID);

-- 3
SELECT COUNT(ProductID) AS TotalProductos,
	   CategoryID
FROM Products
GROUP BY (CategoryID)
HAVING COUNT(ProductID) > 7;