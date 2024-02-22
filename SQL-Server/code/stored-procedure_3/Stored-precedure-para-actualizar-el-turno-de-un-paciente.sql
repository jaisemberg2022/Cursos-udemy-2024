

EXEC UPDATE_TURNO 4,1,'EL PASIENTE PRESENTA SANGRADO'



CREATE PROCEDURE UPDATE_TURNO(
				@idTurno turno,
				@estado int,
				@observacion observacion
)

AS
SET NOCOUNT ON 


IF EXISTS(SELECT * FROM Turno WHERE idTurno = @idTurno)
	UPDATE Turno SET estado = @estado,
						observacion = @observacion
	WHERE idTurno = @idTurno 
ELSE	
	SELECT 0 AS Respuesta