--UNION Concatena los resultados de dos consultas en un �nico conjunto de resultados. puede controlar se incluyen filas duplicadas o no

select idTurno from turno 
union all
select idPaciente from Paciente 
