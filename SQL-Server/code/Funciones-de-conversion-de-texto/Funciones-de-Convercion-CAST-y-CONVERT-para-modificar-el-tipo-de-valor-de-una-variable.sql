DECLARE @NUM MONEY
SET @NUM = 500.40

-- CAST transforma el valor de una variable pero solo al momento de vizalizarlo en pantalla

SELECT CAST(@NUM AS INT) "casteo"

--CAST recibe 3 parametros 
-- (1) el tipo de dato al que se desea convertir
-- (2) el valor en concreto
-- (3) formatos de valor en especifico como las fechas

PRINT CONVERT(int,@NUM)

DECLARE @FECHA DATETIME
SET @FECHA = GETDATE()

SELECT CONVERT(CHAR(20),@FECHA,111) "convert"
