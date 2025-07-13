package PLGroup7.Project_PL.dto;

import java.time.LocalDateTime;
import java.util.List;

import PLGroup7.Project_PL.dto.OrderResponse.ItemDetail;
import lombok.Data;

@Data
public class CheckoutResponse {
    private Long orderId;
    private LocalDateTime tanggalOrder;
    private String status;
    private List<ItemDetail> items;

    @Data
    public static class ItemDetail {
        private Long produkId;
        private String namaProduk;
        private int quantity;
        private double harga;
    }
}
