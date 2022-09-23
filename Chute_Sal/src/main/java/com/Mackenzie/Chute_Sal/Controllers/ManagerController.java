package com.Mackenzie.Chute_Sal.Controllers;



import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.Mackenzie.Chute_Sal.Models.Manager;



@RestController
@RequestMapping("/manager")
public class ManagerController {
    
    
    private List<Manager> managerList = new ArrayList<Manager>();
    

    @GetMapping("/")
    public List<Manager> manager(){
        return  managerList;
    }
    @GetMapping("/{id}")
    public Manager manager(@PathVariable("id") long id){
        
        Optional<Manager> managerFind = managerList.stream().filter(manager -> manager.getId() == id).findFirst();
        
        if(managerFind.isPresent()){
            return managerFind.get();
        }
        return null;
    } 


    @PostMapping("/")
    public void manager(@RequestBody Manager manager){
        managerList.add(manager);
        
    }
}
