package com.example.planillas.controller;

import com.example.planillas.model.PacientEntity;
import com.example.planillas.service.DatosClinicosService;
import com.example.planillas.service.PacientService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping (value = "/api/users")
@CrossOrigin(origins = "http://localhost:3000", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.OPTIONS })
public class PacienteController {

    @Autowired
    private final PacientService pacientService;
    private final DatosClinicosService datosClinicosService;

    public PacienteController(PacientService pacientService, DatosClinicosService datosClinicosService) {
        this.pacientService = pacientService;
        this.datosClinicosService = datosClinicosService;
    }

    @GetMapping(value = "/ultimo-id")
    public Long getMaxPacientId() {
        Long maxId = pacientService.findMaxPacientId();
        maxId = (maxId != null) ? maxId : 0;
        return maxId;
    }


    @GetMapping(value = "/id/{id}")
    public ResponseEntity<Map<String, Object>> getPacientById(@PathVariable(name = "id") Long id) {
        try {
            Map<String, Object> pacientData = pacientService.getPacientWithClinicalData(id);

            if (pacientData != null && !pacientData.isEmpty()) {
                return new ResponseEntity<>(pacientData, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            // Loguea la excepción
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(value = "/id/{id}")
    public ResponseEntity<String> deletePacientById(@PathVariable(name = "id") Long id) {
        try {
            pacientService.deletePacientById(id);
            return new ResponseEntity<>("Paciente eliminado exitosamente", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Paciente no encontrado", HttpStatus.NOT_FOUND);
        }
    }


    @PostMapping (value = "/cargarPaciente")
    public void cargarPaciente (@RequestBody PacientEntity newPacient) {
        pacientService.saveDatosPaciente(newPacient);
    }


}
