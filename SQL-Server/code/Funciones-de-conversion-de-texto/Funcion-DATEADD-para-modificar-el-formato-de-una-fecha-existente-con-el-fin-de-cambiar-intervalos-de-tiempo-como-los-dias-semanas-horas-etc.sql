--recibe 3 parametros 
-- (1) intervalo a modificar (segundos,minutos,horas,dias,meses,años)
-- (2) cantidad de valor que se va a agregar
-- (1) fecha original a la cual se quiere editar 


select DATEADD(MINUTE,-10,getdate()) as minutos
select DATEADD(HOUR,-4,getdate()) as hora_modificada
select DATEADD(DAY,15,getdate()) as dia_modificado
select DATEADD(WEEK,-4,getdate()) as semanas_modificada
select DATEADD(MONTH,-4,getdate()) as meses_modificada
select DATEADD(YEAR,-10,getdate()) as años_modificados