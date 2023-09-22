select EmployeeID,
    concat(LastName, ", ", FirstName) as nombreCompleto,
    concat(TitleOfCourtesy, " ", LastName, ", ", FirstName) as nombreCompletoConTitulo 
from northwind.employees;

select EmployeeID,
   ucase(title) as tituloEnMayuscula
from northwind.employees;

select EmployeeID,
lcase(Country) CountryEnMinuscula
from northwind.employees;

SELECT Reverse('kcilc neht txet ruoy retnE') alRevez;

SELECT '   TEXTO CON ESPACIOS    ',TRIM('   TEXTO CON ESPACIOS    ') AS SINESPACIOSALOSLADOS;
SELECT '   TEXTO CON ESPACIOS',LTRIM('   TEXTO CON ESPACIOS') AS SINESPACIOSALAIZQUIERDA;
SELECT ' TEXTO CON ESPACIOS    ',RTRIM('  TEXTO CON ESPACIOS    ') AS SINESPACIOSALADERECHA;
SELECT SPACE(21) AS ESPACIOS;
SELECT REPLACE("SQL SERVER ES EL MEJOR","SQL SERVER", "MYSQL") AS ELPREFERIDO;
SELECT CHAR_LENGTH("Curso de mysql");
SELECT INSTR("Programacion para servidores(backend)", "backend") AS POSICION;
SELECT MID("Programacion para servidores(backend)", 30, 7) AS PALABRAS;

SELECT ProductID AS CODIGO,
UCASE(ProductName) AS DESCRIPCION,
QuantityPerUnit AS PRESENTACION,
UnitPrice AS PRECIOUNITARIO FROM northwind.products;


select abs(-255.42) as valorAbsoluto;
select ceil(21.375) as redondeoParaArriba;
select floor(21.375) as redondeoParaAbajo;
select greatest(1,2,4,99,34,55,233,545,66,0,7,1) as mayor;
select least(1,2,4,99,-34,55,233,545,66,0,7,1) as menor;
select mod(21,4) as modulo_resto;

-- https://dev.mysql.com/doc/refman/8.0/en/string-functions.html 

select 
    NOW() 'fecha y hora actual', 
    CURDATE() 'ver el día actual',
    DATE(NOW()) 'solo fecha',
    Time(NOW()) 'solo tiempo',
    DAY(NOW()) 'retorna el día para una fecha',
    MONTH(NOW()) 'retorna el mes para una fecha',
    YEAR(NOW()) 'retorna el año para una fecha',
    DATEDIFF('2023-12-24','2023-09-21') "cuanto falta para navidad?" ,
    DAYOFYEAR('2023-09-13') "cuántos días
    transcurrieron en la fecha indicada en el año",
    WEEKOFYEAR('2023-01-02') "cuántas semanas
    transcurrieron en la fecha indicada en el año",
    QUARTER(now()) as "trimestre nro",
    monthname('2023-12-24') "nombre mes",
    period_diff('202304','202301') as "periodo cantidad de meses trascurridos",
    date_add('2023-12-24',interval 4 year) as "suma años a la fecha segun lo mandado en el intervalo";

SELECT 
    TIME(NOW()) 'solo tiempo',
    CURTIME() 'devuelve la hora actual',
    TIME_TO_SEC('20:52:41') 'cuántos segundos transcurrieron en el tiempo indicado',
    TIMEDIFF(CURTIME(),'20:52:41') 'período de tiempo entre las dos horas indicadas'
;