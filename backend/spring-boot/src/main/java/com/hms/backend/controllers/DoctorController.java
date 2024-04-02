package com.hms.backend.controllers;

import com.hms.backend.dto.doctorDTO.CheckDoctorDTO;
import com.hms.backend.entities.Doctors;
import com.hms.backend.services.DoctorService;
import com.hms.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/healthily/api/doctor")
@CrossOrigin(origins = "*")
public class DoctorController {
    @Autowired
    private DoctorService doctorService;
    @PostMapping("/check")
    public ResponseEntity<String> checkDoctor(@RequestBody CheckDoctorDTO requestDTO) {
        String email = requestDTO.getEmail();
        Doctors doctors = doctorService.checkDoc(email);
        if (doctors != null) {
            return ResponseEntity.ok("Doctor with email " + email + " is available in the database");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Doctor with email " + email + " is not found in the database");
        }
    }
}
