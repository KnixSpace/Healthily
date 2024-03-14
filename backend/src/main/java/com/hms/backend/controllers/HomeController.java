package com.hms.backend.controllers;

import com.hms.backend.services.PatientsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("hms/api/home")
@CrossOrigin(origins = "*")
public class HomeController {
    @Autowired
    private PatientsService patientsService;

    @GetMapping("/count")
    public ResponseEntity<Long> homeStats(){

        return ResponseEntity.ok(patientsService.getCount());
    }
}
