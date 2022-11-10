

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

fetch('http://ec2-3-93-76-13.compute-1.amazonaws.com:8081/jogador/', par)
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log(err));



nomeForm.value = "";
apelidoForm.value = "";
telefoneForm.value = "";
dt_nascForm.value = "";
usuarioForm.value = "";
senhaForm.value = "";

}








/* Funcões de cadastro*/


function campeonatos(){

    let nome = document.getElementById('nomeCamp').value;
    let dataInsc = document.getElementById('dataInscricao').value;
    let dataFimInsc = document.getElementById('dataFimInscricao').value;
    let dataInicJogos = document.getElementById('dataInicJogos').value;
    let dataFimJogos = document.getElementById('dataFimJogos').value;
    let dataDiv = document.getElementById('dataDivulgacao').value;
    let status = document.getElementById('status').value;
    

    
    let campeonato =  {
        "nome" : nome,
        "iniciInscri" : dataInsc,
        "fimInscri" : dataFimInsc,
        "inicJogos" : dataInicJogos,
        "fimJogos" : dataFimJogos,
        "inicDivulg" : dataDiv,
        "status" : "PLANEJADO"
    }
    
    console.log(campeonato)
    
    
    let par = {
        method: "POST",
        body: JSON.stringify(campeonato),
        headers: {"Content-type": "application/json"}
        }
    
    fetch('http://ec2-3-93-76-13.compute-1.amazonaws.com:8081/campeonatos/', par).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));

   
    
}

//---------------------------------------------------------------------------

function time(){

    let nomeForm = document.getElementById('nome').value;
    let apelidoForm = document.getElementById('unidade').value;
    let telefoneForm = document.getElementById('quantidade').value;
    
    
    console.log(nomeForm)
    
    let jogador =  {
        "nome": nomeForm,
        "unidade": apelidoForm,
        "quantidade": telefoneForm,
    }
    
    console.log(jogador)
    
    
    let par = {
        method: "POST",
        body: JSON.stringify(jogador),
        headers: {"Content-type": "application/json"}
        }
    
    fetch('http://ec2-3-93-76-13.compute-1.amazonaws.com:8081/time/', par).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));
    
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



