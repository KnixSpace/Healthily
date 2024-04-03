package com.hms.backend.services;

import com.hms.backend.entities.Appointment;
import com.hms.backend.repositories.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppointmentService {
    @Autowired
    private AppointmentRepository appointmentRepository;

    public Long getCount(){
        return appointmentRepository.count();
    }

    public void saveAppointment(Appointment appointment){
        appointmentRepository.save(appointment);
    }

}
