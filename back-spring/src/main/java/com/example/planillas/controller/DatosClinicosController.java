package com.example.planillas.controller;

import com.example.planillas.model.DatosClinicosEntity;
import com.example.planillas.service.DatosClinicosService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class DatosClinicosController {

    @Autowired
    private final DatosClinicosService datosClinicosService;

    public DatosClinicosController(DatosClinicosService datosClinicosService) {
        this.datosClinicosService = datosClinicosService;
    }

    @PostMapping(value = "/cargarDatosClinicos")
    public void cargarDatosClinicos (@RequestBody DatosClinicosEntity nuevosDatos){
        datosClinicosService.saveDatosClinicos(nuevosDatos);
    }
}
