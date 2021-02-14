-- 1. +Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
SELECT * FROM client WHERE LENGTH(FirstName) < 6;

-- 2. +Вибрати львівські відділення банку.+
SELECT * FROM department WHERE DepartmentCity = 'Lviv';

-- 3. +Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
SELECT * FROM client WHERE Education = 'high' ORDER BY LastName;

-- 4. +Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.

-- Тобто вивести останні за ІД 5 елементів?
SELECT * FROM application ORDER BY idApplication DESC LIMIT 5;
-- Чи останні 5 після такого сортування?
SELECT * FROM application ORDER BY idApplication DESC LIMIT 5 OFFSET 10;

-- 5. +Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.
SELECT * FROM client WHERE LastName LIKE '%OV' OR LastName LIKE '%OVA';

-- 6. +Вивести клієнтів банку, які обслуговуються київськими відділеннями.
SELECT c.idClient, c.FirstName, c.LastName, c.Age, d.DepartmentCity
FROM client c
         JOIN department d ON c.Department_idDepartment = d.idDepartment
where d.DepartmentCity = 'Kyiv';

-- 7. +Вивести імена клієнтів та їхні номера телефону, погрупувавши їх за іменами.
-- В нас нема номерів телефону...
-- Тому я спробую паспорти! Якось так?
SELECT FirstName, Passport FROM client GROUP BY FirstName;
-- Чесно говорячи і це не має сенсу.

-- 8. +Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.
-- Так як крім гривні в таблиці є ще лише доллари і євро, і немає курсу валют - рахуємо просто по суммі не враховуючи значимість валюти
SELECT *
FROM client c
         JOIN application a on c.idClient = a.Client_idClient
WHERE Sum > 5000;

-- 9. +Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
-- Не до кінця зрозумів що мається на увазі про усі відділення - усі разом порахувати, чи всі по окремому відділені?

-- Разом
SELECT COUNT(c.idClient) as Clients
FROM department d
         JOIN client c on d.idDepartment = c.Department_idDepartment;

SELECT COUNT(c.idClient) as ClientsOfLviv
FROM department d
         JOIN client c on d.idDepartment = c.Department_idDepartment
where DepartmentCity = 'Lviv';

-- По окремості
SELECT d.idDepartment, d.DepartmentCity, COUNT(c.idClient) as Clients
FROM department d
         JOIN client c on d.idDepartment = c.Department_idDepartment
GROUP BY d.idDepartment;

SELECT d.idDepartment, d.DepartmentCity, COUNT(c.idClient) as Clients
FROM department d
         JOIN client c on d.idDepartment = c.Department_idDepartment
WHERE DepartmentCity = 'Lviv'
GROUP BY d.idDepartment;


-- 10. Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.
SELECT MAX(Sum), CreditState, Currency, Client_idClient FROM application GROUP BY Client_idClient;

-- 11. Визначити кількість заявок на крдеит для кожного клієнта.
SELECT c.idClient, c.FirstName, c.LastName, COUNT(a.Client_idClient) as CreditApp
FROM client c
         left join application a on c.idClient = a.Client_idClient
GROUP BY idClient;

-- 12. Визначити найбільший та найменший кредити.
-- Biggest
SELECT * FROM application ORDER BY Sum DESC LIMIT 1;
-- Smaller
SELECT * FROM application ORDER BY Sum LIMIT 1;


-- 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.
-- Разом
SELECT SUM(a.Sum) from application a join client c on a.Client_idClient = c.idClient WHERE Education = 'high';
-- Окремо
SELECT c.idClient, c.FirstName, c.LastName, c.Education, SUM(a.Sum)
from application a
         join client c on a.Client_idClient = c.idClient
WHERE Education = 'high'
GROUP BY c.idClient;

-- 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.
SELECT c.idClient, c.FirstName, c.LastName, c.Education, AVG(a.Sum) as averageCredit
from application a
         join client c on a.Client_idClient = c.idClient
GROUP BY c.idClient
ORDER BY averageCredit DESC
LIMIT 1;

-- 15. Вивести відділення, яке видало в кредити найбільше грошей
SELECT idDepartment, DepartmentCity, SUM(a.Sum) as creditSum
from department
         join client c on department.idDepartment = c.Department_idDepartment
         join application a on c.idClient = a.Client_idClient
GROUP BY idDepartment
ORDER BY creditSum DESC
LIMIT 1;

-- 16. Вивести відділення, яке видало найбільший кредит.
SELECT idDepartment, DepartmentCity, MAX(a.Sum) as maxCredit
from department
         join client c on department.idDepartment = c.Department_idDepartment
         join application a on c.idClient = a.Client_idClient
ORDER BY creditSum DESC
LIMIT 1;

-- 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
UPDATE application SET Sum = 6000 WHERE Client_idClient IN (SELECT idClient FROM client WHERE Education = 'high');

-- 18. Усіх клієнтів київських відділень пересилити до Києва.
UPDATE client SET City = 'Kyiv' WHERE Department_idDepartment IN (SELECT idDepartment FROM department WHERE DepartmentCity = 'Kyiv');

-- 19. Видалити усі кредити, які є повернені.
DELETE FROM application WHERE CreditState = 'Returned';


-- 20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.
DELETE FROM application WHERE Client_idClient IN (SELECT idClient from client WHERE REGEXP_LIKE(LastName, '^.[aeyuio].*$'));


-- Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000
SELECT idDepartment, DepartmentCity, SUM(a.Sum) as creditSum
from department
         join client c on department.idDepartment = c.Department_idDepartment
         join application a on c.idClient = a.Client_idClient
WHERE DepartmentCity = 'Lviv'
GROUP BY idDepartment
HAVING creditSum > 5000;

-- Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000
SELECT c.idClient, c.FirstName, c.LastName, c.Education, SUM(a.Sum) as returnedSum
from application a
         join client c on a.Client_idClient = c.idClient
WHERE a.CreditState = 'Returned'
GROUP BY c.idClient
HAVING returnedSum > 5000;


-- /* Знайти максимальний неповернений кредит.*/
SELECT idApplication, CreditState, Currency, Client_idClient, MAX(Sum) as creditSum
from application
WHERE CreditState = 'Not Returned';


-- /*Знайти клієнта, сума кредиту якого найменша*/
SELECT c.idClient, c.FirstName, c.LastName, c.Education, Sum(a.Sum) as creditSum
from application a
         join client c on a.Client_idClient = c.idClient
GROUP BY c.idClient
ORDER BY creditSum
LIMIT 1;


-- /*Знайти кредити, сума яких більша за середнє значення усіх кредитів*/
SELECT * from application WHERE Sum > (SELECT AVG(Sum) from application);

