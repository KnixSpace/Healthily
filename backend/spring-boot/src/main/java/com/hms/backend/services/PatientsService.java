package com.hms.backend.services;

import com.hms.backend.dto.patientDTO.SavePatientDataDTO;
import com.hms.backend.entities.Address;
import com.hms.backend.entities.Appointment;
import com.hms.backend.entities.Patients;
import com.hms.backend.repositories.AppointmentRepository;
import com.hms.backend.repositories.PatientsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.time.LocalDate;
import java.time.YearMonth;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class PatientsService {
    @Autowired
    private PatientsRepository patientsRepository;

    @Autowired
    private AppointmentRepository appointmentRepository;
    public long getCount(){
        return patientsRepository.count();
    }

    public Patients checkPatient(String email){
        return patientsRepository.findByEmail(email);
    }

    public List<Appointment> allAppointment(String patientEmail){
        return appointmentRepository.findAllByPatientEmail(patientEmail);
    }
    public List<Appointment> upComingAppointment(String email) {
        LocalDate currentDate = LocalDate.now();
        YearMonth yearMonth = YearMonth.from(currentDate);
        LocalDate lastDayOfMonth = yearMonth.atEndOfMonth();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        String startDate = currentDate.format(formatter);
        String endDate = lastDayOfMonth.format(formatter);
      return appointmentRepository.findByDateBetweenAndPatientEmail(startDate, endDate,email);
    }
    public List<Appointment> appointmentByDate(String date,String email){
        return appointmentRepository.findByDateAndPatientEmail(date,email);
    }

    public void SavePatientData(@RequestBody SavePatientDataDTO savePatientDataDTO){
        Patients patients = new Patients();
        patients.setEmail(savePatientDataDTO.getEmail());
        patients.setFirstName(savePatientDataDTO.getFirstName());
        patients.setMiddleName(savePatientDataDTO.getMiddleName());
        patients.setLastName(savePatientDataDTO.getLastName());
        patients.setGender(savePatientDataDTO.getGender());
        patients.setPhoneNumber(savePatientDataDTO.getPhoneNumber());
        patients.setBirthDate(savePatientDataDTO.getBirthDate());
        patients.setBloodGroup(savePatientDataDTO.getBlood()+savePatientDataDTO.getBloodGroup());
        patients.setAadhar(savePatientDataDTO.getAadhar());

        Address address = new Address();

        address.setBuilding(savePatientDataDTO.getBuilding());
        address.setCity(savePatientDataDTO.getCity());
        address.setState(savePatientDataDTO.getState());
        address.setPincode(savePatientDataDTO.getPincode());
        address.setHouseNo(savePatientDataDTO.getHouseNo());
        address.setCountry(savePatientDataDTO.getCountry());
        patients.setAddress(address);
        Patients savePatient = patientsRepository.save(patients);
    }


}
