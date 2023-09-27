
-- Tabla Alumnos:

CREATE TABLE Alumnos (
    id_alumno INT PRIMARY KEY,
    nombre VARCHAR(50),
    fecha_nacimiento DATE,
    direccion VARCHAR(100),
    telefono VARCHAR(15)
);


-- Tabla Materias:

CREATE TABLE Materias (
    id_materia INT PRIMARY KEY,
    nombre_materia VARCHAR(50),
    creditos INT
);


-- Tabla Profesores:

CREATE TABLE Profesores (
    id_profesor INT PRIMARY KEY,
    nombre_profesor VARCHAR(50),
    especialidad VARCHAR(50)
);


-- Relación Alumnos_Materias:

CREATE TABLE Alumnos_Materias (
    id_alumno INT,
    id_materia INT,
    PRIMARY KEY (id_alumno, id_materia),
    FOREIGN KEY (id_alumno) REFERENCES Alumnos(id_alumno),
    FOREIGN KEY (id_materia) REFERENCES Materias(id_materia)
);

-- Relación Profesores_Materias:

CREATE TABLE Profesores_Materias (
    id_profesor INT,
    id_materia INT,
    PRIMARY KEY (id_profesor, id_materia),
    FOREIGN KEY (id_profesor) REFERENCES Profesores(id_profesor),
    FOREIGN KEY (id_materia) REFERENCES Materias(id_materia)
);

-- Insertar datos en la tabla Alumnos:
INSERT INTO Alumnos (id_alumno, nombre, fecha_nacimiento, direccion, telefono) VALUES
(1, 'Juan Perez', '1990-05-15', 'Calle 123, Ciudad', '123456789'),
(2, 'Maria Lopez', '1992-09-20', 'Avenida 456, Ciudad', '987654321'),
(3, 'Pedro Ramirez', '1995-03-10', 'Plaza 789, Ciudad', '456789123');


-- Insertar datos en la tabla Materias:
INSERT INTO Materias (id_materia, nombre_materia, creditos) VALUES
(1, 'Matemáticas', 4),
(2, 'Historia', 3),
(3, 'Ciencias', 5);


-- Insertar datos en la tabla Profesores:
INSERT INTO Profesores (id_profesor, nombre_profesor, especialidad) VALUES
(1, 'Ana Martinez', 'Matemáticas'),
(2, 'Carlos Rodriguez', 'Historia'),
(3, 'Laura Sanchez', 'Ciencias');


-- Insertar datos en la relación Alumnos_Materias:
INSERT INTO Alumnos_Materias (id_alumno, id_materia) VALUES
(1, 1),
(1, 2),
(2, 1),
(3, 3);


-- Insertar datos en la relación Profesores_Materias:
INSERT INTO Profesores_Materias (id_profesor, id_materia) VALUES
(1, 1),
(2, 2),
(3, 3);
