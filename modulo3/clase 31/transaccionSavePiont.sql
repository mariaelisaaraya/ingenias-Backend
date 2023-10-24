start transaction;
insert into reparto values
((select id from Trailers where poster like "./posters/74.jpg"),(select id from Actores where nombreCompleto like "Gal Gadot")),
((select id from Trailers where poster like "./posters/74.jpg"),(select id from Actores where nombreCompleto like "Chris Pine")),
((select id from Trailers where poster like "./posters/74.jpg"),(select id from Actores where nombreCompleto like "Kristen Wiig")),
((select id from Trailers where poster like "./posters/74.jpg"),(select id from Actores where nombreCompleto like "Pedro Pascal"));
savepoint primer_lote;
insert into reparto values
((select id from Trailers where poster like "./posters/74.jpg"),(select id from Actores where nombreCompleto like "Robin Wright")),
((select id from Trailers where poster like "./posters/74.jpg"),(select id from Actores where nombreCompleto like "Connie Nielsen"));
savepoint segundo_lote;
insert into reparto values
((select id from Trailers where poster like "./posters/74.jpg"),(select id from Actores where nombreCompleto like "Lilly Aspell")),
((select id from Trailers where poster like "./posters/74.jpg"),(select id from Actores where nombreCompleto like "Amr Waked")),
((select id from Trailers where poster like "./posters/74.jpg"),(select id from Actores where nombreCompleto like "Kristoffer Polaha"));
savepoint tercer_lote;