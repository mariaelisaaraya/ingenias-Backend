
/* punto 3 */

SELECT * FROM northwind.products  where ProductID = 5 ORDER BY ProductName;
SELECT * FROM northwind.products  where CategoryID = 4 ORDER BY ProductName;

/* punto 4 */

SELECT * FROM northwind.products  where UnitsInStock >= 25 and UnitsInStock <= 40 ORDER BY ProductName;