package com.hms.backend.controllers;

import com.hms.backend.dto.patientDTO.CheckPatientDTO;
import com.hms.backend.dto.patientDTO.SavePatientDataDTO;
import com.hms.backend.entities.Patients;
import com.hms.backend.services.PatientsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/healthily/api/patient")
@CrossOrigin(origins = "*")
public class PatientController {
    @Autowired
    PatientsService patientsService;

    @PostMapping("/check")
    public ResponseEntity<String> checkPatient(@RequestBody CheckPatientDTO checkPatientDTO) {
        String email = checkPatientDTO.getEmail();
        Patients patient = patientsService.checkPatient(email);
        if (patient != null) {
            return ResponseEntity.ok("Patient with email " + email + " is available in the database");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Patient with email " + email + " is not found in the database");
        }
    }

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
