Un "buffer" es como una caja donde puedes poner datos en forma de números o bytes. Imaginen que necesitas guardar una serie de números o letras en una caja para luego enviarla por correo. Esa caja es un buffer. Puedes poner datos dentro de ella y sacarlos cuando los necesitas. Esto es útil cuando trabajas con información que no es solo texto, como imágenes o archivos de audio. El buffer te permite manejar estos datos de manera eficiente y segura.


------------------------------------------------------------------------------------

El "encoding" (codificación) se refiere a la forma en que se representan y almacenan los caracteres en una secuencia de bytes en la memoria de una computadora. Dado que las computadoras trabajan principalmente con números y datos binarios, necesitan una manera de traducir caracteres legibles por humanos (como letras y símbolos) en números que puedan ser almacenados y manipulados en la memoria.

Existen diferentes estándares de codificación que definen cómo se asignan los caracteres a los números. 

Algunos ejemplos populares de codificaciones incluyen UTF-8, UTF-16, ASCII y ISO-8859-1.

ASCII: Una codificación muy antigua que asigna números a un conjunto limitado de caracteres en inglés, como letras, números y algunos símbolos comunes. Solo puede representar caracteres en inglés y carece de soporte para caracteres de otros idiomas.

UTF-8: Una codificación más moderna que puede representar una amplia gama de caracteres de muchos idiomas diferentes, incluyendo caracteres especiales, letras acentuadas, símbolos y mucho más. Es ampliamente utilizado y compatible con la mayoría de los sistemas y aplicaciones modernas.

UTF-16: Similar a UTF-8 pero utiliza 16 bits por carácter en lugar de 8. Es comúnmente utilizado en aplicaciones que requieren soporte completo para caracteres de múltiples idiomas.

Cuando trabajas con buffers en Node.js (o en cualquier lenguaje de programación), es importante especificar la codificación adecuada al convertir entre datos binarios y texto legible. Por ejemplo, al leer o escribir en archivos, al interactuar con redes, al procesar entradas y salidas de usuario, etc.

Un ejemplo en Node.js:

const buffer = Buffer.from("Hola, mundo!", "utf-8"); // Crear un buffer con texto en UTF-8
const texto = buffer.toString("utf-8"); // Convertir el buffer de nuevo a texto en UTF-8

Elegir la codificación correcta es esencial para asegurarte de que los datos se almacenan y se presentan correctamente, especialmente cuando trabajas con sistemas que usan diferentes conjuntos de caracteres o idiomas.

Mas info : https://medium.com/@diego.coder/buffers-y-streams-en-node-js-bd96a55420ea