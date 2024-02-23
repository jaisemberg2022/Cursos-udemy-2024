SELECT * FROM VIEW_Medicos_Especialidad


CREATE VIEW VIEW_Medicos_Especialidad AS 
SELECT  M.idMedico,M.nombre,M.apellido,	ME.idEspecialidad,ME.descripcion FROM Medico M
inner join MedicoEspecialidad ME
ON ME.idMedico = M.idMedico