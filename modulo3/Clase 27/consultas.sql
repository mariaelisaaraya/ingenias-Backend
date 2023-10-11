-- INSERTAR
-- insert con todos los campos 
INSERT INTO `Clientes`(`id`, `nombre`, `apellido`, `dni`, `activo`, `edad`) 
VALUES ([value-1],[value-2],[value-3],[value-4],[value-5],[value-6]);

-- querys parciales
-- recordar campos no nulos deben estar indicados si o si su valor o poseer un valor por defecto
INSERT INTO `northwind`.`clientes` (id,`nombre`, `apellido`, `dni`, `activo`, `edad`) 
VALUES (null,'1', '1', '3434', '0', '56');
INSERT INTO `northwind`.`clientes` (id,`nombre`, `apellido`, `dni`, `activo`, `edad`) 
VALUES (null,'2', '2', '3434', '0', '56');
INSERT INTO `northwind`.`clientes` 
VALUES (null,'3', '3', '3434', '0', '56',null, null,'fdf', null);

-- ACTUALIZAR
UPDATE `Clientes` SET 
`nombre`=[value-2],
`apellido`=[value-3],
`dni`=[value-4],
`activo`=[value-5],
`edad`=[value-6]
WHERE 1;

-- sin where  OJO CAMBIA TODOS LOS VALORES DEL CAMPO A ACTUALIZAR
UPDATE `Clientes` SET `edad`=28;
-- datos a mostrar
SELECT `EmployeeID`,`LastName`,`FirstName`,`Title`,`HomePhone`,`City` FROM Northwind.Employees;
-- Apartir de los datos a mostrar crear tabla con datos de otra tabla de otra base 
CREATE table ContactosFake as 
SELECT `EmployeeID`,`LastName`,`FirstName`,`Title`,`HomePhone`,`City` FROM Northwind.Employees ;

UPDATE `ContactosFake` SET `City`='Cordoba' WHERE `City` LIKE 'London';

----------------------------------------------------------------
-- Delete
SELECT * FROM `Employees` where FirstName like 'Steven';

--- si sale el siguiente error
/*
Cannot delete or update a parent row: a foreign key constraint fails (
    `Northwind`.`EmployeeTerritories`, CONSTRAINT `FK_EmployeeTerritories_Employees` 
    FOREIGN KEY (`EmployeeID`) REFERENCES `Employees` (`EmployeeID`))
*/
-- ver el universo de datos a borrar
SELECT * FROM `Clientes` WHERE dni like '%11';

-- borrar el universo de datos que cumplan una determinada condicion (en mi caso que el dni empiece con 11)
DELETE FROM `Clientes` WHERE dni like '%11';

-- revisar que no existen 
SELECT * FROM `Clientes` WHERE dni like '%11';

-- borrar foraneas
-- para borrar el profe 5 deberia primero borrar todos los lado donde se use el id del profesor
DELETE FROM `Profesores` WHERE `Profesores`.`idProfesor` = 5;
--MySQL ha dicho: Documentación
/*
#1451 - Cannot delete or update a parent row: a foreign key constraint fails 
(`JUMP`.`Aulas`, CONSTRAINT `Aulas_ibfk_1` FOREIGN KEY (`idProfesor`) REFERENCES `Profesores` (`idProfesor`))
*/
DELETE FROM `Estudiantes` WHERE `Estudiantes`.`idEstudiante` = 8;
DELETE FROM `Aulas` WHERE `Aulas`.`idAula` = 5;
DELETE FROM `Profesores` WHERE `Profesores`.`idProfesor` = 5;