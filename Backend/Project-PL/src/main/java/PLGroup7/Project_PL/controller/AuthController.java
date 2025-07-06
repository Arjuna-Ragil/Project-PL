package PLGroup7.Project_PL.controller;

import PLGroup7.Project_PL.dto.LoginRequest;
import PLGroup7.Project_PL.dto.RegisterRequest;
import PLGroup7.Project_PL.model.User;
import PLGroup7.Project_PL.security.JwtUtil;
import PLGroup7.Project_PL.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



import java.util.Collections;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        userService.register(request);
        return ResponseEntity.ok("User registered successfully");
    }


    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        Optional<User> user = userService.login(request);
        if (user.isPresent()) {
            String token = jwtUtil.generateToken(user.get().getUsername());
            return ResponseEntity.ok(Collections.singletonMap("token", token));
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }

    
}
