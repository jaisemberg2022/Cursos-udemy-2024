
EXEC SELECT_TURNOS_PACIENTE 5

CREATE PROCEDURE SELECT_TURNOS_PACIENTE(
					@idPaciente paciente
)

AS 

 
SELECT * FROM Paciente P

INNER JOIN TurnoPaciente TP
ON TP.idPaciente = P.idPaciente
INNER JOIN Turno T 
ON T.idTurno = TP.idTurno
INNER JOIN MedicoEspecialidad M
ON M.idMedico = TP.idMedico
WHERE P.idPaciente = @idPaciente