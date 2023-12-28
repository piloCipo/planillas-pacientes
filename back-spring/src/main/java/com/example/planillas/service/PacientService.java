package com.example.planillas.service;

import com.example.planillas.model.PacientEntity;

import java.util.List;

public interface PacientService {

    void saveDatosPaciente (PacientEntity datosPaciente);
    Long findMaxPacientId();

}
