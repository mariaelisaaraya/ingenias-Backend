
-- inner join --> trae todo lo que hace match entre tablas
SELECT nombreCompleto, email, telefono, descripcion
 FROM contactos C 
 inner join tiposdetelefono T on T.IdTipoTel = C.IdTipoTel;

-- left join --> Trae todos los registros de la tabla izquierda o de mayor peso, aplicando la relación de ambas tablas
SELECT nombreCompleto, email, telefono, descripcion
 FROM contactos C 
 left join tiposdetelefono T on T.IdTipoTel = C.IdTipoTel;

-- right join  --> Trae todos los registros de la tabla derecha, aplicando la relación de ambas tablas
SELECT nombreCompleto, email, telefono, descripcion
 FROM contactos C 
 right join tiposdetelefono T on T.IdTipoTel = C.IdTipoTel;

-- union all
select nombreCompleto, telefono, null as Descripcion
from contactos
union all
select null, null, Descripcion
from tiposdetelefono

/*
Ejecuta una consulta de selección para obtener los campos ProductID,
ProductName, Quantity y UnitPrice, combinando la tabla Products y la
tabla OrderDetails.
a. Deberás visualizar los datos de la órden número: 10255
*/
select ProductName, Quantity , P.UnitPrice
from orderdetails O
join products P on O.ProductID = P.ProductID
where OrderID = 10255;

select ProductName, Quantity , P.UnitPrice
from products P
join orderdetails O on O.ProductID = P.ProductID
where OrderID = 10255;

/*Ejecuta una consulta de selección para visualizar el campo
CustomerName, de la tabla Customers, y los campos FirstName y
LastName de la tabla Employees.
a) Concatena FistName y LastName como un único campo llamado
EjecutivoDeCuentas
a. Deberás visualizar los datos de la órden número: 10255
*/
select C.ContactName,  FirstName , LastName
from orders O
join Customers C on O.CustomerID = C.CustomerID
join Employees E on E.EmployeeID = O.EmployeeID

where OrderID = 10255;