declare @var1 varchar(20)
set @var1 = 'Ramiro'
print LEFT(@var1,3)
print RIGHT(@var1,3)


DECLARE @var2 VARCHAR(20)
SET @var2  = 'Almanza'
print RIGHT(@var2 ,2) + LEFT(@var1,2)

-- EJEMPLO PRACTICO
select LEFT(apellido,2) from Paciente 