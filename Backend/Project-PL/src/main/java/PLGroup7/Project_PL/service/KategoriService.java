package PLGroup7.Project_PL.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import PLGroup7.Project_PL.model.Kategori;
import PLGroup7.Project_PL.repository.KategoriRepository;

@Service
public class KategoriService {
    @Autowired
    private KategoriRepository kategoriRepository;

    public List<Kategori> getAllKategori() {
        return kategoriRepository.findAll();
    }

    public Kategori createKategori(Kategori kategori) {
        return kategoriRepository.save(kategori);
    }

    public void deleteKategori(Long id) {
        kategoriRepository.deleteById(id);
    }
}
