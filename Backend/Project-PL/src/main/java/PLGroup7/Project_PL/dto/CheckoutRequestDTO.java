package PLGroup7.Project_PL.dto;

import java.util.List;

import lombok.Data;

@Data
public class CheckoutRequestDTO {
    private List<CartItemDTO> items;
    private ShippingInfoDTO shipping;
}
