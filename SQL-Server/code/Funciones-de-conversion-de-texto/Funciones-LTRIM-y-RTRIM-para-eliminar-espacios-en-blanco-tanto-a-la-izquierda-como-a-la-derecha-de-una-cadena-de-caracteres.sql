declare @var1 varchar(20)
declare @var2 varchar(20)

set @var1 = '     Ramiro     '
set @var2 = 'Gonzales     '


select LTRIM(@var1) + RTRIM(@var2) 
