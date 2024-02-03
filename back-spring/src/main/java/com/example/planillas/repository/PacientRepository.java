package com.example.planillas.repository;

import com.example.planillas.model.PacientEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface PacientRepository extends JpaRepository <PacientEntity, Long> {

    @Query("SELECT MAX(p.id) FROM pacientes p")
    Long findMaxId();

    Optional<PacientEntity> findById(Long id);

    @Query(value = "SELECT * FROM pacientes p LEFT JOIN datos_clinicos d ON p.id = d.id_paciente WHERE p.numeroHistoriaClinica = :numeroHistoriaClinica", nativeQuery = true)
    Optional<PacientEntity> findByNumeroHistoriaClinica(@Param("numeroHistoriaClinica") int numeroHistoriaClinica);

}