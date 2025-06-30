package PLGroup7.Project_PL.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import PLGroup7.Project_PL.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
