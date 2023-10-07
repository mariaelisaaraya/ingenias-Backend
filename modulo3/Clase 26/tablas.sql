CREATE TABLE Profesores (
  idProfesor INT PRIMARY KEY AUTO_INCREMENT,
  nombreCompleto VARCHAR(100),
  materia VARCHAR(50),
  fechaContratacion DATE,
  telefono VARCHAR(20)
);

CREATE TABLE Aulas (
  idAulas INT PRIMARY KEY AUTO_INCREMENT,
  idProfesor INT,
  FOREIGN KEY (idProfesor) REFERENCES Profesores(idProfesor),
  capacidad INT
);

CREATE TABLE Estudiantes (
  idEstudiante INT PRIMARY KEY AUTO_INCREMENT,
  nombreCompleto VARCHAR(100),
  idAula INT,
  fechaNacimiento INT,
  direccion VARCHAR(200),
  FOREIGN KEY (idAula) REFERENCES Aulas(idAula)
);
