declare @var1 varchar(20)
set @var1 = 'Ramiro Gonzales'

print len(@var1)


-- ejemplo practico
select LEN(domicilio) domicilo from Paciente
