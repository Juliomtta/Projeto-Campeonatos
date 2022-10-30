package com.Mackenzie.Chute_Sal.Models;


import java.util.Date;

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
@Table(name="campeonato")
public class Campeonato {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    private String nome;
    private Date iniciInscri;
    private Date fimInscri;
    private Date inicJogos;
    private Date fimJogos;
    private Date inicDivulg;
    private String status;
    @ManyToOne
    private UnidadeEscolar unidade;

    
}
