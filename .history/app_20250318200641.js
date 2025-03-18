//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];
let sorteioRealizado = false;

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    const inputAmigo = document.getElementById('amigo');
    const btnAdicionar = document.querySelector('.button-add');
    const btnSortear = document.querySelector('.button-draw');
    
    // Adicionar amigo ao pressionar Enter
    inputAmigo.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            adicionarAmigo();
        }
    });
    
    // Atualizar estado do botão de sortear
    atualizarEstadoBotaoSortear();
    
    // Adicionar feedback visual para campos
    inputAmigo.addEventListener('input', () => {
        const feedbackElement = document.getElementById('feedback-message');
        if (feedbackElement) {
            feedbackElement.textContent = '';
            feedbackElement.classList.remove('error-message', 'success-message');
        }
    });
});

function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value;
    const feedbackElement = document.getElementById('feedback-message') || criarElementoFeedback();

    // Validação: Campo vazio
    if (nomeAmigo.trim() === '') {
        mostrarFeedback(feedbackElement, 'Por favor, insira um nome válido.', 'error');
        return;
    }

    // Validação: Nome já existe na lista
    if (amigos.includes(nomeAmigo)) {
        mostrarFeedback(feedbackElement, 'Este nome já foi adicionado.', 'error');
        document.getElementById('amigo').value = '';
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nomeAmigo);
    mostrarFeedback(feedbackElement, `${nomeAmigo} adicionado com sucesso!`, 'success');
    
    // Atualiza a interface
    atualizarLista();
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
    
    // Se um sorteio já foi realizado e um novo amigo foi adicionado,
    // limpa os resultados anteriores para evitar confusão
    if (sorteioRealizado) {
        const resultado = document.getElementById('resultado');
        limparElemento(resultado);
        sorteioRealizado = false;
    }
    
    atualizarEstadoBotaoSortear();
}

function criarElementoFeedback() {
    const feedbackElement = document.createElement('div');
    feedbackElement.id = 'feedback-message';
    feedbackElement.setAttribute('aria-live', 'polite');
    
    const inputWrapper = document.querySelector('.input-wrapper');
    inputWrapper.parentNode.insertBefore(feedbackElement, inputWrapper.nextSibling);
    
    return feedbackElement;
}

function mostrarFeedback(elemento, mensagem, tipo) {
    elemento.textContent = mensagem;
    elemento.className = tipo === 'error' ? 'error-message' : 'success-message';
    
    // Limpar a mensagem após 5 segundos se for sucesso
    if (tipo === 'success') {
        setTimeout(() => {
            elemento.textContent = '';
            elemento.className = '';
        }, 3000);
    }
}

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    limparElemento(listaAmigos);

    if (amigos.length === 0) {
        const emptyMessage = document.createElement('li');
        emptyMessage.textContent = 'Nenhum amigo adicionado ainda.';
        emptyMessage.classList.add('empty-message');
        listaAmigos.appendChild(emptyMessage);
        return;
    }

    amigos.forEach((amigo, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = amigo;
        
        // Adicionar botão de remover
        const btnRemover = document.createElement('button');
        btnRemover.textContent = '×';
        btnRemover.classList.add('btn-remove');
        btnRemover.setAttribute('aria-label', `Remover ${amigo}`);
        btnRemover.onclick = () => removerAmigo(index);
        
        listItem.appendChild(btnRemover);
        listaAmigos.appendChild(listItem);
    });
}

function removerAmigo(index) {
    const nomeRemovido = amigos[index];
    amigos.splice(index, 1);
    
    const feedbackElement = document.getElementById('feedback-message') || criarElementoFeedback();
    mostrarFeedback(feedbackElement, `${nomeRemovido} removido da lista.`, 'success');
    
    atualizarLista();
    atualizarEstadoBotaoSortear();
    
    // Se um sorteio já foi realizado e um amigo foi removido,
    // limpa os resultados anteriores
    if (sorteioRealizado) {
        const resultado = document.getElementById('resultado');
        limparElemento(resultado);
        sorteioRealizado = false;
    }
}

function limparElemento(elemento) {
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}

function atualizarEstadoBotaoSortear() {
    const btnSortear = document.querySelector('.button-draw');
    const podeRealizar = amigos.length >= 2;
    
    btnSortear.disabled = !podeRealizar;
    btnSortear.classList.toggle('disabled', !podeRealizar);
    
    if (!podeRealizar) {
        btnSortear.setAttribute('aria-label', 'Adicione pelo menos dois amigos para sortear');
    } else {
        btnSortear.setAttribute('aria-label', 'Sortear amigo secreto');
    }
}

function limparTodosAmigos() {
    if (amigos.length === 0) return;
    
    if (confirm('Tem certeza que deseja limpar a lista de amigos?')) {
        amigos = [];
        atualizarLista();
        atualizarEstadoBotaoSortear();
        
        const resultado = document.getElementById('resultado');
        limparElemento(resultado);
        sorteioRealizado = false;
        
        const feedbackElement = document.getElementById('feedback-message') || criarElementoFeedback();
        mostrarFeedback(feedbackElement, 'Lista de amigos limpa.', 'success');
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        const feedbackElement = document.getElementById('feedback-message') || criarElementoFeedback();
        mostrarFeedback(feedbackElement, 'Adicione pelo menos dois amigos para sortear.', 'error');
        return;
    }

    const amigosEmbaralhados = [...amigos]; // Cria uma cópia do array original
    embaralhar(amigosEmbaralhados); // Embaralha a cópia

    const resultado = document.getElementById('resultado');
    limparElemento(resultado); // Limpa resultados anteriores

    // Criar cabeçalho de resultados
    const headerResult = document.createElement('h3');
    headerResult.textContent = 'Resultado do Sorteio';
    headerResult.classList.add('result-header');
    resultado.appendChild(headerResult);

    for (let i = 0; i < amigosEmbaralhados.length; i++) {
        const amigoAtual = amigosEmbaralhados[i];
        const proximoAmigo = amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length]; // Garante circularidade

        const resultadoItem = document.createElement('li');
        resultadoItem.innerHTML = `<strong>${amigoAtual}</strong> → ${proximoAmigo}`;
        resultado.appendChild(resultadoItem);
    }
    
    // Adicionar botão para novo sorteio
    const btnNovoSorteio = document.createElement('button');
    btnNovoSorteio.textContent = 'Realizar Novo Sorteio';
    btnNovoSorteio.classList.add('button-new-draw');
    btnNovoSorteio.onclick = sortearAmigo;
    resultado.appendChild(btnNovoSorteio);
    
    sorteioRealizado = true;
    
    // Scroll para o resultado
    resultado.scrollIntoView({ behavior: 'smooth' });
}

// Função de embaralhamento (Fisher-Yates Shuffle)
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos de posição
    }
}