package PLGroup7.Project_PL.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import PLGroup7.Project_PL.model.Produk;
import PLGroup7.Project_PL.service.ProdukService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/produk")
public class ProdukController {
    @Autowired
    private ProdukService produkService;
    
    @GetMapping
    public List<Produk> getAllProduk() {
        return produkService.getAllProduks();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produk> getProduk(@PathVariable Integer id) {
        return produkService.getProdukById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
    
    @GetMapping("/filter")
    public List<Produk> getProdukByKategori(@RequestParam(required = false) String kategori) {
        if (kategori != null && !kategori.isEmpty()) {
            return produkService.getProdukByKategori(kategori);
        } else {
            return produkService.getAllProduks(); 
        }
    }
}
