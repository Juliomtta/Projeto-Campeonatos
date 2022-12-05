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
    document.getElementById("tablei").appendChild(linha);

   
    var option = '<option value="'+post[i].id+'">'+post[i].nome+'</option>';
    var sel = document.getElementById("menuCamp");
    sel.innerHTML += option
    var selE = document.getElementById("menuC");
    selE.innerHTML += option
    
}   

});