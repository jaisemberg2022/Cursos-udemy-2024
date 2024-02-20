declare @contador int=0

while @contador <=10
begin
	print @contador
	set @contador = @contador +1 
	if @contador = 3 
		break
end
print 'sigue ejecutandose'