--tabla temporal fisica solo se elimina con una sentencia drop

CREATE TABLE #MI_TABLA (id int identity(1,1) , nombre varchar(50),apellido varchar(50))

INSERT INTO #MI_TABLA VALUES ('juan','lopez')
INSERT INTO #MI_TABLA VALUES ('mario','rodriguez')
INSERT INTO #MI_TABLA VALUES ('luis','zaragosa')

SELECT * FROM #MI_TABLA
DROP TABLE #MI_TABLA