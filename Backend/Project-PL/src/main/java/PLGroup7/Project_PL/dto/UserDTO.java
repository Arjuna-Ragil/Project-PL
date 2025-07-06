package PLGroup7.Project_PL.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserDTO {
    private String fullName;
    private String username;
    private String email;
    private String phoneNumber;
    
}

