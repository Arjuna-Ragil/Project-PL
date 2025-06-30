package PLGroup7.Project_PL.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import PLGroup7.Project_PL.model.Kategori;
import PLGroup7.Project_PL.service.KategoriService;

@RestController
@RequestMapping("/api/kategori")
public class KategoriController {
    @Autowired
    private KategoriService kategoriService;

    @GetMapping
    public List<Kategori> getAll() {
        return kategoriService.getAllKategori();
    }
    
}
