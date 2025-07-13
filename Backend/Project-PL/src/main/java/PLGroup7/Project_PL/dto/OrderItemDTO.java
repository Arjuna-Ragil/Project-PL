package PLGroup7.Project_PL.dto;

import lombok.Data;

@Data
public class OrderItemDTO {
    private Long produkId;
    private String namaProduk;
    private String brand;
    private String kategori;
    private String imageUrl;
    private int quantity;
    private double harga;
}
