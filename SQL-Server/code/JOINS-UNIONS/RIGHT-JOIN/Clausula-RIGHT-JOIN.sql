
--RIGHT JOIN OBTIENE LOS CAMPOS DE 2 TABLAS RELACIONADAS, LOS UNE EN UNA SOLA DE MANERA QUE TOMA EN CUENTA LA 2DA TABLA ESPECIFICADA PARA FILTRAR Y MUESTRAR LOS CAMPOS DE AMBAS
SELECT * FROM Paciente AS P 
RIGHT JOIN TurnoPaciente AS T
ON P.idPaciente = T.idPaciente