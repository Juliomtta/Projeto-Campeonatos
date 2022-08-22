package com.mackenzie.Projeto_ChutSal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
public class ProjetoChutSalApplication {

	
	public static void main(String[] args) {
		SpringApplication.run(ProjetoChutSalApplication.class, args);
	}

	@GetMapping(value = "/")
		public String Users() {
			return "hello world";
	}
	


}
