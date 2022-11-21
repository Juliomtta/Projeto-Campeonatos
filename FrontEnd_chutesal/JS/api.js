

function cadastrar(){

let nomeForm = document.getElementById('nome').value;
let apelidoForm = document.getElementById('apelido').value;
let telefoneForm = document.getElementById('telefone').value;
let dt_nascForm = document.getElementById('dt_nasc').value;
let usuarioForm = document.getElementById('usuario').value;
let senhaForm = document.getElementById('senha').value;


console.log(nomeForm)

let jogador =  {
    "nome": nomeForm,
    "apelido": apelidoForm,
    "telefone": telefoneForm,
    "dt_nasc": dt_nascForm,
    "escalado": false,
    "usuario": usuarioForm,
    "senha": senhaForm
}

console.log(jogador)


let par = {
    method: "POST",
    body: JSON.stringify(jogador),
    headers: {"Content-type": "application/json"}
    }

fetch('http://ec2-44-203-40-214.compute-1.amazonaws.com:8081/jogador/', par)
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log(err));




}








/* Funcões de cadastro*/


function campeonatos(){

    let nome = document.getElementById('nomeCamp').value;
    let dataInsc = document.getElementById('dataInscricao').value;
    let dataFimInsc = document.getElementById('dataFimInscricao').value;
    let dataInicJogos = document.getElementById('dataInicJogos').value;
    let dataFimJogos = document.getElementById('dataFimJogos').value;
    let dataDiv = document.getElementById('dataDivulgacao').value;
    
    

    
    let campeonato =  {
        "nome" : nome,
        "iniciInscri" : dataInsc,
        "fimInscri" : dataFimInsc,
        "inicJogos" : dataInicJogos,
        "fimJogos" : dataFimJogos,
        "inicDivulg" : dataDiv,
        "status" : "Planejado"
    }
    
    console.log(campeonato)
    
    
    let par = {
        method: "POST",
        body: JSON.stringify(campeonato),
        headers: {"Content-type": "application/json"}
        }
    
    fetch('http://ec2-44-203-40-214.compute-1.amazonaws.com:8081/campeonatos/', par).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));

    alert("Campeonato Cadastrado!")
    window.location.reload();
    
}




/*deletar campeonato*/
function deleteCampeonato(id){
    
    fetch('http://ec2-44-203-40-214.compute-1.amazonaws.com:8081/campeonatos/'+id, { method: 'DELETE' })
    .then();
    alert('Campeonato Deletado')
    window.location.reload();
}

function editar(id){
    let editid = id

    fetch('http://ec2-44-203-40-214.compute-1.amazonaws.com:8081/campeonatos/'+editid)
    .then(data => {
    return data.json();
    })
    .then(post => {
        
        document.getElementById('nomeCampe').value = post.nome
        document.getElementById('dataInscricaoe').value = ajustaData2(post.iniciInscri)
        document.getElementById('dataFimInscricaoe').value = ajustaData2(post.fimInscri)
        document.getElementById('dataInicJogose').value = ajustaData2(post.inicJogos)
        document.getElementById('dataFimJogose').value = ajustaData2(post.fimJogos)
        document.getElementById('dataDivulgacaoe').value = ajustaData2(post.inicDivulg)
        document.getElementById('selected').value = post.status
    });

    let btn = document.getElementById("salvar")
    btn.onclick = function editCampeonato(id){
    let nome = document.getElementById('nomeCampe').value;
    let dataInsc = document.getElementById('dataInscricaoe').value;
    let dataFimInsc = document.getElementById('dataFimInscricaoe').value;
    let dataInicJogos = document.getElementById('dataInicJogose').value;
    let dataFimJogos = document.getElementById('dataFimJogose').value;
    let dataDiv = document.getElementById('dataDivulgacaoe').value;
    
    

    
    let campeonatoe =  {
        "id" : editid,
        "nome" : nome,
        "iniciInscri" : dataInsc,
        "fimInscri" : dataFimInsc,
        "inicJogos" : dataInicJogos,
        "fimJogos" : dataFimJogos,
        "inicDivulg" : dataDiv,
        "status" : "Planejado"
    }
    
    console.log(campeonatoe)
    
    
    let par = {
        method: "PUT",
        body: JSON.stringify(campeonatoe),
        headers: {"Content-type": "application/json"}
        }
        console.log(par)
    fetch('http://ec2-44-203-40-214.compute-1.amazonaws.com:8081/campeonatos/', par).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));

    alert("Campeonato Atualizado!")
    window.location.reload();
    

}

}











//------------------------------Time -----------------------------

function cadastrarTime(){
    let nome = document.getElementById('nomeTime').value;
    let camp = document.getElementById('menuCamp').value;

    

    
    let time =  {
        "nome" : nome,
        "campeonato" :  { 
            "id": camp
        }
 
    }

    let par = {
        method: "POST",
        body: JSON.stringify(time),
        headers: {"Content-type": "application/json"}
        }
    
    fetch('http://ec2-44-203-40-214.compute-1.amazonaws.com:8081/time/', par).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));

    alert("Time Cadastrado!")
    window.location.reload();
    
    


}

function deleteTime(id){
    
    fetch('http://ec2-44-203-40-214.compute-1.amazonaws.com:8081/time/'+id, { method: 'DELETE' })
    .then();
    alert('Time Deletado')
    window.location.reload();
}

function editTime(id){
    let editid = id

    fetch('http://ec2-44-203-40-214.compute-1.amazonaws.com:8081/time/'+editid)
    .then(data => {
    return data.json();
    })
    .then(post => {
        
        document.getElementById('nomeTimee').value = post.nome
        document.getElementById('menuC').value = post.campeonato.id
    });

    let btn = document.getElementById("salvarTime")
    btn.onclick = function editTime(){
    let nome = document.getElementById('nomeTimee').value;
    let camp = document.getElementById('menuC').value;

    

    
    let time =  {
        "id" : editid,
        "nome" : nome,
        "campeonato": { 
            "id": '1'
        }

    }
    

    
    
    let par = {
        method: "PUT",
        body: JSON.stringify(time),
        headers: {"Content-type": "application/json"}
        }
        console.log(time)
    fetch('http://ec2-44-203-40-214.compute-1.amazonaws.com:8081/time/', par).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));

    alert("Time Atualizado!")
    window.location.reload();
    

}

}




/* ------------------------------  jogo --------------------------*/
function deleteJogo(id){
    
    fetch('http://ec2-44-203-40-214.compute-1.amazonaws.com:8081/jogo/'+id, { method: 'DELETE' })
    .then();
    alert('Jogo Deletado')
    window.location.reload();
}


function cadastrarJogo(){
    let time1 = document.getElementById('time1').value;
    let time2 = document.getElementById('time2').value;
    let data = document.getElementById('dataJogo').value;
    let hora = document.getElementById('horaJogo').value;
    let pont1 = document.getElementById('pont1').value;
    let pont2 = document.getElementById('pont2').value;
    let vencedor = document.getElementById('pont2').value;

    

    
    let time =  {
        "time1": {
            "id" : time1
        },
        "time2": {
            "id" : time2
        },
        "pontTime1": pont1,
        "pontTime2": pont2,
        "data": data,
        "hora": hora,
        "vencedor": {
            "id" : vencedor
        },
        "campeonato": null,
        "status": null
    }
    console.log(time)
    

    let par = {
        method: "POST",
        body: JSON.stringify(time),
        headers: {"Content-type": "application/json"}
        }
    
    fetch('http://ec2-44-203-40-214.compute-1.amazonaws.com:8081/time/', par).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));

    alert("Time Cadastrado!")
    window.location.reload();
    
    

    
}

    































//---------------------------------------------------------------------------

function jogo(){

    let nomeForm = document.getElementById('time1').value;
    let apelidoForm = document.getElementById('time2').value;
    let telefoneForm = document.getElementById('data').value;
    let dt_nascForm = document.getElementById('campeonato').value;
    
    
    console.log(nomeForm)
    
    let jogador =  {
        "time1": nomeForm,
        "time2": apelidoForm,
        "data": telefoneForm,
        "campeonato": dt_nascForm,
    }
    
    console.log(jogador)
    
    
    let par = {
        method: "POST",
        body: JSON.stringify(jogador),
        headers: {"Content-type": "application/json"}
        }
    
    fetch('http://ec2-3-93-76-13.compute-1.amazonaws.com:8081/jogo/', par).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));
    
}

//---------------------------------------------------------------------------

function unidade(){

    let nomeForm = document.getElementById('cadastrar').value;
    let apelidoForm = document.getElementById('endereco').value;
    
    
    console.log(nomeForm)
    
    let jogador =  {
        "cadastrar": nomeForm,
        "endereco": apelidoForm,

    }
    
    console.log(jogador)
    
    
    let par = {
        method: "POST",
        body: JSON.stringify(jogador),
        headers: {"Content-type": "application/json"}
        }
    
    fetch('http://ec2-3-93-76-13.compute-1.amazonaws.com:8081/unidade/', par).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));
    
}

//---------------------------------------------------------------------------

function callAPI(url, method, callback, data){
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open(method, url, true);
    if(method == "POST" || method == "PUT" || method == "PATCH"){
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    }
    xhr.onload = function(){
        if(xhr.status == 200 || xhr.status == 201){
            callback(xhr.response);
        }
    }
    if(data){
        xhr.send(JSON.stringify(data))
    } else{
        xhr.send();    
    }
}



