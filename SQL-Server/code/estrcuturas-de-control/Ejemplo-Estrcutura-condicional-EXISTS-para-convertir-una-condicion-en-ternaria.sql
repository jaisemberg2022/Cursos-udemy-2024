declare @idPaciente int 
declare @idTurno int

set @idPaciente = 4

IF @idPaciente = 4
--cuerpo de la condicional
	begin
		set @idTurno = 20
		select * from Paciente where idPaciente = @idPaciente
		print @idTurno

		if exists(select * from Paciente where idPaciente = 3)
		print 'existe'
	end
