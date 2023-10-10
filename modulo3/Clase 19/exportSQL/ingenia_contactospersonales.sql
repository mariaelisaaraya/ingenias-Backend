
use ingenia;
DROP TABLE IF EXISTS `contactospersonales`;

CREATE TABLE `contactospersonales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombreCompleto` varchar(70) NOT NULL,
  `telefono` varchar(22) NOT NULL DEFAULT '0',
  `tipoDeTelefono` varchar(15) DEFAULT 'N/A',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `contactospersonales` VALUES 
(1,'sdsds','1212121212','122222222222222'),
(2,'NEW VALUE','42223333','77777'),
(3,'NEW VALUE','11111','77777'),
(4,'NEW VALUE','11111','77777'),
(5,'Donna Clark','11-4455-0000','Móvil'),
(6,'Cameron Howe','11-4455-6688','Móvil'),
(7,'Gordon Clark','11-4455-0001','Móvil'),
(8,'Joe McMillian','11-4455-6677','N/A');

