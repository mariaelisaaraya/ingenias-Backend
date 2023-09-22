-- Consulta de selección base
SELECT EmployeeID, TitleOfCourtesy, LastName, FirstName, Title, BirthDate, HireDate
FROM Employees;

-- 1
SELECT EmployeeID, concat(TitleOfCourtesy, ' ', LastName, ' ', FirstName) AS NombreCompleto,
	   Title, 
       BirthDate, 
       HireDate
FROM Employees;

-- 2
SELECT EmployeeID, 
	   TitleOfCourtesy, 
       LastName, 
       FirstName, 
       Title, 
       DATE(BirthDate) AS FechaNacimiento, 
       HireDate
FROM Employees;

-- 3
SELECT EmployeeID, 
	   TitleOfCourtesy, 
       LastName, 
       FirstName, 
       Title, 
       DATE(BirthDate) AS FechaNacimiento, 
       YEAR(HireDate) AS AnioContratacion
FROM Employees;
