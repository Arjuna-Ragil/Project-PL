package PLGroup7.Project_PL.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import PLGroup7.Project_PL.dto.OrderRequest;
import PLGroup7.Project_PL.dto.OrderResponse;
import PLGroup7.Project_PL.dto.PaymentRequest;
import PLGroup7.Project_PL.dto.PaymentResponse;
import PLGroup7.Project_PL.model.Order;
import PLGroup7.Project_PL.model.OrderItem;
import PLGroup7.Project_PL.model.Payment;
import PLGroup7.Project_PL.model.Produk;
import PLGroup7.Project_PL.service.OrderService;
import PLGroup7.Project_PL.service.PaymentService;

@RestController
@RequestMapping("/api/customer/order")
@PreAuthorize("hasRole('CUSTOMER')")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @Autowired
    private PaymentService paymentService;

    @PostMapping
    public ResponseEntity<OrderResponse> buatOrder(@RequestBody OrderRequest request, @AuthenticationPrincipal UserDetails userDetails) {
        List<OrderItem> items = request.getItems().stream().map(i -> {
            OrderItem item = new OrderItem();
            Produk produk = new Produk();
            produk.setIdProduk(i.getProdukId());
            item.setProduk(produk);
            item.setQuantity(i.getQuantity());
            return item;
        }).collect(Collectors.toList());

        Order order = orderService.buatOrder(userDetails.getUsername(), items);

        // konvers ke dto
        OrderResponse response = new OrderResponse();
        response.setOrderId(order.getId());
        response.setTanggalOrder(order.getTanggalOrder());

        List<OrderResponse.ItemDetail> detailList = order.getItems().stream().map(item -> {
            OrderResponse.ItemDetail detail = new OrderResponse.ItemDetail();
            detail.setNamaProduk(item.getProduk().getNamaProduk());
            detail.setQuantity(item.getQuantity());
            detail.setHarga(item.getProduk().getHarga());
            return detail;
        }).collect(Collectors.toList());

        response.setItems(detailList);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public List<OrderResponse> getOrders(@AuthenticationPrincipal UserDetails userDetails) {
        List<Order> orders = orderService.getOrderByUsername(userDetails.getUsername());

        return orders.stream().map(order -> {
            OrderResponse res = new OrderResponse();
            res.setOrderId(order.getId());
            res.setTanggalOrder(order.getTanggalOrder());

            List<OrderResponse.ItemDetail> details = order.getItems().stream().map(item -> {
                OrderResponse.ItemDetail d = new OrderResponse.ItemDetail();
                d.setNamaProduk(item.getProduk().getNamaProduk());
                d.setQuantity(item.getQuantity());
                d.setHarga(item.getProduk().getHarga());
                return d;
            }).collect(Collectors.toList());

            res.setItems(details);
            return res;
        }).collect(Collectors.toList());
    }

    @PostMapping("/{orderId}/pay")
    public ResponseEntity<PaymentResponse> bayar(@PathVariable Long orderId, @RequestBody PaymentRequest request) {
        Payment payment = paymentService.buatPembayaran(orderId, request.getMetode(), request.getTotal());

        PaymentResponse response = new PaymentResponse();
        response.setPaymentId(payment.getId());
        response.setOrderId(payment.getOrder().getId());
        response.setTanggalBayar(payment.getTanggalBayar());
        response.setMetode(payment.getMetode());
        response.setTotal(payment.getTotal());

        return ResponseEntity.ok(response);
    }
}
