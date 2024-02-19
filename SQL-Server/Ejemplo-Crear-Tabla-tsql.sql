CREATE TABLE Paciente(
	idPaciente int not null ,
	nombre varchar(50) not null,
	apellido varchar(50) not null,
	fechaNacimiento date null,
	domicilio varchar(50) null,
	idPais char(3),
	telefono varchar(20) null,
	email varchar(30) null,
	observacion varchar(1000) null,
	fechaAlta dateTime not null,
	CONSTRAINT PK_idPaciente PRIMARY KEY (idPaciente)
);
