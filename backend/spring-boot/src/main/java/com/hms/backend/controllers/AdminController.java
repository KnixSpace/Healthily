package com.hms.backend.controllers;

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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class AdminController {

    @Autowired
    private AdminService adminService;
    @Autowired
    private UserService userService;
    @Value("${http://localhost:5173}")
    private String frontendUrl;

    @PostMapping("/sendMail")
    public ResponseEntity<String> sendEmail(@RequestBody DoctorDTO emailRequest) {
        String to = emailRequest.getEmail();
       String subject = "Hello ";
       String body = "Mail from Hospital";

        adminService.sendEmail(to, subject, body);

        Users user = new Users();
        user.setEmail(to);
        user.setRole("DOCTOR");

        String successMessage = "Email sent successfully";

         userService.saveUser(user);

        String redirectUrl = frontendUrl + "?message=" + successMessage;

        // Create a ResponseEntity with the redirect URL and a temporary redirect status
        HttpHeaders headers = new HttpHeaders();
        headers.add("Location", redirectUrl);
        return new ResponseEntity<>(headers, HttpStatus.TEMPORARY_REDIRECT);
    }
}


