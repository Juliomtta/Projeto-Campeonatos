


console.log("teste")

function consultar(){


    /************************Campeonato**********************/

    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/campeonatos/')
    .then(data => {
    return data.json();
    })
    .then(post => {
    for(var i=0; i<post.length; i++){


        

        var linha = document.createElement("tr");
        var  nome = "<td>"+post[i].nome+"</td>"
        var  inicio = "<td>"+ajustaData(post[i].inicJogos)+"</td>"
        var  fim = "<td>"+ajustaData(post[i].fimJogos)+"</td>"
        var  status = "<td>"+post[i].status+"</td>"
        var  edit = '<td><button type="button" class="text-success" data-bs-toggle="modal" data-bs-target="#editModal"  onclick=editar('+post[i].id+')><i class="fa-solid fa-pen-to-square"></i></button></td>'
        var  del = '<td><button type="submit" class="text-danger" onclick="deleteCampeonato('+post[i].id+')"><i class="fa-solid fa-trash"></i></button></td>'
        


        linha.innerHTML += nome;
        linha.innerHTML += inicio;
        linha.innerHTML += fim;
        linha.innerHTML += status;
        linha.innerHTML += edit;
        linha.innerHTML += del;
        document.getElementById("table").appendChild(linha);

       
        var option = '<option value="'+post[i].id+'">'+post[i].nome+'</option>';
        var sel = document.getElementById("menuCamp");
        sel.innerHTML += option
        var selE = document.getElementById("menuC");
        selE.innerHTML += option
        var selJ = document.getElementById('campJoga')
        selJ.innerHTML += option
        
    }   
    
    });







    /************************Time**********************/

    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/time/')
    .then(data => {
    return data.json();
    })
    .then(post => {
    for(var i=0; i<post.length; i++){



        var time = document.createElement("tr")
        
        var  nome = '<td>'+post[i].nome+'</td>'
        var camp = '<td>'+post[i].campeonato.nome+'</td>'
        var  edit = '<td><button type="button" class="text-success butt" data-bs-toggle="modal" data-bs-target="#editTime" onclick="editTime('+post[i].id+')" ><i class="fa-solid fa-pen-to-square"></i></button></td>'
        var  del = '<td><button type="submit" class="text-danger butt" onclick="deleteTime('+post[i].id+')"><i class="fa-solid fa-trash"></i></button></td>'
        


        time.innerHTML += nome;
        time.innerHTML += camp;
        time.innerHTML += edit;
        time.innerHTML += del;
        document.getElementById("tableTime").appendChild(time);

        var option = '<option value="'+post[i].id+'">'+post[i].nome+'</option>';
        var time1 = document.getElementById("time1");
        time1.innerHTML += option
        var time1 = document.getElementById("time2");
        time2.innerHTML += option
        var vencedor = document.getElementById("vencedor");
        vencedor.innerHTML += option
        

        var joga = document.getElementById("timeJoga");
        joga.innerHTML += option


    }
    
    });

    /************************Jogador**********************/

    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/jogador/')
    .then(data => {
    return data.json();
    })
    .then(post => {
    for(var i=0; i<post.length; i++){

        
        var linha = document.createElement("tr");
        var  nome = "<td>"+post[i].nome+"</td>"
        var  apelido = "<td>"+post[i].apelido+"</td>"
        var  time = "<td>"+post[i].time.nome+"</td>"
        var  edit = '<td><button type="button" class="text-success" data-bs-toggle="modal" data-bs-target="#editJogador"  onclick=editarJogador('+post[i].id+','+post[i].campeonato.id+')><i class="fa-solid fa-pen-to-square"></i></button></td>'
        var  del = '<td><button type="submit" class="text-danger" onclick="deleteJogador('+post[i].id+')"><i class="fa-solid fa-trash"></i></button></td>'
        


        linha.innerHTML += nome;
        linha.innerHTML += apelido;
        linha.innerHTML += time;
        linha.innerHTML += edit;
        linha.innerHTML += del;
        document.getElementById("tableJogador").appendChild(linha);
    }
    
    });














    /************************jogo**********************/

    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/jogo/')
    .then(data => {
    return data.json();
    })
    .then(post => {
    for(var i=0; i<post.length; i++){

        
        var linha = document.createElement("tr");
        var  time1 = "<td>"+post[i].time1.nome+"</td>"
        var  time2 = "<td>"+post[i].time2.nome+"</td>"
        var  hora = "<td>"+post[i].hora+"</td>"
        var  data = "<td>"+post[i].data+"</td>"
        var  vencedor = "<td>"+post[i].vencedor.nome+"</td>"
        var  edit = '<td><button type="button" class="text-success" data-bs-toggle="modal" data-bs-target="#editJogo"  onclick=editar('+post[i].id+')><i class="fa-solid fa-pen-to-square"></i></button></td>'
        var  del = '<td><button type="submit" class="text-danger" onclick="deleteJogo('+post[i].id+')"><i class="fa-solid fa-trash"></i></button></td>'
        


        linha.innerHTML += time1;
        linha.innerHTML += time2;
        linha.innerHTML += hora;
        linha.innerHTML += data;
        linha.innerHTML += vencedor;
        linha.innerHTML += edit;
        linha.innerHTML += del;
        document.getElementById("tableJogo").appendChild(linha);
    }
    
    });



    /************************Unidade**********************/

    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/unidade/')
    .then(data => {
    return data.json();
    })
    .then(post => {
    for(var i=0; i<post.length; i++){

        var linha = document.createElement("tr");
        var  nome = "<td>"+post[i].nome+"</td>"
        var  bairro = "<td>"+post[i].bairro+"</td>"
        var  cid = "<td>"+post[i].cidade+"</td>"
        var  edit = '<td><button type="button" class="text-success" data-bs-toggle="modal" data-bs-target="#editarUni"  onclick=editarUni('+post[i].numero+')><i class="fa-solid fa-pen-to-square"></i></button></td>'
        var  del = '<td><button type="submit" class="text-danger" onclick="deleteUni('+post[i].numero+')"><i class="fa-solid fa-trash"></i></button></td>'
        
        var opcao = document.createElement("option");
        opcao.innerHTML = post[i].nome;
        opcao.value = post[i].numero;
        document.getElementById("uniCamp").appendChild(opcao)





        linha.innerHTML += nome;
        linha.innerHTML += bairro;
        linha.innerHTML += cid;
        linha.innerHTML += edit;
        linha.innerHTML += del;
        document.getElementById("tableUnidade").appendChild(linha);



        let un = document.getElementById('uniQ')
        var option = '<option value="'+post[i].numero+'">'+post[i].nome+'</option>';
       
       
        


        un.innerHTML += option

        
    }
    
    });




    /*----------------------Quadra ------------*/

    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/quadra/')
    .then(data => {
    return data.json();
    })
    .then(post => {
    for(var i=0; i<post.length; i++){

        
        var linha = document.createElement("tr");
        var  nome = "<td>"+post[i].nome+"</td>"
        var  unidade = "<td>"+post[i].unidade.nome+"</td>"
        var  edit = '<td><button type="button" class="text-success" data-bs-toggle="modal" data-bs-target="#editModal"  onclick=editarQuadra('+post[i].id+')><i class="fa-solid fa-pen-to-square"></i></button></td>'
        var  del = '<td><button type="submit" class="text-danger" onclick="deleteQuadra('+post[i].id+')"><i class="fa-solid fa-trash"></i></button></td>'
        


        linha.innerHTML += nome;
        linha.innerHTML += unidade;
        linha.innerHTML += edit;
        linha.innerHTML += del;
        document.getElementById("tableQuadra").appendChild(linha);


        var option = '<option value="'+post[i].id+'">'+post[i].nome+'</option>';
        let q = document.getElementById('quadras');
        q.innerHTML += option



        
    }
    
    });









   
         
    
}




    consultar()


function ajustaData(data){
    if(data != null){
    let data_EUA =data.slice(0,10)
    let data_br = data_EUA.split('-').reverse().join('/');
    return data_br;
    }
}

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


function ajustaData2(data){
    return data.slice(0,10)
}