USE [CentroMedico]
GO
/****** Object:  StoredProcedure [dbo].[SP_ejemplo]    Script Date: 20/02/2024 11:58:35 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROC [dbo].[SP_ejemplo](
	@idPaciente int 
)
AS

SELECT apellido,nombre,idPaciente FROM Paciente WHERE idPaciente = @idPaciente 

