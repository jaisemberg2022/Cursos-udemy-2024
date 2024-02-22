exec DELETE_TURNO 6


CREATE PROCEDURE DELETE_TURNO(
				@idTurno turno
)

AS
SET NOCOUNT ON 

IF EXISTS(SELECT * FROM Turno
	WHERE idTurno = @idTurno)
	BEGIN
		DELETE FROM Turno WHERE idTurno = @idTurno
		DELETE FROM TurnoPaciente WHERE idTurno = @idTurno
	END
ELSE
	SELECT 0 AS resultado 