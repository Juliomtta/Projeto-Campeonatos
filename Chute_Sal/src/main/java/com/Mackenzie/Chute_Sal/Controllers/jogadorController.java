package com.Mackenzie.Chute_Sal.Controllers;


import java.util.List;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.Mackenzie.Chute_Sal.Models.Jogador;
import com.Mackenzie.Chute_Sal.Repositories.JogadorRepository;

@RestController
@RequestMapping("/jogador")
public class jogadorController {

    @Autowired
    JogadorRepository jogadorRepository;



    @GetMapping("/")
    public List<Jogador> jogador(){
        return jogadorRepository.findAll();
    }

    @PostMapping("/")
    public ResponseEntity jogador(@RequestBody Jogador jogador){
        jogadorRepository.save(jogador);
        return ResponseEntity.ok().body(jogador);
    }
    @DeleteMapping("/")
    public ResponseEntity deleteJogador(@RequestBody Jogador jogador){
        jogadorRepository.deleteById(jogador.getId());
        return ResponseEntity.ok().body(jogador);   
    }
    
    @PutMapping("/")
    public ResponseEntity atualizaJogador(@RequestBody Jogador jogador){
        jogadorRepository.save(jogador);
        return ResponseEntity.ok().body(jogador);
    }
    


}
