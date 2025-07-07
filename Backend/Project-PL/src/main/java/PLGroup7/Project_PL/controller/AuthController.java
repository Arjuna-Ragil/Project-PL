package PLGroup7.Project_PL.controller;

import PLGroup7.Project_PL.dto.LoginRequest;
import PLGroup7.Project_PL.dto.RegisterRequest;
import PLGroup7.Project_PL.model.User;
import PLGroup7.Project_PL.security.JwtUtil;
import PLGroup7.Project_PL.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;



import java.util.Collections;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private org.springframework.security.authentication.AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        userService.register(request);
        return ResponseEntity.ok("User registered successfully");
    }


   @PostMapping("/login")
public ResponseEntity<?> login(@RequestBody LoginRequest request) {
    Optional<User> userOpt = userService.login(request);
    if (userOpt.isPresent()) {
        User user = userOpt.get();

        // Ambil role dari User (karena User implement UserDetails)
        List<String> roles = user.getAuthorities().stream()
            .map(auth -> auth.getAuthority().replace("ROLE_", ""))
            .toList();

        String token = jwtUtil.generateToken(user.getUsername(), roles);
        return ResponseEntity.ok(Collections.singletonMap("token", token));
    } else {
        return ResponseEntity.status(401).body("Invalid credentials");
    }
}


    
}
