


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
    
    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/jogador/', par).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));

    alert("Jogador Cadastrado!")
s
    
}











/* Funcões de cadastro*/


function campeonatos(){

    let nome = document.getElementById('nomeCamp').value;
    let dataInsc = document.getElementById('dataInscricao').value;
    let dataFimInsc = document.getElementById('dataFimInscricao').value;
    let dataInicJogos = document.getElementById('dataInicJogos').value;
    let dataFimJogos = document.getElementById('dataFimJogos').value;
    let dataDiv = document.getElementById('dataDivulgacao').value;
    let uni = document.getElementById('uniCamp').value;
    
    

    
    let campeonato =  {
        "nome" : nome,
        "iniciInscri" : dataInsc,
        "fimInscri" : dataFimInsc,
        "inicJogos" : dataInicJogos,
        "fimJogos" : dataFimJogos,
        "inicDivulg" : dataDiv,
        "status" : "Planejado",
        "unidade" : {
            "numero": uni
        }
    }
    
    console.log(campeonato)
    
    
    let par = {
        method: "POST",
        body: JSON.stringify(campeonato),
        headers: {"Content-type": "application/json"}
        }
    
    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/campeonatos/', par).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));

    alert("Campeonato Cadastrado!")
    window.location.reload();
    
}




/*deletar campeonato*/
function deleteCampeonato(id){
    
    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/campeonatos/'+id, { method: 'DELETE' })
    .then();
    alert('Campeonato Deletado')
    window.location.reload();
}

function editar(id){
    let editid = id

    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/campeonatos/'+editid)
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
        document.getElementById('selected').innerHTML = post.status
        
    });

    let btn = document.getElementById("salvar")
    btn.onclick = function editCampeonato(id){
    let nome = document.getElementById('nomeCampe').value;
    let dataInsc = document.getElementById('dataInscricaoe').value;
    let dataFimInsc = document.getElementById('dataFimInscricaoe').value;
    let dataInicJogos = document.getElementById('dataInicJogose').value;
    let dataFimJogos = document.getElementById('dataFimJogose').value;
    let dataDiv = document.getElementById('dataDivulgacaoe').value;
    let numero = document.getElementById('slc').value
    let stat = document.getElementById(numero).innerHTML

    

  
        if (numero.length == 1){
            console.log(document.getElementById(numero).innerHTML)
        }
        else{
            console.log(document.getElementById('slc').value)
        }
    
    
    

    
    let campeonatoe =  {
        "id" : editid,
        "nome" : nome,
        "iniciInscri" : dataInsc,
        "fimInscri" : dataFimInsc,
        "inicJogos" : dataInicJogos,
        "fimJogos" : dataFimJogos,
        "inicDivulg" : dataDiv,
        "status" : stat
    }
    
    console.log(campeonatoe)
    
    
    let par = {
        method: "PUT",
        body: JSON.stringify(campeonatoe),
        headers: {"Content-type": "application/json"}
        }
        console.log(par)
    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/campeonatos/', par).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));

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
    
    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/time/', par).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));

    alert("Time Cadastrado!")
    window.location.reload();
    
    


}

function deleteTime(id){
    
    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/time/'+id, { method: 'DELETE' })
    .then();
    alert('Time Deletado')
    window.location.reload();
}

function editTime(id){
    let editid = id

    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/time/'+editid)
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
            "id": camp
        }

    }

    

    
    
    let par = {
        method: "PUT",
        body: JSON.stringify(time),
        headers: {"Content-type": "application/json"}
        }
        console.log(time)
    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/time/', par).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));

    alert("Time Atualizado!")
    window.location.reload();
    

}

}




/* ------------------------------  jogo --------------------------*/
function deleteJogo(id){
    
    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/jogo/'+id, { method: 'DELETE' })
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
    let vencedor = document.getElementById('vencedor').value;
    let quadra = document.getElementById('quadras').value;

    

    
    let jogo =  {
        "time1": {
            "id" : parseInt(time1)
        },
        "time2": {
            "id" : parseInt(time2)
        },
        "pontTime1": pont1,
        "pontTime2": pont2,
        "data": data,
        "hora": hora,
        "vencedor": {
            "id" : parseInt(vencedor)
        },
        "campeonato": null,
        "status": null,
        "quadra" : {
            id : parseInt(quadra)
        }
    }
   
    

    let par = {
        method: "POST",
        body: JSON.stringify(jogo),
        headers: {"Content-type": "application/json"}
        }
    
    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/jogo/', par).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));

    alert("Jogo Cadastrado!")
 
    window.location.reload();
    

    
}


function editJogo(id){
    let editid = id

    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/jogo/'+editid)
    .then(data => {
    return data.json();
    })
    .then(post => {
        document.getElementById('time12').value = post.time1.id;
        document.getElementById('time22').value = post.time2.id;
        document.getElementById('dataJogo2').value = post.data;
        document.getElementById('horaJogo2').value = post.hora;
        document.getElementById('pont12').value = post.pontTime1;
        document.getElementById('pont22').value = post.pontTime2;
        document.getElementById('vencedor2').value = post.vencedor.id;
        document.getElementById('quadras2').value = post.quadra.id;

    });

    let btn = document.getElementById("salvarTime")
    btn.onclick = function editTime(){

        let time1 = document.getElementById('time12').value;
    let time2 = document.getElementById('time22').value;
    let data = document.getElementById('dataJogo2').value;
    let hora = document.getElementById('horaJogo2').value;
    let pont1 = document.getElementById('pont12').value;
    let pont2 = document.getElementById('pont22').value;
    let vencedor = document.getElementById('vencedor2').value;
    let quadra = document.getElementById('quadras2').value;

    

    
    let jogo =  {
        "id": editid,
        "time1": {
            "id" : parseInt(time1)
        },
        "time2": {
            "id" : parseInt(time2)
        },
        "pontTime1": pont1,
        "pontTime2": pont2,
        "data": data,
        "hora": hora,
        "vencedor": {
            "id" : parseInt(vencedor)
        },
        "campeonato": null,
        "status": null,
        "quadra" : {
            id : parseInt(quadra)
        }
    }

    
    }
    
    
    let par = {
        method: "PUT",
        body: JSON.stringify(jogo),
        headers: {"Content-type": "application/json"}
        }
        
    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/jogo/', par).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));

    alert("Time Atualizado!")
    window.location.reload();
    

}













/*    ----------------- Unidade ----------------- */

/*deletar campeonato*/
function deleteUni(id){
    
    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/unidade/'+id, { method: 'DELETE' })
    .then();
    alert('Unidade Deletada!')
    window.location.reload();
    
}

function cadastrarUnidade(){
    let nome = document.getElementById('nomeUni').value;
    let logadouro = document.getElementById('log').value;
    let nro = document.getElementById('num').value;
    let bairro = document.getElementById('bairro').value;
    let cid = document.getElementById('cid').value;
    let est = document.getElementById('est').value;

    

    
    let unidade =  {
        "nome": nome,
        "logadouro": logadouro,
        "nro_endereco": nro,
        "bairro": bairro,
        "cidade": cid,
        "estado": est
    }

    let par = {
        method: "POST",
        body: JSON.stringify(unidade),
        headers: {"Content-type": "application/json"}
        }
    
    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/unidade/', par).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));

    alert("Unidade Cadastrada !")
    window.location.reload();
    
    


}

function editarUni(id){
    let editid = id

    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/unidade/'+editid)
    .then(data => {
    return data.json();
    })
    .then(post => {
        
        document.getElementById('nomeUnii').value = post.nome
        document.getElementById('logaUnii').value = post.logadouro
        document.getElementById('numeroUnii').value = post.nro_endereco
        document.getElementById('bairroUnii').value = post.bairro
        document.getElementById('cidadeUnii').value = post.cidade
        document.getElementById('estadoUnii').value = post.estado

    });

    let btn = document.getElementById("salvarUni")
    btn.onclick = function editUnii(){

        let nome = document.getElementById('nomeUnii').value
        let logadouro = document.getElementById('logaUnii').value
        let nro = document.getElementById('numeroUnii').value
        let bairro = document.getElementById('bairroUnii').value
        let cid = document.getElementById('cidadeUnii').value
        let est = document.getElementById('estadoUnii').values


    

    
        let unidade =  {
            "numero" : editid,
            "nome": nome,
            "logadouro": logadouro,
            "nro_endereco": nro,
            "bairro": bairro,
            "cidade": cid,
            "estado": est
        }
    
        let par = {
            method: "put",
            body: JSON.stringify(unidade),
            headers: {"Content-type": "application/json"}
            }
        
        fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/unidade/', par).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));
    
        alert("Unidade Atualizada!")
        window.location.reload();

}

}









/*  --------------- Jogador -----------------*/
function deleteJogador(id){
    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/jogador/'+id, { method: 'DELETE' })
.then();
alert('Jogador Deletado')
window.location.reload();
}

function editarJogador(id, camp){

    console.log(id, camp)
}


function editarJogador(jog, camp){
        let editid = jog
        let campID = camp
    
        fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/jogador/'+editid)
        .then(data => {
        return data.json();
        })
        .then(post => {
            
            document.getElementById('nomeJoga').value = post.nome
            document.getElementById('ape').value = post.apelido
            document.getElementById('tel').value = post.telefone
            document.getElementById('dtJoga').value = post.dt_nasc
            document.getElementById('timeJoga').value = post.time.id
            document.getElementById('campJoga').value = post.campeonato.id
            
            
        });
    
        let btn = document.getElementById("salvarJogador")
        btn.onclick = function editJoga(){
        let nome = document.getElementById('nomeJoga').value
        let ape =  document.getElementById('ape').value
        let tel =    document.getElementById('tel').value
        let dt =    document.getElementById('dtJoga').value
        let time =    document.getElementById('timeJoga').value
        let camp =     document.getElementById('campJoga').value


        let jogador =  {
            "id" : editid,
            "nome" : nome,
            "apelido" : ape,
            "telefone" : tel,
            "dt_nasc" : dt,
            "time": {
                "id" : time
            },
            "campeonato": {
                "id": camp
            }
    
        }
    
        console.log(jogador)
    
        
        
        let par = {
            method: "PUT",
            body: JSON.stringify(jogador),
            headers: {"Content-type": "application/json"}
            }
        fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/jogador/', par).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));
    
        alert("Jogador Atualizado!")
        window.location.reload();
        
    
}
}

function deleteQuadra(id){
    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/quadra/'+id, { method: 'DELETE' })
.then();
alert('Quadra Deletada')
window.location.reload();
}


function cadastrarQuadra(){
    let nome = document.getElementById('nomeUniii').value;
    let uni = document.getElementById('uniQ').value;
    
    

    
    let quadra =  {
        "nome": nome,
        "unidade": {
            "numero" : parseInt(uni)
        }
    }
    console.log(quadra)
    let par = {
        method: "POST",
        body: JSON.stringify(quadra),
        headers: {"Content-type": "application/json"}
        }
    
    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/quadra/', par).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));

    alert("Quadra Cadastrada !")
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
    
    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/jogo/', par).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));
    
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
    
    fetch('http://ec2-3-94-80-209.compute-1.amazonaws.com:8081/unidade/', par).then(response => response.json()).then(json => console.log(json)).catch(err => console.log(err));
    
}





//---------------------------------------------------------------------------




