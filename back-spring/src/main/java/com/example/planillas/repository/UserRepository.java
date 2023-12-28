package com.example.planillas.repository;

import com.example.planillas.model.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository <UserEntity, Long> {
    UserEntity findByUsuario(String usuario);
}
