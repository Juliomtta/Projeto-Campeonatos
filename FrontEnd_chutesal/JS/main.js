function consultar(){

    fetch('http://ec2-3-93-76-13.compute-1.amazonaws.com:8081/campeonatos/')
    .then(data => {
    return data.json();
    })
    .then(post => {
    for(var i=0; i<post.length; i++){


        console.log(ajustaData(post[i].iniciInscri))

        var linha = document.createElement("tr");
        var  nome = "<td>"+post[i].nome+"</td>"
        var  inicio = "<td>"+ajustaData(post[i].inicJogos)+"</td>"
        var  fim = "<td>"+ajustaData(post[i].fimJogos)+"</td>"
        var  status = "<td>"+post[i].status+"</td>"
        


        linha.innerHTML += nome;
        linha.innerHTML += inicio;
        linha.innerHTML += fim;
        linha.innerHTML += status;
        document.getElementById("table").appendChild(linha);
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
