declare @contador int=0

--primera seccion de la condicional
begin try
	set @contador = 'texto'
end try
--segunda seccion de la condicional
begin catch
	print 'no es posible asignar el texto a la variable contador de tipo int'	
end catch