declare @var1 varchar(20)
declare @var2 varchar(20)

set @var1 = 'Ramiro'
set @var2 = 'Gonzales'


SELECT CONCAT(@var1,'  ',@var2) as nombreUnido