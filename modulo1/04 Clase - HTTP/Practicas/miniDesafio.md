Desafío
Crear un servidor web utilizando el
módulo HTTP.
El mismo deberá contener una serie de
rutas específicas, y responder con
HTML acorde, cada vez que se
peticiona a cada ruta.
También deberás controlar las rutas
erróneas, respondiendo con un texto
acorde ante una petición errónea

Prácticas
Definiremos una constante PORT, con el valor 3008. En el servidor web, debemos
tener definidas a las siguientes rutas:
● “/”
● “/cursos”
● “/contacto”
Sesteamos el método header() en c/u de ellas para enviar content-type en formato
HTML. En el método end() debemos enviar un tag H1 con un título descriptivo para
la ruta que estamos navegando. Ejemplo:
● “Bienvenidas a nuestra web” => para la raíz “/” del sitio
● “Bienvenidas a nuestra sección cursos” => para /cursos
Recordemos agregar también el control de rutas inexistentes, respondiendo con un
mensaje acorde, pero en formato TEXTO PLANO.