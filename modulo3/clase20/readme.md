[Aprender jugando](https://github.com/NUKnightLab/sql-mysteries/tree/master)
# Como lee sql una query?
La orden de prioridad al leer una query SQL se refiere al orden en el que se evalúan las diferentes cláusulas y operaciones en una consulta SQL. Aunque puede variar ligeramente dependiendo del motor de base de datos, generalmente sigue el siguiente orden:

1. FROM: Se especifica la tabla o tablas de las que se obtendrán los datos.
2. WHERE: Se aplican las condiciones para filtrar los registros que cumplen con ciertos criterios.
3. GROUP BY: Se agrupan los registros según una o varias columnas.
4. HAVING: Se aplican condiciones adicionales a los grupos resultantes.
5. SELECT: Se seleccionan las columnas que se mostrarán en el resultado.
6. DISTINCT: Se eliminan los registros duplicados del resultado.
7. ORDER BY: Se ordenan los registros según una o varias columnas.
8. LIMIT/OFFSET: Se limita el número de registros retornados o se especifica el número de registros que se saltarán.

Es importante tener en cuenta que este orden de prioridad puede ser alterado utilizando paréntesis para agrupar cláusulas y así controlar el orden de evaluación.

Para obtener más información sobre el orden de prioridad al leer una query SQL y cómo funciona en diferentes motores de base de datos, puedes consultar los siguientes enlaces:

- Documentación oficial de MySQL: https://dev.mysql.com/doc/refman/8.0/en/select.html
- Documentación oficial de PostgreSQL: https://www.postgresql.org/docs/current/sql-select.html
- Documentación oficial de Oracle: https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/SELECT.html
- Documentación oficial de Microsoft SQL Server: https://docs.microsoft.com/en-us/sql/t-sql/queries/select-transact-sql?view=sql-server-ver15
- Formulación de Consultas con SQL https://yeilinagreen.blogspot.com/2019/11/formulacion-de-consultas-con-sql.html 
  
Recuerda que el orden de prioridad puede variar ligeramente entre los diferentes motores de base de datos, por lo que es importante consultar la documentación específica del motor que estés utilizando.
![Alt text](image.png)