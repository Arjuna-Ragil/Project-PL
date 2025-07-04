package PLGroup7.Project_PL.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import PLGroup7.Project_PL.model.Produk;
import PLGroup7.Project_PL.repository.ProdukRepository;

@Service
public class ProdukService {
    @Autowired
    private ProdukRepository produkRepository;

    public List<Produk>getAllProduks() {
        return produkRepository.findAll();
    }

    public Optional<Produk> getProdukById(Integer id) {
        return produkRepository.findByIdProduk(id);
    }

    public List<Produk> getProdukByKategori(String kategori) {
        return produkRepository.findByKategoriNamaIgnoreCase(kategori);
    }

    public Produk createProduk(Produk produk) {
        return produkRepository.save(produk);
    }

    public Produk updateProduk(Long id, Produk updatedProduk) {
        return produkRepository.findById(id).map(produk -> {
            produk.setNamaProduk(updatedProduk.getNamaProduk());
            produk.setDeskripsi(updatedProduk.getDeskripsi());
            produk.setHarga(updatedProduk.getHarga());
            produk.setKategori(updatedProduk.getKategori());
            return produkRepository.save(produk);
        }) .orElseThrow(()-> new RuntimeException("Produk tidak ditemukan"));
    }

    public void deleteProduk(Long id) {
        produkRepository.deleteById(id);
    }
}
