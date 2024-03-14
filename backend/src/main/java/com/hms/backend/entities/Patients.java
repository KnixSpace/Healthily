package com.hms.backend.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "patients")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Patients {
    @Id
    private ObjectId id;
    private String firstName;
    private String middleName;
    private String lastName;
    private String email;
    private String birth;
    private String gender;
    private String contactNumber;
    private String aadharCard;
    private Address address;
    private String bloodGroup;
}
