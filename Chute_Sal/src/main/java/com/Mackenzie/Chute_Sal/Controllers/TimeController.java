package com.Mackenzie.Chute_Sal.Controllers;

import java.util.ArrayList;
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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.Mackenzie.Chute_Sal.Models.Time;
import com.Mackenzie.Chute_Sal.Repositories.TimeRepository;

@RestController
@RequestMapping("/time")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TimeController {

    @Autowired
    TimeRepository timeRepository;

    @GetMapping("/")
    public List<Time> time(){
        return timeRepository.findAll();
    }   

    @GetMapping("/{id}")
    public Optional<Time> campeonato(@PathVariable("id") long id){

        return timeRepository.findById(id);
    }

    @PostMapping("/")
    public ResponseEntity create(@RequestBody Time time){

        timeRepository.save(time);
        return ResponseEntity.ok().body(time);

    }
    @DeleteMapping("/{id}")
    public void deleteTime(@PathVariable("id") Long Id){
        timeRepository.deleteById(Id);
           
    }

    
    @PutMapping("/")
    public ResponseEntity atualizaUnidade(@RequestBody Time time){
        Time timeAtu = new Time();
        timeAtu.setId(time.getId());
        timeAtu.setNome(time.getNome());
        timeAtu.setCampeonato(time.getCampeonato());
        timeRepository.save(timeAtu);
        return ResponseEntity.ok().body(timeAtu);
    }

    
}
