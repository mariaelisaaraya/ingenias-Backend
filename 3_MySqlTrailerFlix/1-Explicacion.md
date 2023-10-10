# Desafío de Base de Datos Trailerflix

## Modelo Relacional

Utilizando el archivo JSON `Trailerflix - JSON/trailerflix.json`, 

```json
{
  "id": 3,
  "poster": "./posters/3.jpg",
  "titulo": "The Mandalorian",
  "categoria": "Serie",
  "tags": "Sci-Fi, Fantasía, Acción",
  "genero": "Ciencia Ficción",
  "resumen": "Ambientada tras la caída del Imperio y antes de la aparición de la Primera Orden, la Serie sigue los pasos de un pistolero solitario en las aventuras que protagoniza en los confines de la galaxia, donde no alcanza la autoridad de la Nueva República.",
  "temporadas": 2,
  "reparto": "Pedro Pascal, Carl Weathers, Misty Rosas, Chris Bartlett, Rio Hackford, Giancarlo Esposito",
  "trailer": "https://www.youtube.com/embed/aOC8E8z_ifw"
}

```

Diseñar un modelo relacional de base de datos (bb.dd) que cumpla con los siguientes criterios:

- La base de datos debe tener al menos 4 tablas relacionales.
- Deben migrarse los datos del archivo JSON a la base de datos, considerando las entidades "cartelera/catalogo", "actores", "categorias", "genero", "tags" y "reparto".
- El diseño de la base de datos debe cumplir con la Tercera Forma Normal (3FN).

## Consultas SQL

Desarrollar las siguientes consultas SQL:

1. Obtener una lista de películas por género. Realizar una consulta que devuelva todas las películas de un género específico. Por ejemplo, mostrar todas las películas de género "Acción", "Terror" o "Suspenso".

2. Obtener una lista de películas por tags. Realizar una consulta que devuelva todas las películas con los tags "Aventura" y "Ciencia Ficción" o "Aventura" y "Fantasía".

3. Generar un informe donde se visualicen todos los títulos y categorías que en su resumen contengan la palabra "misión".

4. Generar un informe donde se visualicen las series con al menos 3 temporadas.

5. Encontrar cuántas películas/series trabajó el actor 'Chris Pratt'.

6. Informar actrices/actores y sus trabajos fílmicos. Mostrar el nombre completo de actrices/actores, el título de sus trabajos fílmicos, la categoría y el género.

7. Ver solo la categoría "películas". Mostrar el título en mayúscula, el género (en mayúscula), los tags (separados por coma en la misma columna, usando concat o group_concat), duración y el enlace al trailer.

8. Ver solo la categoría "series". Mostrar el título en mayúscula, el género (en mayúscula), los tags (separados por coma en la misma columna, usando concat o group_concat), la cantidad de temporadas, el enlace al trailer y el resumen.

9. Identificar la película/serie con más actores y la que posee menos actores (indicar la cantidad de actores en ambos casos).

10. Contar la cantidad total de películas registradas.

11. Contar la cantidad total de series registradas.

12. Obtener una lista de series en orden descendente basado en la cantidad de temporadas.

13. Agregar el campo "Fecha de lanzamiento" a la tabla de trabajos fílmicos como tipo Date y realizar la actualización con las fechas de películas/series del género "Aventura".

14. Buscar películas por palabra clave. Realizar una consulta que permita a los usuarios buscar películas utilizando palabras clave en el título o la descripción (por ejemplo, palabras clave como "Aventura", "madre" o "Ambientada").

15. Sumar la tabla "Ranking" que incluye el ID de la película/serie, calificación y comentarios. Utilizar operaciones SQL como joins, unions, concat, count, group by, etc.

**Nota:** Asegúrate de ajustar las consultas según el diseño específico de tu base de datos y los nombres de tablas y campos que hayas definido.
