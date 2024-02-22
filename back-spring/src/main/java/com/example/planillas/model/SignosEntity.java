package com.example.planillas.model;

import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Calendar;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@Entity (name = "signos")
public class SignosEntity {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long idSignos;
    private Long alta;
    private Long baja;
    private Long cardiaca;
    private Long respiratoria;
    private Long temperatura;
    private Long saturacion;
    private LocalDateTime fechaHora;
    @ManyToOne
    @JoinColumn(name = "id_paciente", referencedColumnName = "id")
    private PacientEntity pacient;

    public SignosEntity() {
        this.fechaHora = LocalDateTime.now();
    }

    public void setIdPaciente(Long idPaciente) {
        if (this.pacient == null) {
            this.pacient = new PacientEntity();
        }
        this.pacient.setId(idPaciente);
    }
}
