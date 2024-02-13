package com.example.planillas.model;

import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Calendar;

@Entity (name = "signos")
public class SignosEntity {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long idSignos;
    private Long idPaciente;
    private Long alta;
    private Long baja;
    private Long cardiaca;
    private Long respiratoria;
    private Long temperatura;
    private Long saturacion;
    private LocalDateTime fechaHora;

    public SignosEntity() {
        this.fechaHora = LocalDateTime.now();
    }

    public SignosEntity(Long idSignos, Long idPaciente, Long alta, Long baja, Long cardiaca, Long respiratoria, Long temperatura, Long saturacion, LocalDateTime fechaHora) {
        this.idSignos = idSignos;
        this.idPaciente = idPaciente;
        this.alta = alta;
        this.baja = baja;
        this.cardiaca = cardiaca;
        this.respiratoria = respiratoria;
        this.temperatura = temperatura;
        this.saturacion = saturacion;
        this.fechaHora = fechaHora;
    }

    public Long getIdSignos() {
        return idSignos;
    }

    public void setIdSignos(Long idSignos) {
        this.idSignos = idSignos;
    }

    public Long getAlta() {
        return alta;
    }

    public void setAlta(Long alta) {
        this.alta = alta;
    }

    public Long getBaja() {
        return baja;
    }

    public void setBaja(Long baja) {
        this.baja = baja;
    }

    public Long getCardiaca() {
        return cardiaca;
    }

    public void setCardiaca(Long cardiaca) {
        this.cardiaca = cardiaca;
    }

    public Long getRespiratoria() {
        return respiratoria;
    }

    public void setRespiratoria(Long respiratoria) {
        this.respiratoria = respiratoria;
    }

    public Long getTemperatura() {
        return temperatura;
    }

    public void setTemperatura(Long temperatura) {
        this.temperatura = temperatura;
    }

    public Long getSaturacion() {
        return saturacion;
    }

    public void setSaturacion(Long saturacion) {
        this.saturacion = saturacion;
    }

    public LocalDateTime getFechaHora() {
        return fechaHora;
    }

    public void setFechaHora(LocalDateTime fechaHora) {
        this.fechaHora = fechaHora;
    }

    public Long getIdPaciente() {
        return idPaciente;
    }

    public void setIdPaciente(Long idPaciente) {
        this.idPaciente = idPaciente;
    }
}
