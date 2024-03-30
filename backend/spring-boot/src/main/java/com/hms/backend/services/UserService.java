package com.hms.backend.services;

import com.hms.backend.entities.Users;
import com.hms.backend.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UsersRepository userRepository;
    public void saveUser(Users user){

        userRepository.save(user);

    }
}
