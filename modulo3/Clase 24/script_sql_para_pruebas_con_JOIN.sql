CREATE database agenda;
USE agenda;

CREATE TABLE CONTACTOS (
	Id 			INTEGER PRIMARY KEY auto_increment,
	nombreCompleto 	VARCHAR(70),
	Email 			VARCHAR(50),
	Telefono 		VARCHAR(22) NOT NULL,
	IdTipoTel 		INTEGER
);

CREATE TABLE TIPOSDETELEFONO (
	IdTipoTel		INTEGER PRIMARY KEY auto_increment,
	Descripcion		VARCHAR(16)
);

-- POBLAR LA TABLA TIPOS DE TELÉFONO CON REGISTROS PREDETERMINADOS
INSERT INTO TIPOSDETELEFONO
VALUES (null, 'Personal'),
	(null, 'Oficina'),
       (null, 'Móvil'),
       (null, 'Skype'),
       (null, 'WhatsApp'),
       (null, 'Satelital'),
       (null, 'Otro');

-- POBLAR LA TABLA CONTACTOS CON REGISTROS
INSERT INTO CONTACTOS
VALUES (null, 'Cameron Howe', 'cameron@mutiny.com', '11-4455-6699', 3),
	(null, 'Donna Clark', 'donna@mutiny.com', '11-4455-0000', 3),
       (null, 'Gordon Clark', 'gordou@mutiny.com', '11-4110-0909', 2),
       (null, 'Joe McMillian', 'joe@mutiny.com', '11-4844-1001', 6),
       (null, 'John Bosworth', 'bos@mutiny.com', '11-4844-1000', null),
       (null, 'Yo-Yo Engberk', 'yoyo@mutiny.com', '11-4844-1091', null),
       (null, 'Diane Gould', 'diane@mutiny.com', '11-4844-1050', 4),
       (null, 'Malcolm Levitan', 'malc@mutiny.com', '11-4110-5488', 5),
       (null, 'Joanie Clark', 'joanie@mutiny.com', '11-4810-1010', 1),
       (null, 'Haley Clark', 'hal@mutiny.com', '11-4810-1010', 1);