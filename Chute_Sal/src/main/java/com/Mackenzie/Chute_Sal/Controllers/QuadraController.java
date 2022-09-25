package com.Mackenzie.Chute_Sal.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.Mackenzie.Chute_Sal.Models.Quadra;
import com.Mackenzie.Chute_Sal.Repositories.QuadraRepository;

@RestController
@RequestMapping("/quadra")
public class QuadraController {
    @Autowired
    QuadraRepository quadraRepository;

    @GetMapping("/")
    public List<Quadra> quadra(){
        return quadraRepository.findAll();
    }

    @PostMapping("/")
    public ResponseEntity quadra(@RequestBody Quadra quadra){
        quadraRepository.save(quadra);
        return ResponseEntity.ok().body(quadra);
    }

    @DeleteMapping("/")
    public void deleteQuadra(@RequestBody Long id){

        quadraRepository.deleteById(id);        
    }

    @PutMapping("/")
    public ResponseEntity atualizaQuadra(@RequestBody Quadra quadra){
        quadraRepository.save(quadra);
        return ResponseEntity.ok().body(quadra);
    }


    
}
