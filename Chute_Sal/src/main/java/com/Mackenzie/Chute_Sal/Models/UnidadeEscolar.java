package com.Mackenzie.Chute_Sal.Models;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="unidade") 
public class UnidadeEscolar {
    @Id
    private Long numero;
    private String nome;
    private String logadouro;
    private String nro_endereco;
    private String bairro;
    private String cidade;
    private String estado;
    

    
    

}
