declare @turnos table (id int identity(1,1),idTurno turno,idPaciente paciente)
declare @idPaciente paciente 
set @idPaciente = 5

insert into @turnos (idTurno,idPaciente)
select TP.idTurno ,P.idPaciente from Paciente P
inner join TurnoPaciente TP 
on TP.idPaciente = P.idPaciente


declare @i int , @total int 
set @i = 1
set @total = (select COUNT(*) from @turnos)
while @i <= @total
begin
	if	(select * from @turnos where id = @i) <> @idPaciente	
	delete from @turnos where id = @i
	set @i = @i +1
end 

select * from Paciente P
inner join @turnos T
on T.idPaciente = P.idPaciente


