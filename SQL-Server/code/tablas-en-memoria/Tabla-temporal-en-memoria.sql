--la tabla se crea y se guarda en memoria pero se autodestruye una vez termine de eejecutarse

DECLARE @miTabla TABLE(id int identity(1,1), pais varchar(50))

INSERT INTO @miTabla values ('Colombia')
INSERT INTO @miTabla values ('Argentina')
INSERT INTO @miTabla values ('Peru')
INSERT INTO @miTabla values ('Mexico')


SELECT * FROM @miTabla  