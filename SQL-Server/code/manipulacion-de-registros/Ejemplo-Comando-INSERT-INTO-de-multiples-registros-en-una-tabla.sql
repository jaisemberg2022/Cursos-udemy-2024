SELECT * FROM Paciente

INSERT INTO Paciente(
	DNI,
	nombre,
	apellido,
	fechaNacimiento,
	domicilio,
	idPais,
	telefono,
	email,
	observacion
)
VALUES (
	'4555445',
	'Laura',
	'Monta�es',
	'1999-12-10',
	'Villa real',
	'ESP',
	NULL,
	'LauMo�@hotmail.com',
	''
),
(
	'22332323',
	'Katerine',
	'Ibarguen',
	'1994-10-22',
	'Nuevo leon',
	'MEX',
	NULL,
	'KateIb@gmail.com',
	''
)