use MySqlTrailerFlix;
CREATE TABLE Generos (
   id INT AUTO_INCREMENT PRIMARY KEY ,
   descripcion VARCHAR(255)
);
-- Insertar datos en la tabla Generos
INSERT INTO Generos ( descripcion)
VALUES ('Ciencia Ficción'),('Drama'),('Suceso Real'),('Suspenso'),('Comedia'),('Familia'),('Terror'),
('Aventura'),('Acción'),('Fantasía');

CREATE TABLE Categorias (
   id INT AUTO_INCREMENT PRIMARY KEY,
   descripcion VARCHAR(55)
);
-- Insertar datos en la tabla Categorias
INSERT INTO Categorias ( descripcion)
VALUES ('Pelicula'),('Serie');

CREATE TABLE Tags (
   id INT AUTO_INCREMENT PRIMARY KEY,
   descripcion VARCHAR(255)
);
-- Insertar datos en la tabla Tags
INSERT INTO Tags (descripcion)
VALUES  ('Sci-Fi'),( 'Fantasía'),('Acción'),('Drama'),('Ficción'),('Sucesos'),
  ('Misterio'),('Suceso Real'),('Crimen') , ('Suspenso'),('Aventura') ,('Comedia'),
 ('Familia'), ('Western') , ('Tecnología'),('Futurista'),('Terror'),('Historia'), ('Intriga')
,('¿Ficción?'),('Ciencia ficción'), ('Romance'), ( 'Música'),('Musical'), ('Animación');

CREATE TABLE Actores (
   id INT AUTO_INCREMENT PRIMARY KEY,
   nombreCompleto VARCHAR(255)
);
-- Insertar datos en la tabla Actores en el archivo actores.sql

CREATE TABLE Trailers (
   id INT AUTO_INCREMENT  PRIMARY KEY,
   poster VARCHAR(255),
   titulo VARCHAR(255),
   categoria_id INT,
   genero_id INT,
   resumen TEXT,
   temporadas VARCHAR(10) NULL DEFAULT 'N/A',
   duracion VARCHAR(55) NULL DEFAULT 'N/A',
   trailer VARCHAR(255),
   FOREIGN KEY (genero_id) REFERENCES Generos(id),
   FOREIGN KEY (categoria_id) REFERENCES Categorias(id)
);
-- Insertar datos en la tabla Trailers en el archivo peliculas.sql

CREATE TABLE Trailers_Tags (
   trailer_id INT,
   tag_id INT,
   PRIMARY KEY (trailer_id, tag_id),
   FOREIGN KEY (trailer_id) REFERENCES Trailers(id),
   FOREIGN KEY (tag_id) REFERENCES Tags(id)
);


CREATE TABLE Reparto (
   trailer_id INT,
   actor_id INT,
   PRIMARY KEY (trailer_id, actor_id),
   FOREIGN KEY (trailer_id) REFERENCES Trailers(id),
   FOREIGN KEY (actor_id) REFERENCES Actores(id)
);
