CREATE TABLE PagoPasiente(
	idPago int not null,
	idPaciente int not null,
	idTurno int not null

	PRIMARY KEY (idPago,idPaciente,idTurno)
)