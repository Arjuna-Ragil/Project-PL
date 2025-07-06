package PLGroup7.Project_PL.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import PLGroup7.Project_PL.model.Order;
import PLGroup7.Project_PL.model.Payment;
import PLGroup7.Project_PL.repository.OrderRepository;
import PLGroup7.Project_PL.repository.PaymentRepository;

@Service
public class PaymentService {
    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private OrderRepository orderRepository;
    
    public Payment buatPembayaran(Long orderId, String metode, double total) {
        Order order = orderRepository.findById(orderId)
            .orElseThrow(() -> new RuntimeException("Order tidak ditemukan"));

        Payment payment = new Payment();
        payment.setOrder(order);
        payment.setTanggalBayar(LocalDateTime.now());
        payment.setMetode(metode);
        payment.setTotal(total);

        Payment saved = paymentRepository.save(payment);

        order.setStatus(PLGroup7.Project_PL.model.OrderStatus.PAID);
        orderRepository.save(order);

        return saved;
    }
}
