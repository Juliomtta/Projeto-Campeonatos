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

import com.Mackenzie.Chute_Sal.Models.Jogo;
import com.Mackenzie.Chute_Sal.Repositories.JogoRepository;

@RestController
@RequestMapping("/jogo")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class JogoController {
    
    @Autowired
    JogoRepository jogoRepository;

    @GetMapping("/")
    public List<Jogo> jogo(){
       return jogoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Jogo> jogo(@PathVariable("id") long id){

        return jogoRepository.findById(id);
    }

    @PostMapping("/")
    public ResponseEntity create(@RequestBody Jogo jogo){

        jogoRepository.save(jogo);
        return ResponseEntity.ok().body(jogo);

    }


    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long Id){
        jogoRepository.deleteById(Id);
           
    }
    
    @PutMapping("/")
    public ResponseEntity atualizaUnidade(@RequestBody Jogo jogo){
        Jogo jogoAtu = new Jogo();
        jogoAtu.setId(jogo.getId());
        jogoAtu.setTime1(jogo.getTime1());
        jogoAtu.setTime2(jogo.getTime2());
        jogoAtu.setPontTime1(jogo.getPontTime1());
        jogoAtu.setPontTime2(jogo.getPontTime2());
        jogoAtu.setData(jogo.getData());
        jogoAtu.setHora(jogo.getHora());
        jogoAtu.setStatus(jogo.getStatus());
        jogoAtu.setVencedor(jogo.getVencedor());
        jogoRepository.save(jogoAtu);
        return ResponseEntity.ok().body(jogoAtu);
    }
}
