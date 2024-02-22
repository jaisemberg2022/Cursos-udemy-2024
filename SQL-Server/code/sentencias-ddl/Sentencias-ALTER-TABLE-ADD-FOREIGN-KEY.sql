ALTER TABLE Paciente 
ADD FOREIGN KEY(idPais) REFERENCES Pais(idPais) 


ALTER TABLE historiaPaciente
ADD FOREIGN KEY (idPaciente) REFERENCES Paciente(idPaciente)