-- PAGINA DOCUMENTACION https://erd.dbdesigner.net/designer/schema/new 
CREATE DATABASE nombre_de_la_base_de_datos 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

CREATE TABLE `Categorias` (
	`idCategoria` INT NOT NULL AUTO_INCREMENT,
	`nombreCategoria` varchar(40) NOT NULL,
	`activa` BOOLEAN NOT NULL DEFAULT true,
	PRIMARY KEY (`idCategoria`)
);

CREATE TABLE `Productos` (
	`idProducto` INT NOT NULL AUTO_INCREMENT,
	`titulo` varchar(80) NOT NULL,
	`nombreProducto` varchar(50) NOT NULL DEFAULT 'N/A',
	`idCategoria` INT NOT NULL,
	`stockEnSucursal` INT NOT NULL DEFAULT '0',
	`stockEnDesposito` INT NOT NULL DEFAULT '0',
	`videoDemoURL` INT DEFAULT 'N/A',
	PRIMARY KEY (`idProducto`)
);

CREATE TABLE `Caracteristicas` (
	`idCaracteristica` INT NOT NULL AUTO_INCREMENT,
	`Descripcion` varchar(50) NOT NULL UNIQUE,
	PRIMARY KEY (`idCaracteristica`)
);

CREATE TABLE `ProductosCaracteristicas` (
	`idProdCarac` INT NOT NULL AUTO_INCREMENT,
	`idProducto` INT NOT NULL,
	`idCaracteristica` INT NOT NULL,
	`valor` varchar(40) NOT NULL DEFAULT 'N/A',
	PRIMARY KEY (`idProdCarac`)
);

ALTER TABLE `Productos` ADD CONSTRAINT `Productos_fk0` FOREIGN KEY (`idCategoria`) REFERENCES `Categorias`(`idCategoria`);

ALTER TABLE `ProductosCaracteristicas` ADD CONSTRAINT `ProductosCaracteristicas_fk0` FOREIGN KEY (`idProducto`) REFERENCES `Productos`(`idProducto`);

ALTER TABLE `ProductosCaracteristicas` ADD CONSTRAINT `ProductosCaracteristicas_fk1` FOREIGN KEY (`idCaracteristica`) REFERENCES `Caracteristicas`(`idCaracteristica`);
