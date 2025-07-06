package PLGroup7.Project_PL.controller;

import PLGroup7.Project_PL.dto.UserDTO;
import PLGroup7.Project_PL.model.User;
import PLGroup7.Project_PL.repository.UserRepository;
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
        Optional<User> optionalUser = userRepository.findByUsername(userDetails.getUsername());

        if (optionalUser.isEmpty()) {
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
}
