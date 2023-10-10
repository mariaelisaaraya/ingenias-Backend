-- CREATE DATABASE 
CREATE DATABASE JUMP;
USE JUMP;
-- crear tabla Profesores
CREATE TABLE Profesores (
  idProfesor INT PRIMARY KEY AUTO_INCREMENT,
  nombreCompleto VARCHAR(100),
  materia VARCHAR(50),
  fechaContratacion DATE,
  telefono VARCHAR(20)
);
-- crear tabla aulas
-- opcion1 
CREATE TABLE Aulas (
  idAula INT PRIMARY KEY AUTO_INCREMENT,
  idProfesor INT,
  FOREIGN KEY (idProfesor) REFERENCES Profesores(idProfesor),
  capacidad INT
);

-- opcion2 
CREATE TABLE Aulas (
  idAula INT PRIMARY KEY AUTO_INCREMENT,
  idProfesor INT,
  capacidad INT
);
ALTER TABLE `jump`.`aulas` 
ADD CONSTRAINT `idProfesores`
  FOREIGN KEY (`idProfesor`)
  REFERENCES `jump`.`profesores` (`idProfesor`);

-- opcion3
CREATE TABLE Aulas (
  idAula INT PRIMARY KEY AUTO_INCREMENT,
  idProfesor INT,
  capacidad INT,
 CONSTRAINT `idProfesor`
  FOREIGN KEY (`idProfesor`)
  REFERENCES `jump`.`profesores` (`idProfesor`));

-- crear tabla Estudiantes
CREATE TABLE Estudiantes (
  idEstudiante INT PRIMARY KEY AUTO_INCREMENT,
  nombreCompleto VARCHAR(100),
  idAula INT,
  fechaNacimiento INT,
  direccion VARCHAR(200),
   CONSTRAINT `idAula`FOREIGN KEY (idAula) REFERENCES Aulas(idAula)
);
