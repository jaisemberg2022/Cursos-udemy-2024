DECLARE @contador int=0

WHILE @contador <= 10 
begin
	print @contador
	set @contador = @contador + 1
end