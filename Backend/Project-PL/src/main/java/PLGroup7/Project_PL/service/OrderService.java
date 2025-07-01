package PLGroup7.Project_PL.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import PLGroup7.Project_PL.model.Order;
import org.springframework.stereotype.Service;

import PLGroup7.Project_PL.model.OrderItem;
import PLGroup7.Project_PL.model.Produk;
import PLGroup7.Project_PL.model.User;
import PLGroup7.Project_PL.repository.OrderItemRepository;
import PLGroup7.Project_PL.repository.OrderRepository;
import PLGroup7.Project_PL.repository.ProdukRepository;
import PLGroup7.Project_PL.repository.UserRepository;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProdukRepository produkRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;
    

    @Autowired
    private UserRepository userRepository;

    public Order buatOrder(String username, List<OrderItem> items) {
        User user = userRepository.findByUsername(username)
        .orElseThrow(() -> new RuntimeException("User tidak ditemukan"));
        
        Order order = new Order();
        order.setUser(user);
        order.setTanggalOrder(LocalDateTime.now());

        List<OrderItem> itemList = new ArrayList<>();
        for (OrderItem item : items) {
            Produk produk = produkRepository.findById(item.getProduk().getIdProduk())
                .orElseThrow(() -> new RuntimeException("Produk tidak ditemukan"));
            
            OrderItem newItem = new OrderItem();
            newItem.setOrder(order);
            newItem.setProduk(produk);
            newItem.setQuantity(item.getQuantity());

            itemList.add(newItem);
        }

        order.setItems(itemList);
        return orderRepository.save(order);
    }

    public List<PLGroup7.Project_PL.model.Order> getOrderByUsername(String username) {
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new RuntimeException("User tidak ditemukan"));
        
        return orderRepository.findAll()
            .stream()
            .filter(o -> o.getUser(). getId().equals(user.getId()))
            .collect(Collectors.toList());
    }
}
