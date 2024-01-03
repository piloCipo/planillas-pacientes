package com.example.planillas.service;

import com.example.planillas.model.DatosClinicosEntity;
import com.example.planillas.repository.DatosClinicosRepository;
import org.springframework.stereotype.Service;

@Service
public class DatosClinicosServiceImp implements DatosClinicosService {

    private final DatosClinicosRepository datosClinicosRepository;

    public DatosClinicosServiceImp(DatosClinicosRepository datosClinicosRepository) {
        this.datosClinicosRepository = datosClinicosRepository;
    }

    @Override
    public void saveDatosClinicos(DatosClinicosEntity datosClinicos) {
        datosClinicosRepository.save(datosClinicos);
    }
}
