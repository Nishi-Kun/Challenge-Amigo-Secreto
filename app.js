//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Lista de nomes:
let listaDeAmigos = [];

//Função para adicionar nomes na lista e validar a entrada do usuário:
function adicionarAmigo(){
    let nomeAmigo = document.getElementById('amigo').value;
    if(nomeAmigo == ''){
        alert('O nome do amigo deve ser preenchido.')
    }else{
        listaDeAmigos.push(nomeAmigo);
        alterarValorInput('');
        atualizarListaDeAmigos();
        console.log(listaDeAmigos);
    }
}

// Função para alterar o valor do campo HTML INPUT:
function alterarValorInput(texto){
    let campoInput = document.getElementById('amigo');
    campoInput.value = texto;
}

//Função para inserir os nomes da lista de amigos, como elementos li, em um elemento ul: 
function atualizarListaDeAmigos(){  
    let ulHtml = document.getElementById('listaAmigos');
    ulHtml.innerHTML = '';

    listaDeAmigos.forEach(amigo =>{
        let itemLi = document.createElement('li');
        itemLi.textContent = amigo;
        ulHtml.appendChild(itemLi);
    })
}






