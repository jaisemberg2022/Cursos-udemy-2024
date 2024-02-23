
SELECT * FROM PacientesTurnosPendientes

CREATE VIEW PacientesTurnosPendientes AS 

SELECT P.idPaciente, P.nombre ,P.apellido,P.estado 
FROM Paciente P 
inner join TurnoPaciente TP
on TP.idPaciente = P.idPaciente
inner join Turno T
on T.idTurno = TP.idTurno
where isnull(T.estado,0	) = 0