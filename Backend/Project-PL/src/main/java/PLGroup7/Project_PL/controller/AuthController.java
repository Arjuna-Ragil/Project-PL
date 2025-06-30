package PLGroup7.Project_PL.controller;


import PLGroup7.Project_PL.dto.LoginRequest;
import PLGroup7.Project_PL.dto.RegisterRequest;
import PLGroup7.Project_PL.model.User;
import PLGroup7.Project_PL.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User register(@RequestBody RegisterRequest request) {
        return userService.register(request);
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {
        Optional<User> user = userService.login(request);
        return user.isPresent() ? "Login successful" : "Invalid credentials";
    }
}

