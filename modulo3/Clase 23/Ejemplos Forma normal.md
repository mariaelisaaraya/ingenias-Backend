# La primera forma normal – 1NF
Para una tabla ser la primera forma normal, debe cumplir el siguiente criterio:
- una sola celda no debe contener más de un valor (atomicidad)
- debe haber una clave primaria para identificación
- no filas o columnas duplicadas
- cada columna debe tener solamente un valor por cada fila en la tabla
  
1. Ejemplo de 1ª Forma Normal:
```sql
CREATE TABLE Alumnos (
    id_alumno INT PRIMARY KEY,
    nombre VARCHAR(50),
    edad INT,
    direccion VARCHAR(100)
);

CREATE TABLE Materias (
    id_materia INT PRIMARY KEY,
    nombre VARCHAR(50),
    creditos INT
);

CREATE TABLE Profesores (
    id_profesor INT PRIMARY KEY,
    nombre VARCHAR(50),
    especialidad VARCHAR(50)
);
```
Puedes encontrar más información sobre la normalización de bases de datos en [este enlace](https://learn.microsoft.com/es-es/office/troubleshoot/access/database-normalization-description).

# La segunda forma normal – 2NF
El 1NF solamente elimina los grupos repetitivos, no la redundancia. Por eso hay 2NF. 
Una tabla se dice que está en 2NF si cumple el siguiente criterio:
- ya está en 1NF
- no tiene dependencia parcial. Es decir, todos los atributos no claves son totalmente dependientes de la clave primaria
  
1. Ejemplo de 2ª Forma Normal:
```sql
CREATE TABLE Alumnos (
    id_alumno INT PRIMARY KEY,
    nombre VARCHAR(50),
    edad INT,
    direccion VARCHAR(100)
);

CREATE TABLE Materias (
    id_materia INT PRIMARY KEY,
    nombre VARCHAR(50),
    creditos INT
);

CREATE TABLE Profesores (
    id_profesor INT PRIMARY KEY,
    nombre VARCHAR(50),
    especialidad VARCHAR(50)
);


CREATE TABLE Alumnos_Materias (
    id_alumno INT,
    id_materia INT,
    PRIMARY KEY (id_alumno, id_materia),
    FOREIGN KEY (id_alumno) REFERENCES Alumnos(id_alumno),
    FOREIGN KEY (id_materia) REFERENCES Materias(id_materia)
);

CREATE TABLE Materias_Profesores (
    id_materia INT,
    id_profesor INT,
    PRIMARY KEY (id_materia, id_profesor),
    FOREIGN KEY (id_materia) REFERENCES Materias(id_materia),
    FOREIGN KEY (id_profesor) REFERENCES Profesores(id_profesor)
);
```
En este ejemplo, se crean dos tablas de relación: "Alumnos_Materias" y "Materias_Profesores". Estas tablas permiten establecer las relaciones muchos a muchos entre las entidades Alumnos, Materias y Profesores.

La tabla "Alumnos_Materias" tiene dos columnas que representan las claves primarias de las tablas Alumnos y Materias, respectivamente. Estas columnas forman una clave primaria compuesta y establecen la relación de los alumnos con las materias que están cursando.

La tabla "Materias_Profesores" también tiene dos columnas que representan las claves primarias de las tablas Materias y Profesores, respectivamente. Estas columnas forman una clave primaria compuesta y establecen la relación de las materias con los profesores que las imparten.

Estas tablas cumplen con la segunda forma normal (2NF) ya que:
- Cada tabla tiene una clave primaria única y no hay dependencias parciales.
- Las columnas dependen completamente de la clave primaria y no hay dependencias transitivas.
  
Puedes encontrar más información sobre la normalización de bases de datos en [este enlace](https://www.freecodecamp.org/espanol/news/normalizacion-de-base-de-datos-formas-normales-1nf-2nf-3nf-ejemplos-de-tablas/).

# La tercera forma normal – 3NF
Cuando una tabla está en 2NF, elimina los grupos repetitivos y la redundancia, pero no elimina la dependencia parcial transitiva.
Esto significa que un atributo no principal (un atributo que no forma parte de la clave del candidato) es dependiente de otro atributo no principal. Esto es lo que la tercera forma normal (3NF) elimina.
Así que, para que una tabla esté en 3NF, debe:
- estar en 2NF
- no tiene dependencia parcial transitiva

3. Ejemplo de 3ª Forma Normal:
```sql
CREATE TABLE Alumnos (
    id_alumno INT PRIMARY KEY,
    nombre VARCHAR(50),
    edad INT,
    direccion VARCHAR(100)
);

CREATE TABLE Materias (
    id_materia INT PRIMARY KEY,
    nombre VARCHAR(50),
    creditos INT,
    id_profesor INT,
    FOREIGN KEY (id_profesor) REFERENCES Profesores(id_profesor)
);

CREATE TABLE Profesores (
    id_profesor INT PRIMARY KEY,
    nombre VARCHAR(50),
    especialidad VARCHAR(50)
);

CREATE TABLE Alumnos_Materias (
    id_alumno INT,
    id_materia INT,
    PRIMARY KEY (id_alumno, id_materia),
    FOREIGN KEY (id_alumno) REFERENCES Alumnos(id_alumno),
    FOREIGN KEY (id_materia) REFERENCES Materias(id_materia)
);

CREATE TABLE Materias_Profesores (
    id_materia INT,
    id_profesor INT,
    PRIMARY KEY (id_materia, id_profesor),
    FOREIGN KEY (id_materia) REFERENCES Materias(id_materia),
    FOREIGN KEY (id_profesor) REFERENCES Profesores(id_profesor)
);
```
En este ejemplo, se crean dos tablas de relación: "Alumnos_Materias" y "Materias_Profesores". Estas tablas permiten establecer las relaciones muchos a muchos entre las entidades Alumnos, Materias y Profesores.
Estas tablas cumplen con la tercera forma normal (3NF) ya que:

- Cada tabla tiene una clave primaria única y no hay dependencias parciales.
- Las columnas dependen completamente de la clave primaria y no hay dependencias transitivas. 
- No hay dependencias transitivas, es decir, no hay columnas que dependan de otras columnas que no sean la clave primaria.
  
Puedes encontrar más información sobre la normalización de bases de datos en [este enlace](https://platzi.com/blog/normalizar-una-base-de-datos-y-no-morir-en-el-intento/).

Recuerda que estos son solo ejemplos básicos y que la estructura de las tablas puede variar según las necesidades y los requerimientos específicos de tu base de datos. Es importante analizar y normalizar adecuadamente la estructura de la base de datos para evitar redundancias y mantener la integridad de los datos.

Hay también 4NF (cuarta forma normal) y 5NF (quinta forma normal). Hay inclusive 6NF (sexta forma normal), pero la forma normal más común que verás por ahí es 3NF (tercera forma normal).

Todos los tipos de normalización de base de datos son acumulativos – lo que quiere decir es cada uno se construye uno sobre el otro. Así que todos los conceptos en 1NF también llevan al 2NF, y así sucesivamente.