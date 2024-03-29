package com.hms.backend.controllers;

import com.hms.backend.dto.patientDTO.SavePatientDataDTO;
import com.hms.backend.services.PatientsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hms/api/patient")
public class PatientController {
    @Autowired
    PatientsService patientsService;
    
    @PostMapping("/savePatient")
    public ResponseEntity<String> savePatient(@RequestBody SavePatientDataDTO savePatientDataDTO) {
        try {
            patientsService.SavePatientData(savePatientDataDTO);
            return ResponseEntity.ok("Patient data saved successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to save patient data: " + e.getMessage());
        }
    }
}
