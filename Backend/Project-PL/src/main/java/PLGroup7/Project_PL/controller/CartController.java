package PLGroup7.Project_PL.controller;

import PLGroup7.Project_PL.dto.OrderResponse;
import PLGroup7.Project_PL.model.Order;
import PLGroup7.Project_PL.model.OrderItem;
import PLGroup7.Project_PL.model.Produk;
import PLGroup7.Project_PL.model.User;
import PLGroup7.Project_PL.model.OrderStatus;
import PLGroup7.Project_PL.repository.OrderItemRepository;
import PLGroup7.Project_PL.repository.OrderRepository;
import PLGroup7.Project_PL.repository.ProdukRepository;
import PLGroup7.Project_PL.repository.UserRepository;
import PLGroup7.Project_PL.service.CartService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @Autowired
    private ProdukRepository produkRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private OrderRepository orderRepository;

    // ✅ Ambil isi cart
    @GetMapping
    public ResponseEntity<List<OrderResponse.ItemDetail>> getCart(@AuthenticationPrincipal UserDetails userDetails) {
        Order cart = CartService.getOrCreateCart(userDetails.getUsername());

        List<OrderResponse.ItemDetail> response = cart.getItems().stream().map(item -> {
            OrderResponse.ItemDetail dto = new OrderResponse.ItemDetail();
            dto.setProdukId(item.getProduk().getIdProduk());
            dto.setNamaProduk(item.getProduk().getNamaProduk());
            dto.setBrand(item.getProduk().getBrand());
            dto.setKategori(item.getProduk().getKategori().getNama());
            dto.setImageUrl(item.getProduk().getImageUrl());
            dto.setHarga(item.getProduk().getHarga());
            dto.setQuantity(item.getQuantity());
            return dto;
        }).collect(Collectors.toList());

        return ResponseEntity.ok(response);
    }

    // ✅ Tambahkan produk ke cart
    @PostMapping
    public ResponseEntity<?> addToCart(@AuthenticationPrincipal UserDetails userDetails,
                                       @RequestBody Map<String, Object> request) {

        Long produkId = Long.valueOf(request.get("product_id").toString());
        Integer quantity = request.get("quantity") != null
                ? Integer.valueOf(request.get("quantity").toString())
                : 1;

        Order cart = CartService.getOrCreateCart(userDetails.getUsername());

        Optional<Produk> produkOpt = produkRepository.findById(produkId);
        if (produkOpt.isEmpty()) {
            return ResponseEntity.badRequest().body("Produk tidak ditemukan");
        }
        Produk produk = produkOpt.get();

        Optional<OrderItem> existingItem = cart.getItems().stream()
                .filter(i -> i.getProduk().getIdProduk().equals(produkId))
                .findFirst();

        if (existingItem.isPresent()) {
            OrderItem item = existingItem.get();
            item.setQuantity(item.getQuantity() + quantity);
            orderItemRepository.save(item);
        } else {
            OrderItem newItem = new OrderItem();
            newItem.setOrder(cart);
            newItem.setProduk(produk);
            newItem.setQuantity(quantity);
            cart.getItems().add(newItem);
            orderItemRepository.save(newItem);
        }

        return ResponseEntity.ok("Produk berhasil ditambahkan ke cart");
    }

    // ✅ Checkout cart
    @PostMapping("/checkout")
    public ResponseEntity<?> checkoutCart(@AuthenticationPrincipal UserDetails userDetails) {
        Order cart = CartService.getOrCreateCart(userDetails.getUsername());

        if (cart.getItems().isEmpty()) {
            return ResponseEntity.badRequest().body("Cart masih kosong");
        }

        cart.setStatus(OrderStatus.ORDERED);
        cart.setTanggalOrder(LocalDateTime.now());
        orderRepository.save(cart);

        return ResponseEntity.ok("Checkout berhasil");
    }
}
