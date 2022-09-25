package com.Mackenzie.Chute_Sal.Controllers;



import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import com.Mackenzie.Chute_Sal.Models.Manager;
import com.Mackenzie.Chute_Sal.Repositories.ManagerRepository;



@RestController
@RequestMapping("/manager")
public class ManagerController {
    
    @Autowired
    ManagerRepository managerRepository;
    

    @GetMapping("/")
    public List<Manager> manager(){
        return  managerRepository.findAll();
    }
    @GetMapping("/{id}")
    public Optional<Manager> manager(@PathVariable("id") long id){
        
         return managerRepository.findById(id);

    } 


    @PostMapping("/")
    public void manager(@RequestBody Manager manager){
        managerRepository.save(manager);
        
    }

    @DeleteMapping("/")
    public void deleteManager(@RequestBody Long id){
        managerRepository.deleteById(id);
        
        
    }

    @PutMapping("/")
    public ResponseEntity atualizaManager(@RequestBody Manager manager){
        managerRepository.save(manager);

        return ResponseEntity.ok().body(manager);


    }
}
