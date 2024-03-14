package com.hms.backend.repositories;

import com.hms.backend.entities.Appointment;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AppointmentRepository extends MongoRepository<Appointment, ObjectId> {
}
