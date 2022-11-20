package com.Mackenzie.Chute_Sal.Controllers;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.Mackenzie.Chute_Sal.Repositories.CampeonatoRepository;

import com.Mackenzie.Chute_Sal.Models.Campeonato;



@RestController
@RequestMapping("/campeonatos")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CampeonatoController {
    @Autowired
    CampeonatoRepository campeonatoRepository;

   

    @GetMapping("/")
    public List<Campeonato> campeonatos(){

        return campeonatoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Campeonato> campeonato(@PathVariable("id") long id){

        return campeonatoRepository.findById(id);
    }
    

    @PostMapping("/")
    public ResponseEntity create(@RequestBody Campeonato campeonato){

        campeonatoRepository.save(campeonato);
        return ResponseEntity.ok().body(campeonato);

    }

    @PutMapping("/")
    public ResponseEntity atualizaUnidade(@RequestBody Campeonato campeonato){
        Campeonato campAtu = new Campeonato();
        campAtu.setId(campeonato.getId());
        campAtu.setNome(campeonato.getNome());
        campAtu.setIniciInscri(campeonato.getIniciInscri());
        campAtu.setFimInscri(campeonato.getFimInscri());
        campAtu.setInicJogos(campeonato.getInicJogos());
        campAtu.setFimJogos(campeonato.getFimJogos());
        campAtu.setInicDivulg(campeonato.getInicDivulg());
        campAtu.setStatus(campeonato.getStatus());
        campAtu.setUnidade(campeonato.getUnidade());
        campeonatoRepository.save(campAtu);
        return ResponseEntity.ok().body(campAtu);
    }

    @DeleteMapping("/{id}")
    public void deleteJogador(@PathVariable("id") Long Id){
        campeonatoRepository.deleteById(Id);
           
    }
    

}
