package PLGroup7.Project_PL.dto;

import java.util.List;

import lombok.Data;

@Data
public class OrderRequest {
    private List<OrderItemDTO> items;
}
