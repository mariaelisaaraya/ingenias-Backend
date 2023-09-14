-- 1
SELECT * FROM Customers;

-- 2
SELECT CustomerID, CompanyName, ContactName, ContactTitle, City, Phone FROM Customers
ORDER BY CompanyName;

-- 3
SELECT CustomerID, CompanyName, ContactName, ContactTitle FROM Customers
ORDER BY ContactName DESC;

-- 4
SELECT * FROM Customers
ORDER BY CustomerID
LIMIT 20;

-- 5
SELECT * FROM Customers
ORDER BY ContactName
LIMIT 9, 10;
