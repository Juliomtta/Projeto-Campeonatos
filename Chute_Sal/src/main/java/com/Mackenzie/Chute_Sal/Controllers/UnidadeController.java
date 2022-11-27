package com.Mackenzie.Chute_Sal.Controllers;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.Mackenzie.Chute_Sal.Models.UnidadeEscolar;
import com.Mackenzie.Chute_Sal.Repositories.UnidadeRepository;

@RestController
@RequestMapping("/unidade")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UnidadeController {
    
    @Autowired
    UnidadeRepository unidadeRepository;


 
    
    @PostMapping("/")
    public UnidadeEscolar unidade(@RequestBody UnidadeEscolar unidade){
        unidadeRepository.save(unidade);
        return unidade;
    }

    @GetMapping("/")
    public List<UnidadeEscolar> unidade(){
        return unidadeRepository.findAll();
    }

    @GetMapping("/{numero}")
    public Optional<UnidadeEscolar> unidade(@PathVariable("numero") long numero){
        return unidadeRepository.findById(numero);
    }

    @DeleteMapping("/{numero}")
    public void deletaUnidade(@PathVariable("numero") Long numero){
        unidadeRepository.deleteById(numero);
    }

    @PutMapping("/")
    public ResponseEntity atualizaUnidade(@RequestBody UnidadeEscolar unidade){
        UnidadeEscolar unidadeAtu =  new UnidadeEscolar();
        unidadeAtu.setNome(unidade.getNome());
        unidadeAtu.setNumero(unidade.getNumero());
        unidadeAtu.setLogadouro(unidade.getLogadouro());
        unidadeAtu.setNro_endereco(unidade.getNro_endereco());
        unidadeAtu.setBairro(unidade.getBairro());
        unidadeAtu.setCidade(unidade.getCidade());
        unidadeAtu.setEstado(unidade.getEstado());
        unidadeRepository.save(unidadeAtu);
        return ResponseEntity.ok().body(unidadeAtu);
    }


}
