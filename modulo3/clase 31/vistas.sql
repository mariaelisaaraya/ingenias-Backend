CREATE VIEW ListaActoresYPeliculas AS
    SELECT trailers.titulo, actores.nombreCompleto 
    FROM mysqltrailerflix.reparto 
    join trailers on trailer_id =trailers.id
    join actores on actor_id =actores.id;
