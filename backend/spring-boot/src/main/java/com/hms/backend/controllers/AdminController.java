package com.hms.backend.controllers;

import com.hms.backend.dto.doctorDTO.AddDoctorDTO;
import com.hms.backend.dto.doctorDTO.DoctorDTO;
import com.hms.backend.entities.Users;
import com.hms.backend.services.AdminService;
import com.hms.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/healthily/api/admin")
@CrossOrigin(origins = "*")
public class AdminController {
    @Autowired
    private UserService userService;

    @Value("${http://localhost:5173}")
    private String frontendUrl;

    @PostMapping("/addDoctor")
    public ResponseEntity<String> addDoctor(@RequestBody AddDoctorDTO addDoctorDTO) {
        String doctorEmail = addDoctorDTO.getEmail();

        Users existingUser = userService.findUserByEmail(doctorEmail);
        if(existingUser!=null){
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body("User with email "+ doctorEmail + " already exists");
        }
        
        userService.sendConfirmationMail(doctorEmail);
        Users user = new Users();
        user.setEmail(doctorEmail);
        user.setRole("DOCTOR");
        userService.saveUser(user);

        return ResponseEntity.ok("Email sent successfully");
    }
}


