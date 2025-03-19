# 🎲 Sorteador de Amigos | Escolha seu vencedor!

<div align="center">
  <img src="assets/amigo-secreto.png" alt="Banner do Sorteador de Amigos" width="650px" />
  <br><br>
  
  [![Deploy with Vercel](https://img.shields.io/badge/Deploy%20with-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
  [![GitHub stars](https://img.shields.io/github/stars/seu-usuario/sorteador-amigos?style=for-the-badge&logo=github)](https://github.com/seu-usuario/sorteador-amigos/stargazers)
  [![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
  
</div>

## 🌟 Sobre o Projeto

**Sorteador de Amigos** é uma ferramenta web elegante e intuitiva que permite realizar sorteios aleatórios com apenas alguns cliques. Perfeito para sorteios durante eventos, seleção de ganhadores de brindes, definição de ordem em apresentações, ou qualquer ocasião onde você precisa de um método justo e divertido para escolher alguém!

### ✨ Demonstração em Ação

> Confira nossa aplicação funcionando em tempo real: [sorteador-amigos.vercel.app](https://sorteador-amigos.vercel.app)

## 📱 Interface Responsiva

O Sorteador de Amigos foi cuidadosamente desenvolvido para funcionar perfeitamente em qualquer dispositivo:

- 💻 **Desktop** - Experiência completa e imersiva
- 📱 **Mobile** - Interface adaptativa que mantém todas as funcionalidades
- 📔 **Tablets** - Aproveitamento ideal do espaço de tela intermediário

## 🚀 Funcionalidades Principais

<table>
  <tr>
    <td width="50%">
      <h3>🔄 Sorteio Instantâneo</h3>
      <p>Com apenas um clique, selecione um vencedor aleatório entre todos os participantes adicionados.</p>
    </td>
    <td width="50%">
      <h3>🎯 Validação Inteligente</h3>
      <p>Sistema que previne duplicatas e entradas vazias, garantindo a integridade do sorteio.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>✏️ Gestão Completa de Participantes</h3>
      <p>Adicione, remova e visualize facilmente a lista de participantes do sorteio.</p>
    </td>
    <td width="50%">
      <h3>🎉 Animação de Resultado</h3>
      <p>Efeito visual especial que destaca o vencedor, criando um momento de celebração.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>♿ Acessibilidade</h3>
      <p>Desenvolvido com atenção à acessibilidade para garantir que todos possam utilizar.</p>
    </td>
    <td width="50%">
      <h3>🔁 Sorteios Múltiplos</h3>
      <p>Possibilidade de realizar novos sorteios sem precisar recarregar a página.</p>
    </td>
  </tr>
</table>

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias web modernas para uma experiência fluida e agradável:

<div align="center">
  
  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google&logoColor=white)
  
</div>

### 🎨 Design Cuidadosamente Elaborado

- **Paleta de Cores:** Combinação harmoniosa com destaque para azul primário (#4B69FD) e laranja para ações importantes
- **Tipografia:** Fontes Inter e Merriweather para equilíbrio entre legibilidade e estética
- **Animações:** Efeitos sutis para melhorar a experiência do usuário sem distrações
- **Responsividade:** Adaptação completa para qualquer tamanho de tela

## 🔧 Guia de Instalação

Siga estes passos simples para ter o projeto funcionando em sua máquina local:

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/sorteador-amigos.git

# Entre no diretório
cd sorteador-amigos

# Se desejar usar um servidor local (opcional)
# Com Python (Python 3.x)
python -m http.server

# Com Node.js
npx serve
```

Após isso, acesse `http://localhost:8000` (Python) ou `http://localhost:5000` (Node.js) em seu navegador.

## 💡 Como Usar

O Sorteador de Amigos foi projetado para ser extremamente intuitivo, mas aqui está um guia rápido:

1. **Adicione participantes** digitando o nome e clicando no botão "Adicionar" ou pressionando Enter
2. **Remova participantes** individualmente clicando no "×" ao lado do nome, ou todos de uma vez com "Limpar lista"
3. **Realize o sorteio** clicando no botão "Sortear" quando estiver tudo pronto
4. **Veja o resultado** destacado com animação especial na área de resultados
5. **Faça novos sorteios** se necessário, sem precisar reiniciar o processo

## 📊 Casos de Uso

O Sorteador de Amigos é versátil e pode ser utilizado em diversos contextos:

- 🎁 **Sorteio de brindes** em eventos ou promoções
- 🎓 **Definição de ordem de apresentação** em salas de aula ou eventos
- 🏢 **Sorteios corporativos** para distribuição de tarefas ou benefícios
- 🎮 **Sorteios em lives e streams** para interagir com o público
- 👨‍👩‍👧‍👦 **Divisão de tarefas familiares** de forma justa e divertida

## 🧠 Detalhes Técnicos

Este projeto utiliza JavaScript puro (vanilla) com foco em:

- **DOM Manipulation** para interação com elementos HTML
- **Event Listeners** para capturar interações do usuário
- **Validação de dados** para garantir integridade do sorteio
- **Fisher-Yates algorithm** para sorteio verdadeiramente aleatório
- **Animações CSS** para melhorar a experiência visual
- **LocalStorage** para persistência de dados (na versão futura)

## 🔍 Estrutura do Projeto

```
sorteador-amigos/
├── index.html         # Estrutura da página
├── style.css          # Estilização completa
├── app.js             # Lógica do aplicativo
└── assets/            # Recursos visuais
    └── amigo-secreto.png
    └── play_circle_outline.png
```

## 🚧 Próximos Passos

O desenvolvimento do Sorteador de Amigos continua! Aqui estão alguns recursos planejados para o futuro:

- [ ] **Modo escuro** para uso confortável em qualquer ambiente
- [ ] **Persistência de dados** usando LocalStorage para manter a lista entre sessões
- [ ] **Exportação dos resultados** em formato PDF ou para compartilhamento
- [ ] **Personalização de temas** para adaptar o visual a diferentes ocasiões
- [ ] **Histórico de sorteios** para consulta de resultados anteriores
- [ ] **Animação do processo de escolha** para maior suspense e engajamento

## 👥 Como Contribuir

Sua contribuição é muito bem-vinda! Siga estes passos:

1. **Fork o projeto**
2. **Crie sua branch** (`git checkout -b feature/incrivel-funcionalidade`)
3. **Commit suas alterações** (`git commit -m 'Adiciona incrível funcionalidade'`)
4. **Push para a branch** (`git push origin feature/incrivel-funcionalidade`)
5. **Abra um Pull Request**

### 📝 Diretrizes para Contribuição

- Mantenha o código limpo e bem comentado
- Siga o padrão de estilo existente
- Adicione testes para novas funcionalidades
- Atualize a documentação conforme necessário

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE) - consulte o arquivo LICENSE para detalhes.

## 👏 Agradecimentos

- Google Fonts pelas incríveis fontes
- Comunidade de desenvolvedores por inspiração e recursos
- Todos os usuários que testaram e forneceram feedback

<div align="center">
  <br>
  <p>
    <strong>Desenvolvido com ❤️ por <a href="https://github.com/seu-usuario">Seu Nome</a></strong>
  </p>
  <p>
    <a href="https://seu-portfolio.com">Website</a> •
    <a href="https://linkedin.com/in/seu-usuario">LinkedIn</a> •
    <a href="https://twitter.com/seu-usuario">Twitter</a>
  </p>
</div>