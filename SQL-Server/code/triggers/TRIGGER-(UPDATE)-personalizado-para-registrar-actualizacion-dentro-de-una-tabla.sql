--  UN TRIGGER ES UN DESENCADENADOR DE EVENTOS QUE SE EJECUTA APARTIR DE LOS SIGUIENTES METODOS, FUNCIONA PARA REGISTRAR CAMBIOS DEUNA TABLA 
--	(1) INSERT 
--	(2) UPDATE 
--	(3) DELETE

CREATE TRIGGER PacientesEliminados ON Paciente
AFTER UPDATE
AS

IF EXISTS (SELECT idpaciente FROM PacienteLog
			WHERE idpaciente = (SELECT idpaciente FROM inserted))
	UPDATE PacienteLog SET fechaModificacion = GETDATE()
		WHERE idpaciente = (SELECT idpaciente FROM inserted)
ELSE
	INSERT INTO PacienteLog (idpaciente, idpais, fechaModificacion)
	SELECT idPaciente, idPais, GETDATE() FROM Deleted
