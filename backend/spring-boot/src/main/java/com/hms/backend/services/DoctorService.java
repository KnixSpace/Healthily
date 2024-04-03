package com.hms.backend.services;

import com.hms.backend.dto.doctorDTO.GetAvailableDoctorDTO;
import com.hms.backend.entities.Appointment;
import com.hms.backend.entities.Doctors;
import com.hms.backend.repositories.AppointmentRepository;
import com.hms.backend.repositories.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DoctorService {
    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private AppointmentRepository appointmentRepository;
    public Long getCount(){
        return doctorRepository.count();
    }
    public Doctors checkDoc(String email){
        return doctorRepository.findByEmail(email);
    }
    public void saveDoc(Doctors doctors){
        doctorRepository.save(doctors);
    }
    public List<String> DocFromAppointment(String date, String time){
        List<Appointment> appointments =  appointmentRepository.findByDateAndTime(date,time);
        List<String> doctors = new ArrayList<>();
        for(Appointment appointment : appointments){
            doctors.add(appointment.getDoctorEmail());
        }
        return doctors;
    }
    public List<GetAvailableDoctorDTO> getAvailableDoctor(List<String> email, String day, String time, List<String> specializations){
        Doctors doctors = new Doctors();
        List<GetAvailableDoctorDTO> getAvailableDoctorDTOS = new ArrayList<>();

        for (String specialization : specializations){
            doctors = doctorRepository.findByEmailNotAndTimeSlotsAndSpecialization(email,day,time,specialization);
            if(doctors!=null){
                GetAvailableDoctorDTO availableDoctorDTO = new GetAvailableDoctorDTO();
                availableDoctorDTO.setEmail(doctors.getEmail());
                availableDoctorDTO.setName(doctors.getFirstName()+" "+doctors.getLastName());
                availableDoctorDTO.setImage(doctors.getProfileImg());
                availableDoctorDTO.setSpecialization(doctors.getSpecialization());
                getAvailableDoctorDTOS.add(availableDoctorDTO);
            }
        }
        return getAvailableDoctorDTOS;
    }
}
