package com.hms.backend.entities;

import lombok.Data;

@Data
public class Address {
    private String Country;
    private String State;
    private String city;
    private String pincode;
}
