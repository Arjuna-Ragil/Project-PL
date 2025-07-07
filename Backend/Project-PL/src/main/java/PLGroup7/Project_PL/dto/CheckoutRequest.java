package PLGroup7.Project_PL.dto;

import java.util.List;

import org.hibernate.cache.spi.support.AbstractReadWriteAccess.Item;

import lombok.Data;

@Data
public class CheckoutRequest {
    
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private String street;
    private String city;
    private String province;
    private String country;
    private String district;
    
    private List<Item> items;
    
    @Data
    public static class Item {
        private Long produkId;
        private int quantity;
    }
}
