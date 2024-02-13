package com.example.planillas.service;

import com.example.planillas.model.SignosEntity;

import java.util.List;

public interface SignosService {
    List<SignosEntity> obtenerSignosPorId(Long idPaciente);

    void saveSignos (SignosEntity signos);


}
