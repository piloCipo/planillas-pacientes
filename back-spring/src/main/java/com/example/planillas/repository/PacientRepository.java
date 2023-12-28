package com.example.planillas.repository;

import com.example.planillas.model.PacientEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PacientRepository extends JpaRepository <PacientEntity, Long> {

    @Query("SELECT MAX(p.id) FROM pacientes p")
    Long findMaxId();
}
