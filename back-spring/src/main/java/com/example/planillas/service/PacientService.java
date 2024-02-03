package com.example.planillas.service;

import com.example.planillas.model.PacientEntity;

import java.util.Map;

public interface PacientService {

    void saveDatosPaciente (PacientEntity datosPaciente);
    Long findMaxPacientId();

    Map<String, Object> getPacientWithClinicalData(Long id);

    void deletePacientById(Long id);

}
