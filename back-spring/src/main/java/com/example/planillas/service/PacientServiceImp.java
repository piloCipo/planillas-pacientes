package com.example.planillas.service;

import com.example.planillas.model.DatosClinicosEntity;
import com.example.planillas.model.PacientEntity;
import com.example.planillas.repository.DatosClinicosRepository;
import com.example.planillas.repository.PacientRepository;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import javax.swing.text.html.parser.Entity;
import java.util.HashMap;
import java.util.Map;

@Service
public class PacientServiceImp implements PacientService {

    private final PacientRepository pacientRepository;
    private final DatosClinicosRepository datosClinicosRepository;
    private final EntityManager entityManager;

    public PacientServiceImp(PacientRepository pacientRepository, DatosClinicosRepository datosClinicosRepository, EntityManager entityManager) {
        this.pacientRepository = pacientRepository;
        this.datosClinicosRepository = datosClinicosRepository;
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public void saveDatosPaciente(PacientEntity datosPaciente) {
        pacientRepository.save(datosPaciente);
    }

    @Override
    public Long findMaxPacientId() {
        return pacientRepository.findMaxId();
    }


    @Override
    public Map<String, Object> getPacientWithClinicalData(Long id) {
        Map<String, Object> result = new HashMap<>();

        PacientEntity pacient = pacientRepository.findById(id).orElse(null);
        DatosClinicosEntity datosClinicos = (DatosClinicosEntity) datosClinicosRepository.findByPacientId(id).orElse(null);

        if (pacient != null && datosClinicos != null) {
            result.put("paciente", pacient);
            result.put("datosClinicos", datosClinicos);
        }
        return result;
    }

    @Override
    @Transactional
    public void deletePacientById(Long id) {
        PacientEntity pacient = pacientRepository.findById(id).orElse(null);

        if (pacient != null) {
            entityManager.remove(pacient);
        }
    }

}
