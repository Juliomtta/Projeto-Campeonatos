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
import java.util.Optional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
@RequestMapping("/quadra")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class QuadraController {
    @Autowired
    QuadraRepository quadraRepository;

    @GetMapping("/")
    public List<Quadra> quadra(){
        return quadraRepository.findAll();
    }
    
    @GetMapping("/{id}")
    public Optional<Quadra> quadra(@PathVariable("id") long id){

        return quadraRepository.findById(id);
    }

    @PostMapping("/")
    public ResponseEntity quadra(@RequestBody Quadra quadra){
        quadraRepository.save(quadra);
        return ResponseEntity.ok().body(quadra);
    }

   @DeleteMapping("/{id}")
    public void deleteQuadra(@PathVariable("id") Long Id){
        quadraRepository.deleteById(Id);
           
    }


    @PutMapping("/")
    public ResponseEntity atualizaQuadra(@RequestBody Quadra quadra){
        quadraRepository.save(quadra);
        return ResponseEntity.ok().body(quadra);
    }


    
}
