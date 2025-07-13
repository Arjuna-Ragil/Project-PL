package PLGroup7.Project_PL.dto;

import lombok.Data;

@Data
public class ShippingInfoDTO {
    private String firstName;
    private String lastName;
    private String phone;
    private String email;

    private String address;
    private String country;
    private String state;
    private String city;
    private String district;
}
