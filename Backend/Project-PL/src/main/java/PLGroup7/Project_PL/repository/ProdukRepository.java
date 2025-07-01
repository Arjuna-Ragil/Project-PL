package PLGroup7.Project_PL.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import PLGroup7.Project_PL.model.Produk;

@Repository
public interface ProdukRepository extends JpaRepository<Produk, Long>{
    List<Produk> findByKategoriId(Long kategoriId);

    Optional<Produk> findById(Integer id);

    List<Produk> findByKategoriIgnoreCase(String kategori);
}
