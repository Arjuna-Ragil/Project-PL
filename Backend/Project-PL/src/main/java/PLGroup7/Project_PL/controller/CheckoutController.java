package PLGroup7.Project_PL.controller;

import PLGroup7.Project_PL.dto.CheckoutRequest;
import PLGroup7.Project_PL.dto.CheckoutResponse;
import PLGroup7.Project_PL.model.Order;
import PLGroup7.Project_PL.model.OrderItem;
import PLGroup7.Project_PL.model.OrderStatus;
import PLGroup7.Project_PL.repository.OrderRepository;
import PLGroup7.Project_PL.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {

    @Autowired
    private CartService cartService;

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping
    public ResponseEntity<CheckoutResponse> checkout(@AuthenticationPrincipal UserDetails userDetails) {
        Order cart = cartService.getOrCreateCart(userDetails.getUsername());

        if (cart.getItems().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }

        cart.setStatus(OrderStatus.ORDERED);
        cart.setTanggalOrder(LocalDateTime.now());
        Order updatedOrder = cartService.save(cart);

        CheckoutResponse response = new CheckoutResponse();
        response.setOrderId(updatedOrder.getId());
        response.setTanggalOrder(updatedOrder.getTanggalOrder());
        response.setStatus(updatedOrder.getStatus().name());

        List<CheckoutResponse.ItemDetail> detailList = updatedOrder.getItems().stream().map(item -> {
            CheckoutResponse.ItemDetail detail = new CheckoutResponse.ItemDetail();
            detail.setProdukId(item.getProduk().getId());
            detail.setNamaProduk(item.getProduk().getNamaProduk());
            detail.setQuantity(item.getQuantity());
            detail.setHarga(item.getProduk().getHarga());
            return detail;
        }).collect(Collectors.toList());

        response.setItems(detailList);
        return ResponseEntity.ok(response);
    }



// Tambahkan di OrderService.java
public Order save(Order order) {
    return orderRepository.save(order);
}
}