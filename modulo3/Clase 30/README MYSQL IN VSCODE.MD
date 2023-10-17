# DEBEN REVISAR SUS VARIABLES DE ENTORNO 

[Como cambiar las variables de entorno](https://platzi.com/tutoriales/1272-sql-mysql/2256-como-arreglar-mysql-no-se-reconoce-como-un-comando-interno-o-externo-programa-o-archivo-por-lotes-ejecutable/)

De no contar con C:\Program Files\MySQL\MySQL Server 8.0\bin sumarla

## Instalarse la siguiente extension 
Name: MySQL
Id: cweijan.vscode-mysql-client2
Description: Database manager for MySQL/MariaDB, PostgreSQL, SQLite, Redis and ElasticSearch.
Version: 6.7.8
Publisher: Weijan Chen
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-mysql-client2

## Ver de poder conectarme a mysql por terminal 
> mysql -uroot -p 
>
(va a pedirles una contraseña insertar la que pusieron al instalar mysql)

## Hacer un dump por terminal
> mysqldump -uroot -p nombre_basededatos > ./Ubicacion/archivoDondeGuardoElDump.sql
>

## Hacer una recuperacion por terminal
> mysql -u usuario -p nombre_basededatos < data.sql
>  mysql -h localhost -P 3306 -u root -p"root" --default-character-set=utf8 --ssl-mode=DISABLED nombre_basededatos < "c:\Documents\dumps\Dump20231017.sql"
>

## crear tabla apartir de un select
CREATE TABLE table_name AS
SELECT *
FROM another_table
WHERE condition;

## insert desde un select 
INSERT INTO table_name (column1, column2, ...) 
SELECT value1, value2, ... 
FROM another_table WHERE condition;