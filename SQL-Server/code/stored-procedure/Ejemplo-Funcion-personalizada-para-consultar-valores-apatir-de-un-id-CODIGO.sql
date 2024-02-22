CREATE PROC SP_ejemplo(
	@idPaciente int 
)
AS

SELECT apellido,nombre,observacion FROM Paciente WHERE idPaciente = @idPaciente 

GO