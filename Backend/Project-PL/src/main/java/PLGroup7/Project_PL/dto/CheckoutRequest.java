package PLGroup7.Project_PL.dto;

import java.util.List;

import org.hibernate.cache.spi.support.AbstractReadWriteAccess.Item;

import lombok.Data;

@Data
public class CheckoutRequest {
    private List<Item> items;
    
    @Data
    public static class Item {
        private Long produkId;
        private int quantity;
    }
}
