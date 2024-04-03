package com.hms.backend.controllers;

import com.hms.backend.entities.Appointment;
import com.hms.backend.services.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/healthily/api/appointment")
@CrossOrigin(origins = "*")
public class AppointmentController {

    @Autowired
    AppointmentService appointmentService;

    @PostMapping("/add")
    public void addAppointment(@RequestBody Appointment appointment){
        appointmentService.saveAppointment(appointment);
    }


}
