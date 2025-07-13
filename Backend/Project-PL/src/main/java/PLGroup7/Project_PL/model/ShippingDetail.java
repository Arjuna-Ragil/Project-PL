package PLGroup7.Project_PL.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "shipping_details")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ShippingDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String street;
    private String city;
    private String province;
    private String country;
    private String district;

    @OneToOne
    @JoinColumn(name = "order_id")
    private Order order;
}
