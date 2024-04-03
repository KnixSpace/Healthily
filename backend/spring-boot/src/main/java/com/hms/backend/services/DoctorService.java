package com.hms.backend.services;

import com.hms.backend.dto.doctorDTO.GetAvailableDoctorDTO;
import com.hms.backend.entities.Appointment;
import com.hms.backend.entities.Doctors;
import com.hms.backend.repositories.AppointmentRepository;
import com.hms.backend.repositories.DoctorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;
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

    public List<Appointment> allAppointment(String doctorEmail){
        return appointmentRepository.findAllByDoctorEmail(doctorEmail);
    }
    public List<Appointment> upcomingAppointment(String email) {

        LocalDate currentDate = LocalDate.now();
        YearMonth yearMonth = YearMonth.from(currentDate);
        LocalDate lastDayOfMonth = yearMonth.atEndOfMonth();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        String startDate = currentDate.format(formatter);
        String endDate = lastDayOfMonth.format(formatter);
        return appointmentRepository.findByDateBetweenAndDoctorEmail(startDate, endDate,email);
    }
    public List<Appointment> appointmentByDate(String date,String email){
        return appointmentRepository.findByDateAndDoctorEmail(date,email);
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
