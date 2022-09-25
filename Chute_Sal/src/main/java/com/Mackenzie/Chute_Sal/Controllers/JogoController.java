package com.Mackenzie.Chute_Sal.Controllers;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Mackenzie.Chute_Sal.Models.Jogo;
import com.Mackenzie.Chute_Sal.Repositories.JogoRepository;

@RestController
@RequestMapping("/jogo")
public class JogoController {
    
    @Autowired
    JogoRepository jogoRepository;

    @GetMapping("/")
    public List<Jogo> jogo(){
        return jogoRepository.findAll();
    }

    @PostMapping("/")
    public ResponseEntity jogo(@RequestBody Jogo jogo){
        jogoRepository.save(jogo);
        return ResponseEntity.ok().body(jogo);
    }

    @DeleteMapping("/")
    public ResponseEntity deletaJogo(@RequestBody Jogo jogo){
        jogoRepository.deleteById(jogo.getId());
        return ResponseEntity.ok().body(jogo);
    }
    
        @PutMapping("/")
        public ResponseEntity atualizaManager(@RequestBody Jogo jogo){
            jogoRepository.save(jogo);
    
            return ResponseEntity.ok().body(jogo);
    

        }
}
