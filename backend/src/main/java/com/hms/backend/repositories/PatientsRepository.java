package com.hms.backend.repositories;

import com.hms.backend.entities.Patients;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PatientsRepository extends MongoRepository<Patients, ObjectId> {
}
