SELECT apellido,nombre,observacion,idPais,
(SELECT ps.pais FROM Pais ps WHERE ps.idPais= pa.idPais) descPais
FROM Paciente pa WHERE idPaciente = 1