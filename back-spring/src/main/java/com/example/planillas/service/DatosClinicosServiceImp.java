package com.example.planillas.service;

import com.example.planillas.model.DatosClinicosEntity;
import com.example.planillas.repository.DatosClinicosRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class DatosClinicosServiceImp implements DatosClinicosService {

    private final DatosClinicosRepository datosClinicosRepository;

    public DatosClinicosServiceImp(DatosClinicosRepository datosClinicosRepository) {
        this.datosClinicosRepository = datosClinicosRepository;
    }

    @Override
    @Transactional
    public void saveDatosClinicos(DatosClinicosEntity datosClinicos) {
        datosClinicosRepository.save(datosClinicos);
    }

}
