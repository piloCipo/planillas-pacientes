package com.example.planillas.controller;

import com.example.planillas.model.PacientEntity;
import com.example.planillas.service.PacientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping (value = "/api/users")
@CrossOrigin (origins = "http://localhost:3000")
public class PacienteController {

    @Autowired
    private final PacientService pacientService;

    public PacienteController(PacientService pacientService) {
        this.pacientService = pacientService;
    }

    @GetMapping(value = "/ultimo-id")
    public Long getMaxPacientId() {
        Long maxId = pacientService.findMaxPacientId();
        maxId = (maxId != null) ? maxId : 0;
        return maxId;
    }

    @PostMapping (value = "/cargarPaciente")
    public void cargarPaciente (@RequestBody PacientEntity newPacient) {
        pacientService.saveDatosPaciente(newPacient);
    }


}
