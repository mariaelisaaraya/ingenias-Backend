-- Subconsultas SQL
SELECT 
    id_profesor, (SELECT 
            nombre_materia
        FROM
            materias
        WHERE
           id_materia = profesores_materias.id_materia) as nombre_materia
FROM
    clase23.profesores_materias
WHERE
    id_materia = (SELECT 
            id_materia
        FROM
            materias
        WHERE
            creditos = 5);

SELECT 
     (SELECT 
            nombre_profesor
        FROM
            profesores
        WHERE
           id_profesor = profesores_materias.id_profesor) as Profesor,
           (SELECT 
            nombre_materia
        FROM
            materias
        WHERE
           id_materia = profesores_materias.id_materia) as Materia
FROM
    clase23.profesores_materias

SELECT id_profesor,
     (SELECT 
            nombre_profesor
        FROM
            profesores
        WHERE
           id_profesor = profesores_materias.id_profesor) as Profesor,
           id_materia,
           (SELECT 
            nombre_materia
        FROM
            materias
        WHERE
           id_materia = profesores_materias.id_materia) as Materia
FROM
    clase23.profesores_materias
-- CASE WHEN 

-- EN EL ORDER BY
SELECT CompanyName, City, Country
FROM Customers
ORDER BY
( CASE 
    WHEN Country IS NULL OR Country ='' THEN City
    ELSE Country
END);



-- EN EL SELECT
SELECT EmployeeID, LastName, FirstName, Title 
CASE 
    WHEN Region ='' THEN 'N/A'
    ELSE Region
END AS Region
FROM Northwind.Employees;

-- Practica 
-- 1
select ProductID, ProductName, UnitPrice, UnitsInStock, ReorderLevel
from products
order by CategoryID,ProductName;

-- 2
select ProductID, ProductName, UnitPrice, UnitsInStock, ReorderLevel as valor_que_comparo,
CASE 
    WHEN UnitsInStock < ReorderLevel THEN 'Reponer Stock'
    ELSE ReorderLevel
END AS Stock 
from products
order by CategoryID,ProductName;

-- 3
select ProductID, ProductName, UnitPrice, UnitsInStock, 
CASE 
    WHEN UnitsInStock < ReorderLevel THEN 'Reponer Stock'
    ELSE ReorderLevel
END AS Stock 
from products
order by ProductName;

-- 4 
select ProductID, ProductName, UnitPrice, UnitsInStock, 
CASE 
    WHEN UnitsInStock < ReorderLevel THEN 'Reponer Stock'
    ELSE ReorderLevel
END AS Stock 
from products
where CategoryID = (select CategoryID from categories where CategoryName = 'Seafood')
order by ProductName;
