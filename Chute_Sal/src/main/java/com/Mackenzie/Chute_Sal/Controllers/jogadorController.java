package com.Mackenzie.Chute_Sal.Controllers;


import java.util.List;
import java.util.Optional;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

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

import com.Mackenzie.Chute_Sal.Models.Jogador;
import com.Mackenzie.Chute_Sal.Repositories.JogadorRepository;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/jogador")
public class jogadorController {

    @Autowired
    JogadorRepository jogadorRepository;



    @GetMapping("/")
    public List<Jogador> jogador(){
        return jogadorRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public Optional<Jogador> campeonato(@PathVariable("id") long id){

        return jogadorRepository.findById(id);
    }

    @PostMapping("/")
    public Jogador  jogador(@RequestBody Jogador jogador){
        jogadorRepository.save(jogador);
        return jogador;
    }
    @DeleteMapping("/{id}")
    public void deleteJogador(@PathVariable("id") Long id){
        jogadorRepository.deleteById(id);
       
    }
    
    @PutMapping("/")
    public ResponseEntity atualizaJogador(@RequestBody Jogador jogador){
        jogadorRepository.save(jogador);
        return ResponseEntity.ok().body(jogador);
    }
    


}
