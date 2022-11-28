


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
        
    }   
    
    });




    /************************Time**********************/

    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/time/')
    .then(data => {
    return data.json();
    })
    .then(post => {
    for(var i=0; i<post.length; i++){



        var time = document.createElement("li")
        time.className = "list-group-item mt-2"
        var  nome = '<button class="btn">'+post[i].nome+'</button>'
        var  edit = '<button type="button" class="text-success butt" data-bs-toggle="modal" data-bs-target="#editTime" onclick="editTime('+post[i].id+')" ><i class="fa-solid fa-pen-to-square"></i></button>'
        var  del = '<button type="submit" class="text-danger butt" onclick="deleteTime('+post[i].id+')"><i class="fa-solid fa-trash"></i></button>'
        


        time.innerHTML += nome;
        time.innerHTML += edit;
        time.innerHTML += del;
        document.getElementById("times").appendChild(time);

        var option = '<option value="'+post[i].id+'">'+post[i].nome+'</option>';
        var time1 = document.getElementById("time1");
        time1.innerHTML += option
        var time1 = document.getElementById("time2");
        time2.innerHTML += option
        var vencedor = document.getElementById("vencedor");
        vencedor.innerHTML += option


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
        var  apelido = "<td>"+post[i].nome+"</td>"
        var  time = "<td>"+post[i].hora+"</td>"
        var  edit = '<td><button type="button" class="text-success" data-bs-toggle="modal" data-bs-target="#editModal"  onclick=editarJogador('+post[i].id+')><i class="fa-solid fa-pen-to-square"></i></button></td>'
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
        var  edit = '<td><button type="button" class="text-success" data-bs-toggle="modal" data-bs-target="#editModal"  onclick=editar('+post[i].id+')><i class="fa-solid fa-pen-to-square"></i></button></td>'
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
        var  edit = '<td><button type="button" class="text-success" data-bs-toggle="modal" data-bs-target="#editModal"  onclick=editarUni('+post[i].numero+')><i class="fa-solid fa-pen-to-square"></i></button></td>'
        var  del = '<td><button type="submit" class="text-danger" onclick="deleteUni('+post[i].numero+')"><i class="fa-solid fa-trash"></i></button></td>'
        


        linha.innerHTML += nome;
        linha.innerHTML += bairro;
        linha.innerHTML += cid;
        linha.innerHTML += edit;
        linha.innerHTML += del;
        document.getElementById("tableUnidade").appendChild(linha);
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