package com.Mackenzie.Chute_Sal.Controllers;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Mackenzie.Chute_Sal.Models.UnidadeEscolar;
import com.Mackenzie.Chute_Sal.Repositories.UnidadeRepository;

@RestController
@RequestMapping("/unidade")
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
        return  unidadeRepository.findAll();
        
    }
    @GetMapping("/{numero}")
    public Optional<UnidadeEscolar> unidade(@PathVariable("numero") Long numero){
        return unidadeRepository.findById(numero);
    }

    @DeleteMapping("/{numero}")
    public void deletaUnidade(@PathVariable("numero") Long numero){
        unidadeRepository.deleteById(numero);
    }
/*
    @PatchMapping("/")
    public UnidadeEscolar atualizaUnidade(@RequestBody UnidadeEscolar unidade){
        unidadeRepository.
    }
*/

}
