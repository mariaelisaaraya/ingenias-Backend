```json
{
  "id": 3 (autoincremental),
  "poster": "./posters/3.jpg" (varchar),
  "titulo": "The Mandalorian" (varchar),
  "categoria": id foranea (int, une con la tabla categorias),
  "genero": id foranea (int, une con la tabla generos),
  "resumen": "Ambientada tras la caída del Imperio y antes de la aparición de la Primera Orden, la Serie sigue los pasos de un pistolero solitario en las aventuras que protagoniza en los confines de la galaxia, donde no alcanza la autoridad de la Nueva República.",
  "temporadas": 2 (int),
  "trailer": "https://www.youtube.com/embed/aOC8E8z_ifw" (varchar)
}
```

catalogos:
- "id" (not null)
- "poster" (null por default)
- "titulo" (not null)
- "tipo" (enum('pelicula','serie') o tipoid que sea foranea de la tabla tipos)
- "categoriaid" (null por default, que sea foranea de la tabla categorias)
- "generoid" (null por default, que sea foranea de la tabla generos)
- "resumen" (null por default)
- "temporadas" (null por default)
- "duracion" (null por default)
- "trailer"

tipos:
- serie
- pelicula
- programa de tv
- cortometraje
- audiolibro
