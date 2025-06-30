package PLGroup7.Project_PL.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import PLGroup7.Project_PL.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
