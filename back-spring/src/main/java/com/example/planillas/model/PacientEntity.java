package com.example.planillas.model;

import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;
import java.time.LocalDate;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity (name = "pacientes")
public class PacientEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String dni;
    private String nombre;
    private String apellido;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate fechaNacimiento;
    private String sexo;
    private Long telefono;
    private String obraSocial;
    private String domicilio;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate fechaIngreso;
}

