package com.mypage.demo.security;

import com.mypage.demo.model.User;
import com.mypage.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        // Hash the password
        user.setPasswordHash(passwordEncoder.encode(user.getPasswordHash()));
        User savedUser = userRepository.save(user);

        // Create a success response with the saved user details
        return ResponseEntity.ok(savedUser); // Return the saved user as JSON
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        // Find the user by username
        Optional<User> optionalUser = userRepository.findByUsername(user.getUsername());

        if (optionalUser.isPresent()) {
            User foundUser = optionalUser.get(); // Safely get the User object
            // Now you can check the password and return an appropriate response
            if (passwordEncoder.matches(user.getPasswordHash(), foundUser.getPasswordHash())) {
                return ResponseEntity.ok("Login successful"); // You might want to return a token here
            } else {
                return ResponseEntity.status(401).body("Invalid password"); // Return 401 status for invalid password
            }
        } else {
            return ResponseEntity.status(404).body("User not found"); // Return 404 if user doesn't exist
        }
    }
}
