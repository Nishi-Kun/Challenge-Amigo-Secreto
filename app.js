//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Lista de nomes:
let listaDeAmigos = [];

//lista de nomes sorteados:
let listaDeNomesSorteados = [];

//Função para adicionar nomes na lista e validar a entrada do usuário:
function adicionarAmigo(){
    let nomeAmigo = document.getElementById('amigo').value;
    if(nomeAmigo == ''){
        alert('O nome do amigo deve ser preenchido.');
    }else{
        if(listaDeAmigos.includes(nomeAmigo)){
            alert('Este amigo já está na lista, insira outro nome.');

        }else{
            listaDeAmigos.push(nomeAmigo);
            alterarValorInput('');
            atualizarListaDeAmigos();
            console.log(listaDeAmigos);
        }
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

//Função para sortear um amigo:
function sortearAmigo(){
    let indiceListaDeAmigos = gerarIndiceListaDeAmigos();
    let ulResultado = document.getElementById('resultado');
    if(listaDeAmigos.length === 0){
        alert('A lista de nomes está vazia.');
    }else{
        ulResultado.innerHTML = listaDeAmigos[indiceListaDeAmigos];
    }

}

//Função para gerar um indice da lista de amigos e adicionar a uma lista de nomes sorteados, para que não haja sorteio do mesmo nome.
function gerarIndiceListaDeAmigos(){
    let indiceListaDeAmigos = Math.floor(Math.random() * listaDeAmigos.length);

    if(listaDeNomesSorteados.includes(indiceListaDeAmigos)){
        return gerarIndiceListaDeAmigos();
    }else{
        listaDeNomesSorteados.push(indiceListaDeAmigos);
        console.log(indiceListaDeAmigos);
        console.log(listaDeNomesSorteados);
        console.log(listaDeAmigos[indiceListaDeAmigos]);
        return indiceListaDeAmigos;
        
    }
}







