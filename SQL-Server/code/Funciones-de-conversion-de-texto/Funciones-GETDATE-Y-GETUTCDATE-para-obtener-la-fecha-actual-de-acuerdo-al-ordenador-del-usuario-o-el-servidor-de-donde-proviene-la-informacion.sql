--fecha local del ordenador donde se despliega el motor sql
select GETDATE()
--fecha local del ordenador donde se despliega el motor sql pero tomando en cuenta la diferencia horaria de acuerdo a la ubicacion
select GETUTCDATE()