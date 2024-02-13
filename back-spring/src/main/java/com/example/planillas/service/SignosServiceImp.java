package com.example.planillas.service;

import com.example.planillas.model.SignosEntity;
import com.example.planillas.repository.SignosRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SignosServiceImp implements SignosService {
    private final SignosRepository signosRepository;

    public SignosServiceImp(SignosRepository signosRepository) {
        this.signosRepository = signosRepository;
    }

    @Override
    public void saveSignos(SignosEntity signos) {
        signosRepository.save(signos);
    }

    @Override
    public List<SignosEntity> obtenerSignosPorId(Long idPaciente) {
        return signosRepository.findByIdPaciente(idPaciente);
    }
}
