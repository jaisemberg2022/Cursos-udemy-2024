declare @valor int 
declare @resultado char(10) = ''
set @valor = 10

set @resultado = (case when @valor = 10 then 'ROJO'
					WHEN @valor = 20 then 'VERDE'
					WHEN @valor = 30 then 'AZUL'
				end)

print @resultado


--ejemplo practico con una tabla existente
select *,(case when estado = 0 then 'verde'
			when estado = 1 then 'rojo'
			when estado = 2 then 'azul'
			else 'GRIS'
			end) as colorTurno from turno 

