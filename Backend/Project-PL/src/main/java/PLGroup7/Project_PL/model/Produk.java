package PLGroup7.Project_PL.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "produk")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Produk {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProduk;

    private String namaProduk;
    private String deskripsi;
    private double harga;
    private Integer stok;
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "kategori_id")
    private Kategori kategori;

}
