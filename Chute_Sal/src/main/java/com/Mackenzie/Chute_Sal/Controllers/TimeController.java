package com.Mackenzie.Chute_Sal.Controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.Mackenzie.Chute_Sal.Models.Time;
import com.Mackenzie.Chute_Sal.Repositories.TimeRepository;

@RestController
@RequestMapping("/manager/time")
public class TimeController {

    @Autowired
    TimeRepository timeRepository;

    @GetMapping("/")
    public List<Time> time(){
        return timeRepository.findAll();
    }   

    @PostMapping("/")
    public ResponseEntity time(@RequestBody Time time){
        timeRepository.save(time);
        return ResponseEntity.ok().body(time);
    }

    @DeleteMapping("/")
    public void deleteTime(@RequestBody Long id){
        timeRepository.deleteById(id);
    }
    
}
