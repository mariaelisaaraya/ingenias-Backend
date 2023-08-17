git config --global user.name "Nuevo Nombre" 
git config --global user.email "nuevo@email.com"

https://docs.github.com/es/get-started/getting-started-with-git/setting-your-username-in-git

—-----
Mongo DB

Name: MongoDB for VS Code
Id: mongodb.mongodb-vscode
Description: Connect to MongoDB and Atlas directly from your VS Code environment, navigate your databases and collections, inspect your schema and use playgrounds to prototype queries and aggregations.
Version: 1.2.0
Publisher: MongoDB
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode

—-------

Restablecer la Contraseña en MongoDB: Si realmente has olvidado la contraseña de acceso a MongoDB, deberías poder restablecerla a través de la línea de comandos de MongoDB. Para hacer esto, debes tener acceso a la instancia de MongoDB y seguir los procedimientos para cambiar la contraseña del usuario en la base de datos.
Puedes hacerlo usando el comando mongo en la línea de comandos y luego ejecutar comandos para administrar usuarios y contraseñas.
Por ejemplo, para cambiar la contraseña de un usuario llamado "usuario1":

use admin db.changeUserPassword("usuario1", "nueva-contraseña")

Hay que tener en cuenta que este proceso depende de que tengas acceso a la instancia de MongoDB y los permisos necesarios.

Para saber más: 
La documentación oficial de MongoDB se encuentra en el sitio web de MongoDB: Documentación de MongoDB

o siempre tu buen amigo Google.
