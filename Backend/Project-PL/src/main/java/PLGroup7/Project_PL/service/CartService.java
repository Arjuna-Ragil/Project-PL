package PLGroup7.Project_PL.service;

import java.time.LocalDateTime;
import java.util.*;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import PLGroup7.Project_PL.dto.OrderResponse;
import PLGroup7.Project_PL.model.*;
import PLGroup7.Project_PL.repository.*;

@Service
public class CartService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProdukRepository produkRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    public Order getOrCreateCart(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User tidak ditemukan"));

        Optional<Order> optionalCart = orderRepository.findByUserAndStatus(user, OrderStatus.CART);
        if (optionalCart.isPresent()) {
            return optionalCart.get();
        } else {
            Order cart = new Order();
            cart.setUser(user);
            cart.setStatus(OrderStatus.CART);
            cart.setTanggalOrder(LocalDateTime.now());
            cart.setItems(new ArrayList<>());
            return orderRepository.save(cart);
        }
    }

    public List<OrderResponse> getCartItems(String username) {
        Order cart = getOrCreateCart(username);

        return cart.getItems().stream().map(item -> {
            OrderResponse response = new OrderResponse();
            OrderResponse.ItemDetail dto = new OrderResponse.ItemDetail();
            dto.setProdukId(item.getProduk().getId());
            dto.setNamaProduk(item.getProduk().getNamaProduk());
            dto.setBrand(item.getProduk().getBrand());
            dto.setKategori(item.getProduk().getKategori().getNama());
            dto.setImageUrl(item.getProduk().getImageUrl());
            dto.setHarga(item.getProduk().getHarga());
            dto.setQuantity(item.getQuantity());
            response.setItemDetail(dto);
            return response;
        }).collect(Collectors.toList());
    }

    public void addToCart(String username, Long produkId, Integer quantity) {
        Order cart = getOrCreateCart(username);

        Produk produk = produkRepository.findById(produkId)
                .orElseThrow(() -> new RuntimeException("Produk tidak ditemukan"));

        Optional<OrderItem> existingItem = cart.getItems().stream()
                .filter(i -> i.getProduk().getId().equals(produkId))
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
    }

    public void checkoutCart(String username) {
        Order cart = getOrCreateCart(username);

        if (cart.getItems().isEmpty()) {
            throw new RuntimeException("Cart masih kosong");
        }

        cart.setStatus(OrderStatus.ORDERED);
        cart.setTanggalOrder(LocalDateTime.now());
        orderRepository.save(cart);
    }

    public Order save(Order cart) {
        return orderRepository.save(cart);
    }
}
