EXEC SELECT_ESPECIALIDADES_MEDICAS

CREATE PROCEDURE SELECT_ESPECIALIDADES_MEDICAS

AS 
SET NOCOUNT ON

IF EXISTS(SELECT * FROM Especialidad)
			SELECT * FROM Especialidad
ELSE
	SELECT 0 AS resultado
