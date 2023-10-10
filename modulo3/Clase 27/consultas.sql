-- querys parciales
-- recordar campos no nulos deben estar indicados si o si su valor o poseer un valor por defecto
INSERT INTO `northwind`.`clientes` (id,`nombre`, `apellido`, `dni`, `activo`, `edad`) 
VALUES (null,'1', '1', '3434', '0', '56');
INSERT INTO `northwind`.`clientes` (id,`nombre`, `apellido`, `dni`, `activo`, `edad`) 
VALUES (null,'2', '2', '3434', '0', '56');
INSERT INTO `northwind`.`clientes` 
VALUES (null,'3', '3', '3434', '0', '56',null, null,'fdf', null);