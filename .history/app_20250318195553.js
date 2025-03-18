//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []; // Array para armazenar os nomes dos amigos

function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value;

    // Validação: Campo vazio
    if (nomeAmigo.trim() === '') {
        alert('Por favor, insira um nome válido.');
        return; // Impede a execução do restante da função
    }

    // Validação: Nome já existe na lista.
    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado. Por favor, insira um nome diferente.');
        document.getElementById('amigo').value = ''; // Limpa o campo
        return;
    }


    amigos.push(nomeAmigo); // Adiciona o nome ao array
    atualizarLista();      // Chama a função para atualizar a exibição da lista
    document.getElementById('amigo').value = ''; // Limpa o campo de entrada
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista atual

    for (const amigo of amigos) {
        const listItem = document.createElement('li');
        listItem.textContent = amigo;
        listaAmigos.appendChild(listItem);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }

    const amigosEmbaralhados = [...amigos]; // Cria uma cópia do array original
    embaralhar(amigosEmbaralhados); // Embaralha a cópia

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa resultados anteriores

     for (let i = 0; i < amigosEmbaralhados.length; i++) {
        const amigoAtual = amigosEmbaralhados[i];
        const proximoAmigo = amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length]; // Garante circularidade

        const resultadoItem = document.createElement('li');
        resultadoItem.textContent = `${amigoAtual} -> ${proximoAmigo}`;
        resultado.appendChild(resultadoItem);
    }
}

// Função de embaralhamento (Fisher-Yates Shuffle)
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos de posição
    }
}
