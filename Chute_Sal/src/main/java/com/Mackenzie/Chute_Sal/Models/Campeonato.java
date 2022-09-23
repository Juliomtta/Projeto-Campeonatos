package com.Mackenzie.Chute_Sal.Models;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Campeonato {
    private String nome;
    private int unidade;
    private String iniciInscri;
    private String fimInscri;
    private String inicJogos;
    private String fimJogos;
    private String inicDivulg;
    private String status;
    private List<Integer> times = new ArrayList<Integer>();
}
