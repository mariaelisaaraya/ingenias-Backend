- https://ed.team/blog/como-se-deciden-las-versiones-del-software

------------------------------------------------------------------
En TypeScript, ser "fuertemente tipado" significa que el lenguaje requiere que se especifique el tipo de cada variable o dato de manera explícita. Esto implica que una vez que se ha asignado un tipo particular a una variable, no se puede cambiar a otro tipo diferente en el curso del programa, a menos que se realice una conversión de tipo explícita.

En un lenguaje fuertemente tipado como TypeScript, los tipos son verificados en tiempo de compilación, lo que ayuda a detectar errores y proporciona una mayor seguridad en el código. Si se intenta realizar una operación incompatible con el tipo de una variable, el compilador de TypeScript emitirá un error y te señalará dónde se encuentra el problema.

Por ejemplo, considera el siguiente código TypeScript:

let miNumero: number = 10;
let miTexto: string = "Hola, mundo";

miNumero = "error"; // Esto generará un error en tiempo de compilación porque se está intentando asignar un string a una variable de tipo number.
miTexto = "¡Hola, TypeScript!"; // Esto está bien, ya que se está asignando un string a una variable de tipo string.

En este ejemplo, miNumero se declara como una variable de tipo number y miTexto como una variable de tipo string. Intentar asignar un valor de tipo no numérico a miNumero resultará en un error de compilación debido a que TypeScript es fuertemente tipado.

La ventaja de la fuerte tipificación es que ayuda a evitar muchos errores comunes en el desarrollo de software, ya que obliga a los programadores a seguir ciertas reglas y a asegurarse de que las operaciones y asignaciones sean coherentes con los tipos definidos.

En contraste, los lenguajes débilmente tipados permiten conversiones implícitas entre diferentes tipos y pueden conducir a resultados inesperados si no se tiene cuidado, ya que los errores pueden surgir en tiempo de ejecución en lugar de tiempo de compilación. TypeScript, al ser un lenguaje fuertemente tipado, ofrece una mayor seguridad y facilidad para detectar errores antes de la ejecución del código.

-----------------------------------------------------------------


El archivo package.json y el package-lock.json son dos archivos utilizados en proyectos Node.js para gestionar las dependencias del proyecto, pero cumplen diferentes propósitos:

package.json:
El archivo package.json es un archivo de configuración que contiene metadatos sobre el proyecto, así como información sobre las dependencias que se utilizan. Este archivo se crea manualmente o se puede generar automáticamente utilizando el comando npm init. En el package.json, se especifican el nombre del proyecto, su versión, descripción, scripts personalizados, autor, licencia y otras configuraciones importantes.
Además de la información del proyecto, el package.json contiene una sección llamada "dependencies" (dependencias) donde se enumeran las dependencias del proyecto que son necesarias para que la aplicación se ejecute en producción. Estas dependencias se instalan utilizando el comando npm install o npm ci, y se guardan en una carpeta llamada "node_modules". Sin embargo, el package.json no guarda información específica sobre las versiones exactas de las dependencias instaladas.

package-lock.json:
El package-lock.json es un archivo generado automáticamente por npm (Node Package Manager) cuando se instala o actualiza un paquete en el proyecto. Su objetivo principal es proporcionar una descripción detallada y precisa de las versiones exactas de todas las dependencias que se instalan en el proyecto, incluyendo las dependencias transitivas (dependencias de las dependencias).
Este archivo se asegura de que, en futuras instalaciones o despliegues del proyecto, las mismas versiones exactas de las dependencias se utilicen, evitando así posibles inconsistencias y conflictos entre versiones. Es especialmente útil cuando se trabaja en un equipo o en diferentes entornos, ya que garantiza que todos utilicen exactamente las mismas versiones de las dependencias.

En resumen, el package.json es el archivo principal de configuración del proyecto, que incluye metadatos y listas de dependencias, mientras que el package-lock.json es un archivo generado automáticamente que proporciona una descripción precisa de las versiones exactas de las dependencias instaladas, asegurando consistencia en el proyecto. Ambos archivos son importantes para la gestión de dependencias en proyectos Node.js y trabajan en conjunto para mantener la coherencia y estabilidad del proyecto.

---------------------------------------------------------------------

https://github.com/ryanmcdermott/clean-code-javascript

--------------------------------------------------------------------


