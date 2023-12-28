package com.example.planillas.service;

import com.example.planillas.model.PacientEntity;
import com.example.planillas.repository.PacientRepository;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class PacientServiceImp implements PacientService{

    private final PacientRepository pacientRepository;

    public PacientServiceImp(PacientRepository pacientRepository) {
        this.pacientRepository = pacientRepository;
    }

    @Override
    public void saveDatosPaciente(PacientEntity datosPaciente) {
        pacientRepository.save(datosPaciente);
    }

    @Override
    public Long findMaxPacientId() {
        return pacientRepository.findMaxId();
    }
}
