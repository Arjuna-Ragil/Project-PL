package PLGroup7.Project_PL.controller;

import PLGroup7.Project_PL.dto.UserDTO;
import PLGroup7.Project_PL.model.User;
import PLGroup7.Project_PL.repository.UserRepository;
import jakarta.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/profile")
    public ResponseEntity<?> getProfile(@AuthenticationPrincipal UserDetails userDetails) {
        if (userDetails == null) {
            return ResponseEntity.status(401).body("Unauthorized: userDetails is null");
        }
        
        Optional<User> optionalUser = userRepository.findByEmail(userDetails.getUsername());
        
        if (optionalUser.isEmpty()) {
            // Log untuk debugging
            System.out.println("User not found with email: " + userDetails.getUsername());
            return ResponseEntity.notFound().build();
        }

        User user = optionalUser.get();
        UserDTO dto = new UserDTO(
            user.getFullName(), 
            user.getUsername(),
            user.getEmail(),
            user.getNo_telp()
        );

        return ResponseEntity.ok(dto);
    }

    @PostConstruct
    public void debugloaded() {
        System.out.println("UserController Loaded");
    }
}
