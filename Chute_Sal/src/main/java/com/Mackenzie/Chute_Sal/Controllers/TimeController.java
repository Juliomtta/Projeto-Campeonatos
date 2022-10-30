package com.Mackenzie.Chute_Sal.Controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.Mackenzie.Chute_Sal.Models.Time;
import com.Mackenzie.Chute_Sal.Repositories.TimeRepository;

@Controller
@RequestMapping("/time")
public class TimeController {

    @Autowired
    TimeRepository timeRepository;

    @GetMapping("/manager/")
    public String time(){
        return "Manager/criarTime";
    }   

    @PostMapping("/manager/")
    public String time(Time time){
        timeRepository.save(time);
        return "/Manager/criarTime";
    }

    @DeleteMapping("/")
    public void deleteTime(@RequestBody Long id){
        timeRepository.deleteById(id);
    }

    @PutMapping("/")
    public ResponseEntity atualizaTime(@RequestBody Time time){
        timeRepository.save(time);
        return ResponseEntity.ok().body(time);
    }
    
}
