package com.example.planillas.repository;

import com.example.planillas.model.SignosEntity;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;


public interface SignosRepository extends JpaRepository<SignosEntity, Long> {
    List<SignosEntity> findByPacientId(Long pacientId);
}
