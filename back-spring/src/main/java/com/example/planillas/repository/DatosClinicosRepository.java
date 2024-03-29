package com.example.planillas.repository;

import com.example.planillas.model.DatosClinicosEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DatosClinicosRepository extends JpaRepository <DatosClinicosEntity, Long> {
    Optional<Object> findByPacientId(Long idPaciente);

    void deleteByPacientId(Long idPaciente);
}
