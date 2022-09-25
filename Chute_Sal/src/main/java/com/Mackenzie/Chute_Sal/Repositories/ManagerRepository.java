package com.Mackenzie.Chute_Sal.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Mackenzie.Chute_Sal.Models.Manager;

public interface ManagerRepository extends JpaRepository<Manager, Long> {
    
}
