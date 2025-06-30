package PLGroup7.Project_PL.dto;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class PaymentResponse {
    private Long paymentId;
    private Long orderId;
    private LocalDateTime tanggalBayar;
    private String metode;
    private double total;
}
