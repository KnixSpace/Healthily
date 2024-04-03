package com.hms.backend.repositories;

import com.hms.backend.entities.Doctors;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface DoctorRepository extends MongoRepository<Doctors, String> {
    Doctors findByEmail(String Email);
    @Query(value = "{ 'email': { $nin: ?0}, 'timeSlots': { $elemMatch: { ?1: { $in: [?2] } } }, 'specialization': ?3}",
            fields = "{'firstName': 1,'lastName': 1,'email': 1,'specialization': 1,'profileImg': 1}")
    Doctors findByEmailNotAndTimeSlotsAndSpecialization(List<String> docEmail, String day, String time, String specializations);
}
