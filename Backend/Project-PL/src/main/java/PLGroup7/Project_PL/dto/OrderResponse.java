package PLGroup7.Project_PL.dto;

import java.time.LocalDateTime;
import java.util.List;

import lombok.Data;

@Data
public class OrderResponse {
    private Long orderId;
    private LocalDateTime tanggalOrder;
    private List<ItemDetail> items;

    @Data
    public static class ItemDetail {
        private String namaProduk;
        private int quantity;
        private double harga;
    }
}
