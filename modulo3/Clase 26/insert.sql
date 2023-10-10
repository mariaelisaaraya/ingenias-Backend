
/*
El modelo de tablas que has creado se encuentra en la Tercera Forma Normal (3NF).
La Tercera Forma Normal (3NF) se cumple cuando se cumplen las siguientes condiciones:
    - La tabla está en Segunda Forma Normal (2NF).
    - No existen dependencias transitivas en la tabla.
    - En tu modelo de tablas, cada tabla tiene su clave primaria correctamente definida 
    y no existen dependencias transitivas entre los campos. 
Por lo tanto, cumple con la Tercera Forma Normal (3NF).
*/
-- Para la tabla Profesores:
INSERT INTO Profesores (nombreCompleto, materia, fechaContratacion, telefono) 
VALUES ('Juan Perez', 'Matemáticas', '2021-01-15', '1234567890');

INSERT INTO Profesores (nombreCompleto, materia, fechaContratacion, telefono)
 VALUES ('Maria Gomez', 'Historia', '2020-05-10', '9876543210');

INSERT INTO Profesores (nombreCompleto, materia, fechaContratacion, telefono) VALUES 
('Pedro Rodriguez', 'Ciencias', '2019-09-20', '5555555555');

-- Insertar multiples en una linea
INSERT INTO Profesores (nombreCompleto, materia, fechaContratacion, telefono) VALUES 
    ('Ana Rodriguez', 'Biología', '2020-02-10', '1111111111'),
    ('Carlos Sanchez', 'Inglés', '2019-07-20', '2222222222'),
    ('Laura Gomez', 'Artes', '2021-03-05', '3333333333'),
    ('Juan Torres', 'Física', '2018-11-15', '4444444444'),
    ('María López', 'Química', '2017-09-30', '5555555555');

-- Para la tabla Aulas:
INSERT INTO Aulas (idProfesor, capacidad) VALUES (1, 30);

INSERT INTO Aulas (idProfesor, capacidad) VALUES (2, 25);

INSERT INTO Aulas (idProfesor, capacidad) VALUES (3, 20);

-- Insertar multiples en una linea
INSERT INTO Aulas (idProfesor, capacidad) VALUES (4, 35),(5, 40),(6, 30),(7, 25),(8, 20);

-- Para la tabla Estudiantes:
INSERT INTO Estudiantes (nombreCompleto, idAula, fechaNacimiento, direccion) VALUES 
('Ana Martinez', 1, 20050201, 'Calle 123, Ciudad');

INSERT INTO Estudiantes (nombreCompleto, idAula, fechaNacimiento, direccion) VALUES 
('Luis Ramirez', 2, 20040315, 'Avenida 456, Ciudad');

INSERT INTO Estudiantes (nombreCompleto, idAula, fechaNacimiento, direccion) VALUES 
('Laura Sanchez', 3, 20060110, 'Calle 789, Ciudad');

-- Insertar multiples en una linea
INSERT INTO Estudiantes (nombreCompleto, idAula, fechaNacimiento, direccion) VALUES 
('Luisa Martinez', 1, 20040210, 'Calle 123, Ciudad'),
('Pedro Ramirez', 2, 20050115, 'Avenida 456, Ciudad'),
('Sofía Sanchez', 3, 20040320, 'Calle 789, Ciudad'),
('Miguel Torres', 4, 20060225, 'Avenida 012, Ciudad'),
('Ana López', 5, 20050105, 'Calle 345, Ciudad');