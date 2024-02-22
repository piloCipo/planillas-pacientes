package com.example.planillas.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity (name = "datos_clinicos")
public class DatosClinicosEntity {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long idDatosClinicos;
    private boolean hipertension;
    private boolean insuficienciaCardiaca;
    private boolean diabetes;
    private boolean asma;
    private boolean oncologicos;
    private String otrasPatologias;
    private boolean alcohol;
    private boolean tabaco;
    private boolean sedentarismo;
    private boolean insomio;
    private boolean estres;
    private String otrosEstilosVida;
    private String diagnostico;
    @OneToOne
    @JoinColumn(name = "id_paciente", referencedColumnName = "id")
    private PacientEntity pacient;

    public void setIdPaciente(Long idPaciente) {
        if (this.pacient == null) {
            this.pacient = new PacientEntity();
        }
        this.pacient.setId(idPaciente);
    }
}

