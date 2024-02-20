declare @idPaciente int 
declare @idTurno int

set @idPaciente = 4

IF @idPaciente = 4
--cuerpo de la condicional
	begin
		set @idTurno = 20
		select * from Paciente where idPaciente = @idPaciente
		print @idTurno
	end
else
--cuerpo de la condicional else
	begin
		print 'no se cumplio la condicion'
	end
