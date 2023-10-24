start transaction;
UPDATE `northwind`.`employees` SET `Address` = '945 W. Capital Way' WHERE (`EmployeeID` = '2');
COMMIT;