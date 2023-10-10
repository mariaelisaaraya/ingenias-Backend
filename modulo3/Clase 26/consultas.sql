/* Saber el nombre del producto con el menor precio
 y el nombre del producto con el mayor precio en la misma consulta?
 */

 -- opcion 1
SELECT ProductName,  (SELECT MIN(UnitPrice) FROM Products) as minimoPrecio
FROM Products
WHERE UnitPrice = (SELECT MIN(UnitPrice) FROM Products)
UNION
SELECT ProductName, (SELECT MAX(UnitPrice) FROM Products )as maximoPrecio
FROM Products
WHERE UnitPrice = (SELECT MAX(UnitPrice) FROM Products);

-- opcion 2
(SELECT ProductName, UnitPrice FROM Products ORDER BY UnitPrice ASC LIMIT 1)
UNION 
(SELECT ProductName, UnitPrice FROM Products ORDER BY UnitPrice DESC LIMIT 1);

-- opcion 3
(SELECT ProductName, UnitPrice as min, null max FROM Products ORDER BY UnitPrice ASC LIMIT 1)
UNION 
(SELECT ProductName, null,UnitPrice max  FROM Products ORDER BY UnitPrice DESC LIMIT 1);

-- Querys escritas en la clase sobre la ppt
Create Database  `nombre-DeMi_NuevaBase`;
-- creo esquema/database
Create schema  `basededatos` default character set utf8;
-- uso el esquema/database
use basededatos;
-- creo la tabla en la base de datos
Create Table amigos(
id int not null Auto_increment Primary key,
nombre varchar(30) not null,
apellido varchar(30) not null,
mail varchar(50) not null);

-- agregar columnas
alter table amigos 
    add telefono varchar(20) null, 
    add comentarios Varchar(200) null;
-- modificar columnas
alter table amigos 
    modify edad int not null after apellido,
    modify telefono varchar(50) null;
-- renombrar columnas
ALTER TABLE amigos
    RENAME COLUMN edadamigo to edad;
-- borrar columnas
ALTER TABLE amigos
    drop COLUMN comentarios;
-- agregar columna comentarios
alter table amigos 
add comentarios Varchar(200) null;
-- cambio de nombre y longitud
alter table amigos
change comentarios sugerencias Varchar(500);

-- renombro tabla
alter table amigos 
rename contactos;
-- borrar columnas
ALTER TABLE contactos
    drop  sugerencias;
SELECT * FROM basededatos.contactos;
