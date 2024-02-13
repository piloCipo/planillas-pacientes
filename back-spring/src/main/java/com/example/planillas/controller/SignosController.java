package com.example.planillas.controller;

import com.example.planillas.model.SignosEntity;
import com.example.planillas.service.SignosService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping (value = "/api/users")
@CrossOrigin(origins = "http://localhost:3000", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.OPTIONS })
public class SignosController {

    private final SignosService signosService;

    public SignosController(SignosService signosService) {
        this.signosService = signosService;
    }

    @PostMapping (value = "/cargarSignos")
    public void cargarSignos(@RequestBody SignosEntity newSignos) {
        signosService.saveSignos(newSignos);
    }

    @GetMapping(value = "/paciente/{idPaciente}")
    public ResponseEntity<List<SignosEntity>> obtenerSignosPorPaciente(@PathVariable Long idPaciente) {
        try {
            List<SignosEntity> signos = signosService.obtenerSignosPorId(idPaciente);
            return ResponseEntity.ok().body(signos);
        } catch (Exception e) {
            // Manejo de la excepción
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build(); // Devuelve un error 500
        }
    }

}
