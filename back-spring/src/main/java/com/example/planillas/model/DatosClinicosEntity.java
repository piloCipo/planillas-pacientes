package com.example.planillas.model;

import jakarta.persistence.*;

@Entity (name = "datos_clinicos")
public class DatosClinicosEntity {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long idDatosClinicos;

    private Long idPaciente;

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


    public Long getId() {
        return idDatosClinicos;
    }

    public void setId(Long id) {
        this.idDatosClinicos = idDatosClinicos;
    }

    public boolean isHipertension() {
        return hipertension;
    }

    public void setHipertension(boolean hipertension) {
        this.hipertension = hipertension;
    }

    public boolean isInsuficienciaCardiaca() {
        return insuficienciaCardiaca;
    }

    public void setInsuficienciaCardiaca(boolean insuficienciaCardiaca) {
        this.insuficienciaCardiaca = insuficienciaCardiaca;
    }

    public boolean isDiabetes() {
        return diabetes;
    }

    public void setDiabetes(boolean diabetes) {
        this.diabetes = diabetes;
    }

    public boolean isAsma() {
        return asma;
    }

    public void setAsma(boolean asma) {
        this.asma = asma;
    }

    public boolean isOncologicos() {
        return oncologicos;
    }

    public void setOncologicos(boolean oncologicos) {
        this.oncologicos = oncologicos;
    }

    public String getOtrasPatologias() {
        return otrasPatologias;
    }

    public void setOtrasPatologias(String otrasPatologias) {
        this.otrasPatologias = otrasPatologias;
    }

    public boolean isAlcohol() {
        return alcohol;
    }

    public void setAlcohol(boolean alcohol) {
        this.alcohol = alcohol;
    }

    public boolean isTabaco() {
        return tabaco;
    }

    public void setTabaco(boolean tabaco) {
        this.tabaco = tabaco;
    }

    public boolean isSedentarismo() {
        return sedentarismo;
    }

    public void setSedentarismo(boolean sedentarismo) {
        this.sedentarismo = sedentarismo;
    }

    public boolean isInsomio() {
        return insomio;
    }

    public void setInsomio(boolean insomio) {
        this.insomio = insomio;
    }

    public boolean isEstres() {
        return estres;
    }

    public void setEstres(boolean estres) {
        this.estres = estres;
    }

    public String getOtrosEstilosVida() {
        return otrosEstilosVida;
    }

    public void setOtrosEstilosVida(String otrosEstilosVida) {
        this.otrosEstilosVida = otrosEstilosVida;
    }

    public String getDiagnostico() {
        return diagnostico;
    }

    public void setDiagnostico(String diagnostico) {
        this.diagnostico = diagnostico;
    }

    public Long getIdPaciente() {
        return idPaciente;
    }

    public void setIdPaciente(Long idPaciente) {
        this.idPaciente = idPaciente;
    }
}

