package com.Mackenzie.Chute_Sal.Controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Mackenzie.Chute_Sal.Models.Time;

@RestController
@RequestMapping("/manager/time")
public class TimeController {

    private List<Time> time = new ArrayList<Time>();

    @GetMapping("/")
    public List<Time> time(){
        return time;
    }   

    @PostMapping("/")
    public Time time(@RequestBody Time time){
        
        return time;
    }
    
}
