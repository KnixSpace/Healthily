package com.hms.backend.controllers;

import com.hms.backend.dto.appointmentDTO.AppointmentDTO;
import com.hms.backend.dto.doctorDTO.CheckAvailabilityDTO;
import com.hms.backend.dto.doctorDTO.CheckDoctorDTO;
import com.hms.backend.dto.doctorDTO.GetAvailableDoctorDTO;
import com.hms.backend.entities.Appointment;
import com.hms.backend.entities.Doctors;
import com.hms.backend.services.DoctorService;
import com.hms.backend.services.UserService;
import com.hms.backend.utils.FindDoctor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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

    @PostMapping("/allAppointment")
    public List<AppointmentDTO> allAppointment(@RequestBody AppointmentDTO appointmentDTO){
        String doctorEmail = appointmentDTO.getDoctorEmail();
        List<Appointment> appointments = doctorService.allAppointment(doctorEmail);
        List<AppointmentDTO> appointmentDTOs = getAppointmentDTOS(appointments);
        return appointmentDTOs;
    }
    @PostMapping("/upComingAppointment")
    public List<AppointmentDTO> upComingAppointment(@RequestBody AppointmentDTO appointmentDTO) {
        String doctorEmail = appointmentDTO.getDoctorEmail();
        List<Appointment> appointments = doctorService.upcomingAppointment(doctorEmail);
        List<AppointmentDTO> appointmentDTOs = getAppointmentDTOS(appointments);
        return appointmentDTOs;
    }
    @PostMapping("/appointmentByDate")
    public List<AppointmentDTO> appointmentByDate(@RequestBody AppointmentDTO appointmentDTO) {
        String date = appointmentDTO.getDate();
        String doctorEmail = appointmentDTO.getDoctorEmail();
        List<Appointment> appointments = doctorService.appointmentByDate(date,doctorEmail);
        List<AppointmentDTO> appointmentDTOs = getAppointmentDTOS(appointments);
        return appointmentDTOs;
    }
    private static List<AppointmentDTO> getAppointmentDTOS(List<Appointment> appointments) {
        List<AppointmentDTO> appointmentDTOs = new ArrayList<>();
        for (Appointment appointment : appointments) {
            AppointmentDTO appointment1 = new AppointmentDTO();
            appointment1.set_id(appointment.getId().toString());
            appointment1.setDate(appointment.getDate());
            appointment1.setTime(appointment.getTime());
            appointment1.setTitle(appointment.getTitle());
            appointment1.setDoctorName(appointment.getDoctorName());
            appointment1.setPatientName(appointment.getPatientName());
            appointment1.setDoctorEmail(appointment.getDoctorEmail());
            appointment1.setPatientEmail(appointment.getPatientEmail());
            appointment1.setStatus(appointment.getStatus());
            appointmentDTOs.add(appointment1);
        }
        return appointmentDTOs;
    }

}
