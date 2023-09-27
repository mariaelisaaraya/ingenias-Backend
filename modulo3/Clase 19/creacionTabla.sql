-- creamos database
CREATE DATABASE `ingenia` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;


-- otra forma de correr los comandos/scripts/querys
use ingenia;
CREATE TABLE `contactospersonales1` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `NombreCompleto` VARCHAR(50) NOT NULL,
  `Teléfono` VARCHAR(12) NOT NULL DEFAULT 0,
  `TipoDeTelefono` VARCHAR(10) NOT NULL DEFAULT 'N/A',
  PRIMARY KEY (`Id`));

-- cremos tabla
CREATE TABLE `ingenia`.`contactospersonales` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `NombreCompleto` VARCHAR(50) NOT NULL,
  `Teléfono` VARCHAR(12) NOT NULL DEFAULT 0,
  `TipoDeTelefono` VARCHAR(10) NOT NULL DEFAULT 'N/A',
  PRIMARY KEY (`Id`));

-- cambios en los datos de la tabla
ALTER TABLE `ingenia`.`contactospersonales` 
CHANGE COLUMN `NombreCompleto` `NombreCompleto` VARCHAR(70) NOT NULL ,
CHANGE COLUMN `Teléfono` `Teléfono` VARCHAR(22) NOT NULL DEFAULT 0 ,
CHANGE COLUMN `TipoDeTelefono` `TipoDeTelefono` VARCHAR(15) NULL DEFAULT 'N/A' ;

-- insertar en la tabla

INSERT INTO `ingenia`.`contactospersonales`
(
`nombreCompleto`,
`telefono`,
`tipoDeTelefono`)
VALUES
( 'NEW VALUE', '11111', '77777'); 
-- sin un campo de la tabla
INSERT INTO `ingenia`.`contactospersonales`
 (`id`, `nombreCompleto`, `telefono`) 
VALUES ( '8',"Joe McMillian","11-4455-6677");
-- multiple insert
INSERT INTO `ingenia`.`contactospersonales`
 ( `nombreCompleto`, `telefono`) 
VALUES ( 'Cameron Howe', '11-4455-6688', 'Móvil'),
 ('Gordon Clark', '11-4455-0001', 'Móvil');

-- ACTUALIZACION
UPDATE `ingenia`.`contactospersonales` SET `tipoDeTelefono` = '777777' WHERE (`id` = '1');

-- renombrar 
ALTER TABLE `ingenia`.`contactospersonales` RENAME TO  `ingenia`.`otro_nombre_tabla` ;
