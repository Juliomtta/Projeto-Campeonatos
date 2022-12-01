package com.Mackenzie.Chute_Sal.Models;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

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
@Table(name="jogador")
public class Jogador {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    private String nome;
    private String apelido;
    private String telefone;
    private String dt_nasc;
    private boolean escalado;
    private String usuario;
    private String senha;
    @ManyToOne
    private Time time; 
    @ManyToOne
    private Campeonato campeonato;

}
