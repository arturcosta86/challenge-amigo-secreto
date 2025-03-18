Explicação clara e concisa do código fornecido:

### **Estrutura Geral**
O código é um script JavaScript (`app.js`) que gerencia uma lista de amigos, permite adicionar novos amigos, exibir a lista e sortear os amigos de forma circular.

---

### **Variáveis e Funções**

1. **`let amigos = [];`**
   - Um array vazio que armazena os nomes dos amigos.

2. **`adicionarAmigo()`**
   - Adiciona um nome ao array `amigos`.
   - Verifica se o campo de entrada está vazio ou se o nome já existe na lista.
   - Se válido, adiciona o nome ao array e atualiza a exibição da lista.

3. **`atualizarLista()`**
   - Atualiza a exibição da lista de amigos no HTML.
   - Limpa a lista atual e recria os itens (`<li>`) com os nomes do array `amigos`.

4. **`sortearAmigo()`**
   - Sorteia os amigos de forma circular.
   - Verifica se há pelo menos dois amigos na lista.
   - Embaralha a lista e exibe o resultado no formato `Amigo1 -> Amigo2`.

5. **`embaralhar(array)`**
   - Implementa o algoritmo de embaralhamento Fisher-Yates.
   - Embaralha os elementos do array de forma aleatória.

---

### **Funcionamento**

1. **Adicionar Amigo**:
   - O usuário insere um nome no campo de entrada.
   - O nome é validado e adicionado ao array `amigos`.
   - A lista de amigos é atualizada no HTML.

2. **Sortear Amigos**:
   - O usuário clica em "Sortear".
   - A lista de amigos é embaralhada e exibida em pares circulares.

---

### **Exemplo de Uso**
1. Adicione nomes como "João", "Maria", "Pedro".
2. Clique em "Sortear" para ver resultados como `João -> Maria`, `Maria -> Pedro`, `Pedro -> João`.

---

### **Pontos Importantes**
- **Validações**: Evita entradas vazias ou duplicadas.
- **Circularidade**: Garante que o último nome aponte para o primeiro.
- **Embaralhamento**: Usa um algoritmo eficiente para aleatoriedade.
