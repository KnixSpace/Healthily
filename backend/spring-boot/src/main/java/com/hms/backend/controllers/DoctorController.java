package com.hms.backend.controllers;

import com.hms.backend.dto.doctorDTO.CheckAvailabilityDTO;
import com.hms.backend.dto.doctorDTO.CheckDoctorDTO;
import com.hms.backend.dto.doctorDTO.GetAvailableDoctorDTO;
import com.hms.backend.entities.Doctors;
import com.hms.backend.services.DoctorService;
import com.hms.backend.services.UserService;
import com.hms.backend.utils.FindDoctor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    @PostMapping("/saveDoctor")
    public ResponseEntity<String> saveDoctor(@RequestBody Doctors doctors){
        doctorService.saveDoc(doctors);
        return ResponseEntity.ok("Okay");
    }
    @PostMapping("/availability")
    public List<GetAvailableDoctorDTO> getAvailableDoctor(@RequestBody CheckAvailabilityDTO checkAvailabilityDTO){
        String date = checkAvailabilityDTO.getDate();
        String time = checkAvailabilityDTO.getTime();
        String day = checkAvailabilityDTO.getDay();
        String description = checkAvailabilityDTO.getDescription();

        List<String> doctorEmails = doctorService.DocFromAppointment(date,time);
        FindDoctor findDoctor = new FindDoctor();
        List<String> specializations = findDoctor.getDoctorBySpecialiazation(description.toLowerCase());
        return doctorService.getAvailableDoctor(doctorEmails,day,time,specializations);
    }
}
