package com.hms.backend.services;

import com.hms.backend.repositories.PatientsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PatientsService {
    @Autowired
    private PatientsRepository patientsRepository;
    public long getCount(){
        return patientsRepository.count();
    }
}
