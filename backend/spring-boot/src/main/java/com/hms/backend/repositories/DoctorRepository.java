package com.hms.backend.repositories;

import com.hms.backend.entities.Doctors;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DoctorRepository extends MongoRepository<Doctors, String> {
}
