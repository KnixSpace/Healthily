package com.hms.backend.repositories;

import com.hms.backend.entities.Appointment;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AppointmentRepository extends MongoRepository<Appointment, ObjectId> {
    List<Appointment> findByDateAndTime(String date, String time);

    List<Appointment> findByDateBetween(String currentDate,String endDate);

    List<Appointment> findByDate(String date);
}
