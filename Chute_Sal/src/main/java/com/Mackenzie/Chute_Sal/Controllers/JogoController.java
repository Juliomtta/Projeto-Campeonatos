package com.Mackenzie.Chute_Sal.Controllers;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Mackenzie.Chute_Sal.Models.Jogo;
import com.Mackenzie.Chute_Sal.Repositories.JogoRepository;

@Controller
@RequestMapping("/jogo")
public class JogoController {
    
    @Autowired
    JogoRepository jogoRepository;

    @GetMapping("/manager/")
    public String jogo(){
        return "Manager/criarJogo";
    }

    @PostMapping("/manager/")
    public String  jogo(Jogo jogo){
        jogoRepository.save(jogo);
        return "Manager/criarJogo";
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
