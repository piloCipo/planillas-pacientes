package com.example.planillas.controller;

import com.example.planillas.model.UserEntity;
import com.example.planillas.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public void registerUser (@RequestBody UserEntity newUser) {
        userService.saveUser(newUser);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody UserEntity loginUser) {
        UserEntity user = userService.findByUsername(loginUser.getUsuario());

        if (user != null && user.getPassword().equals(loginUser.getPassword())) {
            return ResponseEntity.ok().body("autenticacion exitosa");
        } else {
            return ResponseEntity.status(401).body("credenciales incorrectas");
        }
    }
}
