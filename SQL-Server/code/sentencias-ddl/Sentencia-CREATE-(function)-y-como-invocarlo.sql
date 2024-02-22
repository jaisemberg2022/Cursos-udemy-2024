select dbo.nombreFunct(256)

CREATE FUNCTION nombreFunct(@var int )
RETURNS INT

AS 
BEGIN
	SET @var = @var +5
	RETURN @var
END 
