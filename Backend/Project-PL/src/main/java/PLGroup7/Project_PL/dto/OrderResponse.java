package PLGroup7.Project_PL.dto;

import java.time.LocalDateTime;
import java.util.List;

import PLGroup7.Project_PL.model.OrderStatus;
import lombok.Data;

@Data
public class OrderResponse {
    private Long orderId;
    private LocalDateTime tanggalOrder;
    private List<ItemDetail> items;

    @Data
    public static class ItemDetail {
        private Long produkId;
        private String namaProduk;
        private String brand;
        private String kategori;
        private String imageUrl;
        private Integer quantity;
        private Double harga;
    }

    public void setItemDetail(ItemDetail dto) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'setItemDetail'");
    }

    // public void setStatus(OrderStatus status) {
    //     // TODO Auto-generated method stub
    //     throw new UnsupportedOperationException("Unimplemented method 'setStatus'");
    // }

    // public void setStatus(String name) {
    //     // TODO Auto-generated method stub
    //     throw new UnsupportedOperationException("Unimplemented method 'setStatus'");
    // }

}
