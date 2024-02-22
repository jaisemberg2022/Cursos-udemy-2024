EXEC SELECT_HISTOIA_PACIENTE 3

CREATE PROCEDURE SELECT_HISTOIA_PACIENTE(
					@idPciente paciente 
)
AS
SET NOCOUNT ON 

IF EXISTS(SELECT * FROM Paciente P
		INNER JOIN HistoriaPaciente HP
		ON HP.idPaciente = P.idPaciente
		INNER JOIN Historia H
		ON H.idHistoria = HP.idHistoria
		INNER JOIN MedicoEspecialidad ME
		ON ME.idMedico = HP.idMedico
		INNER JOIN Medico M
		ON M.idMedico = ME.idMedico
		WHERE P.idPaciente = @idPciente
)

		SELECT * FROM Paciente P
		INNER JOIN HistoriaPaciente HP
		ON HP.idPaciente = P.idPaciente
		INNER JOIN Historia H
		ON H.idHistoria = HP.idHistoria
		INNER JOIN MedicoEspecialidad ME
		ON ME.idMedico = HP.idMedico
		INNER JOIN Medico M
		ON M.idMedico = ME.idMedico
		WHERE P.idPaciente = @idPciente
ELSE
		SELECT 0 AS resultado