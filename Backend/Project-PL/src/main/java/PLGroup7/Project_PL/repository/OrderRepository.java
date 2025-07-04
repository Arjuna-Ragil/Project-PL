package PLGroup7.Project_PL.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import PLGroup7.Project_PL.model.Order;
import PLGroup7.Project_PL.model.User;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUser(User user);
}
