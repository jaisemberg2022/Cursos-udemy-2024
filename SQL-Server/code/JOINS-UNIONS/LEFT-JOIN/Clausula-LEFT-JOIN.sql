
--LEFT JOIN OBTIENE LOS CAMPOS DE 2 TABLAS RELACIONADAS, LOS UNE EN UNA SOLA DE MANERA QUE MUESTRA TODOS LOS REGISTRO DE AMBAS PARTES SIN IMPORTAR QUE NO EXISTA RELACION ALGUNA 
SELECT * FROM Paciente AS P 
LEFT JOIN TurnoPaciente AS T
ON P.idPaciente = T.idPaciente