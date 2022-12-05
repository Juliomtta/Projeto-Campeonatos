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
@Table(name="jogo")
public class Jogo {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @ManyToOne
    private Time time1;
    @ManyToOne
    private Time time2;
    private int pontTime1;
    private int pontTime2;
    private String data;
    private String hora;
    private String Status;
    @ManyToOne
    private Time vencedor;
    @ManyToOne
    private Campeonato campeonato;
    @ManyToOne
    private Quadra quadra;




}
