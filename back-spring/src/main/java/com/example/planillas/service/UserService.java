package com.example.planillas.service;

import com.example.planillas.model.UserEntity;

public interface UserService {
    void saveUser (UserEntity user);
    UserEntity findByUsername(String usuario);
}
